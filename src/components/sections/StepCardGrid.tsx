import React from 'react';

interface StepCardGridProps {
  items: { title: string; description: string }[];
  columns?: 1 | 3 | 4 | 6;
}

export default function StepCardGrid({ items, columns = 3 }: StepCardGridProps) {
  // columns=1 is for a single-card use: a plain grid-cols-3 with one item leaves the
  // other two tracks empty, exposing the grid's own bg-line background as dead space.
  const colClass = columns === 1 ? 'grid-cols-1 md:max-w-[380px]' : columns === 3 ? 'grid-cols-1 md:grid-cols-3' : columns === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6';

  return (
    <div className={`grid ${colClass} gap-[1px] bg-line border border-line mt-[12px]`}>
      {items.map((item, idx) => (
        <div key={idx} className="bg-white p-[38px_32px_34px] flex flex-col gap-[20px] transition-colors hover:bg-[#F5F3EE]">
          <h3 className="font-serif font-medium text-[24px] leading-[1.2] text-ink">{item.title}</h3>
          <p className="font-sans text-[13.5px] text-stone leading-[1.5]">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
