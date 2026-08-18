import React from 'react';
import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import { CANONICAL_ORIGIN } from '@/data/site';

interface SubPageHeroProps {
  breadcrumbs: { label: string; href?: string }[];
  eyebrow: string;
  title: string;
  lede: string;
  ctaText: string;
  ctaHref: string;
  dataCta?: string;
  // Optional supporting photo. When present the hero becomes an asymmetric
  // split (copy left, image right) from lg up, and stacks on smaller screens.
  // Typed as a static import rather than a URL string on purpose: only a static
  // import gives the build the dimensions and the blur placeholder below.
  image?: { src: StaticImageData; alt: string };
}

export default function SubPageHero({ breadcrumbs, eyebrow, title, lede, ctaText, ctaHref, dataCta, image }: SubPageHeroProps) {
  // The trail is already on the page for people; this is the same trail for search
  // engines, which is what earns the breadcrumb line in a result instead of a bare
  // URL. Unlike FAQ markup -- which Google stopped showing for sites like this one in
  // 2023 -- breadcrumb rich results are still live. The final crumb carries no `item`,
  // per schema.org: it is the page you are already on.
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `${CANONICAL_ORIGIN}${crumb.href === '/' ? '' : crumb.href}` } : {}),
    })),
  };

  return (
    <header className="py-[96px] sm:py-[84px] bg-white border-b border-line">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className={`wrap ${image ? 'lg:grid lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:items-center' : ''}`}>
        <div>
          <nav aria-label="Breadcrumb" className="mb-8 font-mono text-[11px] uppercase tracking-[0.14em] text-stone">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-ink transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-ink">{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
              </React.Fragment>
            ))}
          </nav>
          <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-[22px]">{eyebrow}</span>
          <h1 className="text-[clamp(38px,6vw,72px)] leading-[1.05] tracking-[-0.01em] mb-6 max-w-[800px] font-serif font-medium">{title}</h1>
          <p className="text-stone text-[18px] max-w-[620px] mb-10 leading-[1.65]">{lede}</p>
          <Link href={ctaHref} className="inline-flex items-center justify-center min-h-[48px] bg-ink text-white px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] hover:bg-bronze transition-colors duration-300" data-cta={dataCta}>
            {ctaText}
          </Link>
        </div>

        {/* 3:2 keeps the crop shallow: the source photos are 16:9, and a taller
            frame would cut subjects off at the edges. `priority` because this
            image is the LCP element on the pages that use it. */}
        {image && (
          <div className="relative mt-12 lg:mt-0 aspect-[3/2] w-full overflow-hidden border border-line">
            {/* `placeholder="blur"` inlines a tiny base64 preview in the HTML, so the
                frame is filled from the first paint instead of sitting empty until the
                full image lands. On a phone `sizes` resolves to 100vw, which on a 3x
                screen asks for the 1920px variant -- the largest request on the page,
                and the one whose arrival used to read as "the picture loaded late". */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </header>
  );
}
