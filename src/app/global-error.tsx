"use client";

import React, { useEffect } from 'react';

/**
 * The last resort: this replaces the document when the root layout itself fails, so
 * none of the site's chrome, fonts or stylesheet are available. Everything here is
 * therefore inline and self-contained -- it has to render correctly with no CSS
 * pipeline at all. Colours are the brand tokens by literal value for the same reason.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled root error', { digest: error.digest, message: error.message });
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          backgroundColor: '#F7F3EA',
          color: '#161616',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          lineHeight: 1.65,
        }}
      >
        <main style={{ maxWidth: '520px' }}>
          <p
            style={{
              margin: '0 0 22px',
              fontSize: '11.5px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#856437',
            }}
          >
            TruWest Mortgage
          </p>
          <h1 style={{ margin: '0 0 24px', fontSize: '38px', lineHeight: 1.05, fontWeight: 500 }}>
            The site failed to load.
          </h1>
          <p style={{ margin: '0 0 40px', fontSize: '17px', color: '#635F57' }}>
            An error on our end. Reload the page, or call and we&apos;ll help you directly.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <button
              type="button"
              onClick={reset}
              style={{
                minHeight: '48px',
                padding: '14px 34px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: '#161616',
                color: '#F7F3EA',
                fontSize: '15px',
                fontFamily: 'inherit',
              }}
            >
              Reload
            </button>
            <a
              href="tel:+16045930197"
              style={{
                minHeight: '48px',
                padding: '14px 34px',
                border: '1px solid #161616',
                color: '#161616',
                textDecoration: 'none',
                fontSize: '15px',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              Call (604) 593-0197
            </a>
          </div>

          {error.digest && (
            <p style={{ marginTop: '40px', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635F57' }}>
              Reference {error.digest}
            </p>
          )}
        </main>
      </body>
    </html>
  );
}
