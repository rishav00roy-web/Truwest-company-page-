import React from 'react';

interface PullquoteProps {
  quote: string;
  author: string;
  dark?: boolean;
}

export default function Pullquote({ quote, author, dark = false }: PullquoteProps) {
  return (
    <div className="border-l-2 border-bronze pl-[28px] my-[64px] max-w-[720px] text-left">
      <p className={`font-serif italic font-medium text-[clamp(20px,2.4vw,26px)] leading-[1.45] m-0 max-w-none ${dark ? 'text-[#EDEBE6]' : 'text-ink'}`}>
        &ldquo;{quote}&rdquo;
      </p>
      <cite className={`font-mono text-[11px] tracking-[0.14em] uppercase block mt-[14px] not-italic ${dark ? 'text-[#B5B1A9]' : 'text-stone'}`}>
        {author}
      </cite>
    </div>
  );
}
