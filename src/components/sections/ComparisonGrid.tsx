import React from 'react';

interface ComparisonGridProps {
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
}

export default function ComparisonGrid({ leftTitle, leftItems, rightTitle, rightItems }: ComparisonGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#3A3A38] border border-[#3A3A38]">
      <div className="bg-ink py-[50px] px-6 md:px-[48px]">
        <span className="font-mono text-[11.5px] tracking-[0.2em] uppercase mb-[32px] block text-[#6E6A63]">{leftTitle}</span>
        <ul className="list-none m-0 p-0">
          {leftItems.map((item, idx) => (
            <li key={idx} className="py-[18px] border-b border-[#2C2C2A] text-[16.5px] leading-[1.5] text-[#9C988F] last:border-b-0">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-ink py-[50px] px-6 md:px-[48px]">
        <span className="font-mono text-[11.5px] tracking-[0.2em] uppercase mb-[32px] block text-emerald-dark-bg">{rightTitle}</span>
        <ul className="list-none m-0 p-0">
          {rightItems.map((item, idx) => (
            <li key={idx} className="py-[18px] border-b border-[#2C2C2A] text-[16.5px] leading-[1.5] text-[#EDEBE6] last:border-b-0">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
