import React from 'react';
import { BoothInfo, ALL_BOOTHS } from '../boothData';
import { HeartIcon } from './Icons';
import { getBoothColorClass } from '../utils';

interface BoothBlockProps {
  prefix: string;
  count: number;
  cols: number;
  label?: string;
  startOffset?: number;
  visitedBooths: string[];
  favoriteBooths: string[];
  setSelectedBooth: (booth: BoothInfo) => void;
}

const BoothBlock: React.FC<BoothBlockProps> = ({
  prefix,
  count,
  cols,
  label,
  startOffset = 1,
  visitedBooths,
  favoriteBooths,
  setSelectedBooth
}) => {
  const getBoothData = (id: string) => {
    return ALL_BOOTHS.find(b => b.id === id);
  };

  return (
    <div className="relative group">
      {label && (
        <div className="absolute -top-[15px] left-0 text-[0.6rem] font-bold text-[#666] pointer-events-none whitespace-nowrap">
          {label}
        </div>
      )}
      <div
        className="grid gap-1 bg-[#fdfdfd] p-1 border border-[#eee] rounded shadow-sm"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {Array.from({ length: count }).map((_, i) => {
          const num = i + startOffset;
          const boothId = `${prefix}${String(num).padStart(2, '0')}`;
          const booth = getBoothData(boothId);
          return (
            <div
              key={i}
              title={booth?.name || boothId}
              onClick={() => booth && setSelectedBooth(booth)}
              className={`w-8 h-6 border rounded-sm flex items-center justify-center text-[0.6rem] transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary cursor-pointer relative ${getBoothColorClass(prefix)} ${
                !booth ? 'opacity-30 grayscale' : ''
              } ${visitedBooths.includes(boothId) ? 'ring-2 ring-primary ring-inset' : ''}`}
            >
              {prefix}
              {String(num).padStart(2, '0')}
              {visitedBooths.includes(boothId) && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary text-white rounded-full flex items-center justify-center text-[0.5rem] shadow-sm">
                  ✓
                </span>
              )}
              {favoriteBooths.includes(boothId) && (
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500 text-white rounded-full flex items-center justify-center shadow-sm border border-white">
                  <HeartIcon filled className="w-1.5 h-1.5" />
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoothBlock;
