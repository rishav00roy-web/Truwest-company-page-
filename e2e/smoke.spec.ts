import { test, expect, devices } from '@playwright/test';

/**
 * Smoke coverage for the failures this site has actually shipped, rather than for
 * the framework. Each block corresponds to something that reached a real visitor:
 * a mistyped-case URL rendering the bare 404 inside the site chrome, the hero stat
 * bar landing on top of the primary CTA on a phone, and the nav island overflowing
 * its own rounded box.
 */

test.describe('routing', () => {
  test('lowercases a mixed-case path instead of 404ing', async ({ request }) => {
    const res = await request.get('/Self-Employed', { maxRedirects: 0 });
    expect(res.status()).toBe(308);
    expect(res.headers()['location']).toContain('/self-employed');
  });

  test('a mixed-case path resolves to the real page after the redirect', async ({ page }) => {
    await page.goto('/Mortgage-Broker-Vancouver');
    expect(new URL(page.url()).pathname).toBe('/mortgage-broker-vancouver');
    await expect(page.locator('h1')).toContainText('Vancouver');
  });

  test('query strings survive the redirect untouched', async ({ request }) => {
    const res = await request.get('/Calculators?ref=Partner_A', { maxRedirects: 0 });
    expect(res.headers()['location']).toContain('ref=Partner_A');
  });

  test('an unknown path gets the branded 404, not the bare framework one', async ({ page }) => {
    const res = await page.goto('/mortgage-broker-toronto');
    expect(res?.status()).toBe(404);
    await expect(page.locator('h1')).toContainText('That page moved');
    // The whole point of the branded page: somewhere to go from here.
    expect(await page.locator('main a').count()).toBeGreaterThan(4);
  });
});

test.describe('mobile layout', () => {
  test.use({ viewport: { width: 402, height: 738 }, isMobile: true, hasTouch: true });

  const paths = ['/', '/self-employed', '/commercial-investors', '/calculators', '/locations'];

  for (const path of paths) {
    test(`no horizontal scroll at 402px on ${path}`, async ({ page }) => {
      await page.goto(path);
      const { scrollWidth, clientWidth } = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
    });
  }

  test('the hero stat bar clears the CTA', async ({ page }) => {
    await page.goto('/');
    const overlap = await page.evaluate(() => {
      const header = document.getElementById('top')!;
      const cta = header.querySelector('a.shine-cta')!.getBoundingClientRect();
      const stats = header.querySelector('[class*="md:absolute"]')!.getBoundingClientRect();
      return cta.bottom - stats.top;
    });
    expect(overlap).toBeLessThanOrEqual(0);
  });

  test('the nav island contains its own contents', async ({ page }) => {
    await page.goto('/');
    const overflow = await page.evaluate(() => {
      const island = document.querySelector('nav > div')!;
      return island.scrollWidth - island.clientWidth;
    });
    expect(overflow).toBeLessThanOrEqual(0);
  });

  test('the chat launcher stays off the hero until the visitor scrolls past it', async ({ page }) => {
    await page.goto('/');
    const wrapper = page.locator('button[aria-label="Open site assistant"]').locator('..');
    await expect(wrapper).toHaveCSS('opacity', '0');

    // The scroll is repeated on every poll rather than fired once. The listener that
    // reveals the launcher is attached on hydration, and a single scroll dispatched
    // before that lands is simply lost -- which is what made this flake under parallel
    // load while passing every time in isolation.
    await expect
      .poll(async () => {
        await page.evaluate(() => window.scrollTo({ top: 900, behavior: 'instant' }));
        return wrapper.evaluate((el) => getComputedStyle(el).opacity);
      }, { timeout: 10_000 })
      .toBe('1');
  });
});

test.describe('desktop layout', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('the nav CTA is present on desktop and absent on mobile', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav');
    await expect(nav.getByRole('link', { name: 'Apply Now' })).toBeVisible();

    await page.setViewportSize(devices['iPhone 13'].viewport);
    await expect(nav.getByRole('link', { name: 'Apply Now' })).toBeHidden();
  });
});
