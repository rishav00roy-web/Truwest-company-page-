import React from 'react';

interface ReviewWallProps {
  eyebrow?: string;
  title: string;
  reviews: { stars?: number; quote: string | string[]; author: string }[];
}

export default function ReviewWall({ eyebrow, title, reviews }: ReviewWallProps) {
  return (
    <section className="py-[100px] text-center" id="reviews">
      <div className="wrap">
        {eyebrow && <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-[22px]">{eyebrow}</span>}
        <h2 className="font-serif font-medium text-[clamp(30px,4vw,46px)] leading-[1.06] tracking-[-0.01em] mb-[14px]">{title}</h2>
        <p className="text-stone max-w-[480px] mx-auto mb-[40px] text-[17px]">
          Read genuine client feedback on our Google Business Profile.
        </p>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-[20px] text-left mb-[56px]">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white border border-line p-[30px_28px_26px] mb-[20px] break-inside-avoid">
              <span role="img" aria-label={`${review.stars || 5} out of 5 stars`} className="text-bronze text-[13px] tracking-[3px] block mb-[14px]">
                {Array(review.stars || 5).fill('★').join('')}
              </span>
              {Array.isArray(review.quote) ? (
                review.quote.map((p, i) => <p key={i} className="font-sans text-[14.5px] text-[#4A463F] leading-[1.65] m-0 mb-[12px] max-w-none">{p}</p>)
              ) : (
                <p className="font-sans text-[14.5px] text-[#4A463F] leading-[1.65] m-0 mb-[12px] max-w-none">{review.quote}</p>
              )}
              <span className="font-mono text-[11px] tracking-[0.08em] text-stone uppercase block mt-[16px]">
                {review.author}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-[16px] justify-center flex-wrap">
          <a className="inline-flex items-center justify-center min-h-[48px] bg-ink text-white px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] hover:bg-bronze transition-colors duration-300 w-full sm:w-auto" href="https://share.google/paWEQpy3IslpiACOP" target="_blank" rel="noopener noreferrer">Read all reviews on Google &rarr;</a>
          <a className="inline-flex items-center justify-center min-h-[48px] bg-transparent text-ink border border-ink px-9 py-4 font-sans font-medium text-[15px] tracking-[0.02em] hover:bg-ink hover:text-white transition-colors duration-300 w-full sm:w-auto" href="https://g.page/r/CbWLVqUKT8bCEBE/review" target="_blank" rel="noopener noreferrer">Leave a Google Review</a>
        </div>
      </div>
    </section>
  );
}
