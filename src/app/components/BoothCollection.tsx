import React from 'react';
import { BoothInfo, ALL_BOOTHS } from '../boothData';
import { HeartIcon } from './Icons';
import { getFlavorBadge, getRegionTag, getImporterBadge } from './Badges';
import { getBoothColorClass } from '../utils';

interface BoothCollectionProps {
  favoriteBooths: string[];
  setSelectedBooth: (booth: BoothInfo) => void;
  toggleFavorite: (id: string) => void;
  boothNotes: Record<string, string>;
  setActiveTab: (tab: 'map' | 'search' | 'collection' | 'schedule') => void;
}

const BoothCollection = ({
  favoriteBooths,
  setSelectedBooth,
  toggleFavorite,
  boothNotes,
  setActiveTab
}: BoothCollectionProps) => {
  return (
    <section className="fade-in px-2 sm:px-0">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-black flex items-center gap-2">
          <HeartIcon filled className="text-pink-500 w-6 h-6" /> 내가 찜한 부스
        </h2>
        <span className="text-xs font-bold text-text-dim bg-bg-sub px-3 py-1 rounded-full border border-glass-border">
          총 {favoriteBooths.length}개
        </span>
      </div>

      {favoriteBooths.length > 0 ? (
        <div className="grid grid-cols-1 gap-3">
          {favoriteBooths
            .map(id => ALL_BOOTHS.find(b => b.id === id))
            .filter((b): b is BoothInfo & { region: string } => !!b)
            .map((booth) => (
            <div 
              key={booth.id} 
              onClick={() => setSelectedBooth(booth)}
              className="glass-card p-4 flex flex-col gap-3 bg-white cursor-pointer hover:border-pink-300 transition-all duration-300 border-l-4 relative"
              style={{ borderLeftColor: '#ec4899' }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 shrink-0 rounded-xl flex flex-col items-center justify-center border border-glass-border/30 shadow-sm ${getBoothColorClass(booth.id.charAt(0))}`}>
                  <span className="text-[0.6rem] opacity-60 font-bold leading-none mb-0.5">{booth.id.charAt(0)}</span>
                  <span className="text-[0.8rem] font-black leading-none">{booth.id.slice(1)}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm font-bold mb-1.5">{booth.name}</h3>
                  <div className="flex items-center gap-2 overflow-x-auto scrollbar-thin">
                    {getRegionTag(booth.details?.region_name)}
                    {getImporterBadge(booth.details?.tags, true)}
                    {getFlavorBadge(booth.details?.flavor)}
                  </div>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(booth.id);
                  }}
                  className="w-10 h-10 flex items-center justify-center text-pink-500 transition-transform active:scale-90"
                >
                  <HeartIcon filled className="w-6 h-6" />
                </button>
              </div>
              
              {booth.details?.features && (
                <p className="text-[0.7rem] text-text-dim leading-relaxed line-clamp-1 italic">
                  "{booth.details.features}"
                </p>
              )}

              {boothNotes[booth.id] && (
                <div className="mt-1 p-2.5 bg-accent/5 rounded-xl border border-accent/10">
                  <p className="text-[0.65rem] text-text-dim line-clamp-1 italic">
                    📝 {boothNotes[booth.id]}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-glass-border">
          <div className="text-4xl mb-4">🤍</div>
          <p className="text-text-dim font-bold mb-1">관심 부스가 없습니다.</p>
          <p className="text-xs text-text-dim/60">부스 상세 정보에서 하트 버튼을 눌러 등록해보세요!</p>
          <button 
            onClick={() => setActiveTab('search')}
            className="mt-6 px-6 py-2 bg-primary text-white rounded-full text-xs font-bold shadow-lg shadow-primary/20"
          >
            부스 찾아보기
          </button>
        </div>
      )}
    </section>
  );
};

export default BoothCollection;
