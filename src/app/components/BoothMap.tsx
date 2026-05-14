import React from 'react';
import { BoothInfo, ALL_BOOTHS } from '../boothData';
import { HeartIcon } from './Icons';
import { getBoothColorClass } from '../utils';

interface BoothMapProps {
  activeHall: 1 | 2;
  setActiveHall: (hall: 1 | 2) => void;
  visitedBooths: string[];
  favoriteBooths: string[];
  setSelectedBooth: (booth: BoothInfo) => void;
}

const BoothMap = ({
  activeHall,
  setActiveHall,
  visitedBooths,
  favoriteBooths,
  setSelectedBooth
}: BoothMapProps) => {
  const getBoothData = (id: string) => {
    return ALL_BOOTHS.find(b => b.id === id);
  };

  const renderBlock = (prefix: string, count: number, cols: number, label?: string, startOffset: number = 1) => (
    <div className="relative group">
      {label && <div className="absolute -top-[15px] left-0 text-[0.6rem] font-bold text-[#666] pointer-events-none whitespace-nowrap">{label}</div>}
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
              className={`w-8 h-6 border rounded-sm flex items-center justify-center text-[0.6rem] transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary cursor-pointer relative ${getBoothColorClass(prefix)} ${!booth ? 'opacity-30 grayscale' : ''} ${visitedBooths.includes(boothId) ? 'ring-2 ring-primary ring-inset' : ''}`}
            >
              {prefix}{String(num).padStart(2, '0')}
              {visitedBooths.includes(boothId) && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary text-white rounded-full flex items-center justify-center text-[0.5rem] shadow-sm">✓</span>
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

  return (
    <section className="fade-in">
      <div className="mb-8 flex flex-col gap-4 text-center">
        <div className="flex bg-bg-sub p-1 rounded-xl w-fit mx-auto shadow-inner">
          <button 
            className={`py-2 px-6 rounded-lg text-xs font-bold transition-all duration-300 ${activeHall === 1 ? 'bg-white text-primary shadow-sm' : 'text-text-dim'}`}
            onClick={() => setActiveHall(1)}
          >
            1관 (Hall 1)
          </button>
          <button 
            className={`py-2 px-6 rounded-lg text-xs font-bold transition-all duration-300 ${activeHall === 2 ? 'bg-white text-primary shadow-sm' : 'text-text-dim'}`}
            onClick={() => setActiveHall(2)}
          >
            2관 (Hall 2)
          </button>
        </div>
      </div>

      <div className="bg-white border border-glass-border rounded-2xl p-4 sm:p-8 relative overflow-x-auto shadow-sm">
        <div className="min-w-[600px] flex flex-col gap-6">
          {activeHall === 1 ? (
            <div className="fade-in">
              {/* Hall 1 Top Zones */}
              <div className="flex gap-4 justify-center mb-10">
                <div className="bg-[#f1f3f5] border border-dashed border-[#dee2e6] text-[#495057] rounded-lg flex items-center justify-center text-[0.65rem] font-bold p-2 text-center w-[110px]">참가업체 라운지</div>
                <div className="bg-[#f1f3f5] border border-dashed border-[#dee2e6] text-[#495057] rounded-lg flex items-center justify-center text-[0.65rem] font-bold p-2 text-center w-[160px]">라운지 (Lounge)</div>
                <div className="bg-[#e3f2fd] border border-dashed border-[#90caf9] text-[#1565c0] rounded-lg flex items-center justify-center text-[0.65rem] font-bold p-2 text-center w-[55px]">세척존</div>
                <div className="bg-[#e7f5ff] border border-dashed border-[#a5d8ff] text-[#1971c2] rounded-lg flex items-center justify-center text-[0.65rem] font-bold p-2 text-center w-[110px]">세미나존</div>
              </div>

              <div className="flex gap-8 justify-center">
                {/* Left Sidebar: Block B */}
                <div className="flex flex-col gap-3">
                  {renderBlock('B', 11, 1, '수입사', 3)}
                </div>

                {/* Main Center Blocks */}
                <div className="flex flex-col gap-8">
                  <div className="flex gap-4">
                    {renderBlock('K', 5, 5, '프리미엄')}
                    <div className="w-5" />
                    {renderBlock('J', 17, 9, '인기')}
                  </div>
                  <div className="flex gap-4">
                    {renderBlock('H', 20, 10, '전통')}
                  </div>
                  <div className="flex gap-4">
                    {renderBlock('G', 20, 10, '모던')}
                  </div>
                  <div className="flex gap-4">
                    {renderBlock('F', 20, 10, '신예')}
                  </div>
                  <div className="flex gap-4">
                    {renderBlock('E', 20, 10, '정통')}
                  </div>
                </div>

                {/* Right Sidebar: Block D, L */}
                <div className="flex flex-col gap-6">
                  {renderBlock('D', 9, 1, '특별')}
                  <div className="h-4" />
                  {renderBlock('L', 5, 1, 'L-Zone')}
                </div>
              </div>

              {/* Bottom row A */}
              <div className="flex gap-4 justify-center mt-12">
                {renderBlock('A', 13, 13, '안내/기타')}
              </div>

              {/* Hall 1 Bottom Zones */}
              <div className="flex gap-4 justify-center items-center mt-10">
                <div className="bg-[#f8f9fa] border border-dashed border-[#ced4da] rounded-lg flex items-center justify-center text-[0.65rem] font-bold text-[#495057] p-2 text-center w-[90px]">인포/의무존</div>
                <div className="bg-[#f8f9fa] border border-dashed border-[#ced4da] rounded-lg flex items-center justify-center text-[0.65rem] font-bold text-[#495057] p-2 text-center w-[90px]">한진택배</div>
                <div className="bg-bg py-1 px-4 rounded-full text-[0.65rem] font-bold border border-glass-border shadow-sm">로비 출입구 (ENTRANCE)</div>
              </div>
            </div>
          ) : (
            <div className="fade-in">
              {/* Hall 2 Top Zones */}
              <div className="flex gap-4 justify-end mb-10">
                <div className="bg-[#f1f3f5] border border-dashed border-[#dee2e6] text-[#495057] rounded-lg flex items-center justify-center text-[0.65rem] font-bold p-2 text-center w-[220px]">라운지 (Lounge)</div>
              </div>

              <div className="flex gap-10 justify-center">
                {/* Hall 2 Main Blocks */}
                <div className="flex flex-col gap-8">
                  <div className="flex gap-4">
                    {renderBlock('V', 9, 3, '푸드/편의')}
                    <div className="w-5" />
                    {renderBlock('R', 4, 4, 'R-Section')}
                  </div>
                  <div className="flex gap-4">
                    {renderBlock('Q', 14, 7, 'Q-Section')}
                  </div>
                  <div className="flex gap-4">
                    {renderBlock('P', 15, 7, 'P-Section')}
                  </div>
                  <div className="flex gap-4">
                    {renderBlock('M', 12, 6, 'M-Section')}
                  </div>
                </div>

                {/* Hall 2 Right Sidebar */}
                <div className="flex flex-col gap-6">
                  <div className="bg-[#e3f2fd] border border-dashed border-[#90caf9] text-[#1565c0] rounded-lg flex items-center justify-center text-[0.65rem] font-bold p-2 text-center h-[90px] w-[55px]">세척존</div>
                  {renderBlock('U', 12, 2, 'U-Block')}
                  <div className="bg-[#fff0f6] border border-dashed border-[#ffdeeb] text-[#c2185b] rounded-lg flex items-center justify-center text-[0.65rem] font-bold p-2 text-center h-[70px] w-[110px]">포토존 (술통존)</div>
                </div>
              </div>

              {/* Hall 2 Bottom Zones */}
              <div className="flex gap-4 justify-center mt-12">
                <div className="bg-bg py-1 px-4 rounded-full text-[0.65rem] font-bold border border-glass-border shadow-sm">로비 출입구 (ENTRANCE)</div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <p className="mt-6 text-text-dim text-[0.75rem] text-center leading-relaxed">
        💡 지도를 스와이프하여 전체 배치를 확인하세요.<br className="sm:hidden" /> 각 번호는 '부스검색' 탭에서 검색 가능합니다.
      </p>
    </section>
  );
};

export default BoothMap;
