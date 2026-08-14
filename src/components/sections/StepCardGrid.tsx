import React from 'react';

interface StepCardGridProps {
  items: { badge: string; title: string; description: string }[];
  columns?: 3 | 4 | 6;
}

export default function StepCardGrid({ items, columns = 3 }: StepCardGridProps) {
  const colClass = columns === 3 ? 'grid-cols-1 md:grid-cols-3' : columns === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6';
  
  return (
    <div className={`grid ${colClass} gap-[1px] bg-line border border-line mt-[12px]`}>
      {items.map((item, idx) => (
        <div key={idx} className="bg-white p-[38px_32px_34px] flex flex-col gap-[20px] transition-colors hover:bg-[#F5F3EE]">
          <span className="font-mono text-[11px] tracking-[0.18em] text-stone uppercase block">{item.badge}</span>
          <h3 className="font-serif font-medium text-[24px] leading-[1.2] text-ink">{item.title}</h3>
          <p className="font-sans text-[13.5px] text-stone leading-[1.5]">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
