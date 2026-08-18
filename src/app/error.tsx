"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

/**
 * Without this file a thrown render error gives Next's own screen: "Application error:
 * a client-side exception has occurred", unstyled, on a blank page, with the site's
 * phone number nowhere in sight. This keeps the visitor inside the site chrome and
 * keeps the two things they might actually want -- retry, or call someone -- in front
 * of them.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Nothing is wired to collect this yet. Until something is, the console is the
    // only record that exists, and the digest is what ties it to the server log.
    console.error('Unhandled error', { digest: error.digest, message: error.message });
  }, [error]);

  return (
    <section className="py-[120px] bg-white border-b border-line">
      <div className="wrap">
        <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-[22px]">
          Something broke
        </span>
        <h1 className="text-[clamp(38px,6vw,72px)] leading-[1.05] tracking-[-0.01em] mb-6 max-w-[800px] font-serif font-medium">
          That didn&apos;t load properly.
        </h1>
        <p className="text-stone text-[18px] max-w-[620px] mb-10 leading-[1.65]">
          An error on our end, not yours. Try again, and if it keeps happening call and
          we&apos;ll pick up where the site left off.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center min-h-[48px] bg-ink text-white px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] hover:bg-bronze transition-colors duration-300"
          >
            Try again
          </button>
          <a
            href="tel:+16045930197"
            data-cta="call-error"
            className="inline-flex items-center justify-center min-h-[48px] bg-transparent text-ink border border-ink px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] hover:bg-ink hover:text-white transition-colors duration-300"
          >
            Call (604) 593-0197
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center min-h-[48px] px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] text-stone hover:text-ink transition-colors duration-300"
          >
            Back to the homepage
          </Link>
        </div>

        {/* Support can ask for this; it is the only handle on which server render failed. */}
        {error.digest && (
          <p className="mt-10 font-mono text-[11px] tracking-[0.14em] uppercase text-stone">
            Reference {error.digest}
          </p>
        )}
      </div>
    </section>
  );
}
