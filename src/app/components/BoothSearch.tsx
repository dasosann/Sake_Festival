import React from 'react';
import { BoothInfo, FESTIVAL_BOOTHS } from '../boothData';
import { HeartIcon } from './Icons';
import { getFlavorBadge, getRegionTag, getImporterBadge, getStyleBadges } from './Badges';
import { getBoothColorClass } from '../utils';
import { getBoothStyleCategories } from '../data/styleCategories';

interface BoothSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredBooths: (BoothInfo & { region: string })[];
  setSelectedBooth: (booth: BoothInfo) => void;
  visitedBooths: string[];
  favoriteBooths: string[];
  boothNotes: Record<string, string>;
  expandedRegions: string[];
  setExpandedRegions: React.Dispatch<React.SetStateAction<string[]>>;
}

const BoothSearch = ({
  searchTerm,
  setSearchTerm,
  filteredBooths,
  setSelectedBooth,
  visitedBooths,
  favoriteBooths,
  boothNotes,
  expandedRegions,
  setExpandedRegions
}: BoothSearchProps) => {
  return (
    <section className="fade-in px-2 sm:px-0">
      <div className="mb-8 flex flex-col gap-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="부스 번호, 이름, 또는 클래식/모던/뉴에이지..." 
            className="py-3 px-5 rounded-2xl bg-bg-sub border border-glass-border text-text w-full outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-text-dim opacity-50">🔍</span>
        </div>
      </div>

      {searchTerm.trim() !== '' ? (
        <div className="grid grid-cols-1 gap-3 fade-in">
          {filteredBooths.map((booth) => (
            <div 
              key={`${booth.region}-${booth.id}`} 
              onClick={() => setSelectedBooth(booth)}
              className={`glass-card p-4 flex flex-col gap-3 bg-white cursor-pointer hover:border-primary/50 transition-all duration-300 border-l-4 relative overflow-hidden ${visitedBooths.includes(booth.id) ? 'bg-primary/2' : ''}`}
              style={{ borderLeftColor: `var(--${booth.region.toLowerCase()}-color, #ddd)` }}
            >
              {visitedBooths.includes(booth.id) && (
                <div className="absolute top-0 right-0 bg-primary text-white p-1 rounded-bl-xl shadow-sm z-10">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                </div>
              )}
              {favoriteBooths.includes(booth.id) && (
                <div className="absolute top-0 right-6 bg-red-500 text-white p-1 rounded-b-lg shadow-sm z-10 flex items-center justify-center">
                  <HeartIcon filled className="w-3 h-3" />
                </div>
              )}
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 shrink-0 rounded-xl flex flex-col items-center justify-center border border-glass-border/30 shadow-sm ${getBoothColorClass(booth.region)}`}>
                  <span className="text-[0.6rem] opacity-60 font-bold leading-none mb-0.5">{booth.region}</span>
                  <span className="text-[0.8rem] font-black leading-none">{booth.id.replace(booth.region, '')}</span>
                </div>
                <div className="grow">
                  <h3 className={`text-sm font-bold mb-1.5 ${visitedBooths.includes(booth.id) ? 'text-primary' : 'text-text'}`}>{booth.name}</h3>
                  <div className="flex items-center gap-2 overflow-x-auto scrollbar-thin">
                    {getRegionTag(booth.details?.region_name)}
                    {getImporterBadge(booth.details?.tags, true)}
                    {getStyleBadges(getBoothStyleCategories(booth))}
                    {getFlavorBadge(booth.details?.flavor)}
                  </div>
                </div>
                {!visitedBooths.includes(booth.id) && <span className="text-primary/30 self-center">❯</span>}
              </div>
              
              {booth.details?.products && booth.details.products.length > 0 && (
                <div className="mt-2 flex items-start gap-1.5 overflow-hidden px-1">
                  <span className="text-[0.7rem] shrink-0 opacity-70">🍶</span>
                  <p className="text-[0.65rem] text-text-dim line-clamp-1">
                    {booth.details.products.map(p => p.name).join(', ')}
                  </p>
                </div>
              )}
              
              {booth.details?.features && (
                <div className="mt-1">
                  <p className="text-[0.7rem] text-text-dim leading-relaxed line-clamp-2 italic">
                    "{booth.details.features}"
                  </p>
                </div>
              )}
              
              {boothNotes[booth.id] && (
                <div className="mt-2 p-3 bg-accent/5 rounded-xl border border-accent/10">
                  <p className="text-[0.7rem] text-accent font-bold mb-1 flex items-center gap-1">
                    <span>📝</span> 나의 메모
                  </p>
                  <p className="text-[0.7rem] text-text-dim line-clamp-1 italic">
                    {boothNotes[booth.id]}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        Object.keys(FESTIVAL_BOOTHS).sort().map((region) => {
          const boothsInRegion = filteredBooths
            .filter(b => b.region === region)
            .sort((a, b) => a.id.localeCompare(b.id));
            
          if (boothsInRegion.length === 0) return null;

          const isExpanded = expandedRegions.includes(region);

          return (
            <div key={region} className="mb-3">
              <button 
                onClick={() => {
                  setExpandedRegions(prev => 
                    prev.includes(region) 
                      ? prev.filter(r => r !== region) 
                      : [...prev, region]
                  );
                }}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-200 ${isExpanded ? 'bg-primary/5 border-primary/20' : 'bg-bg border-glass-border'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black ${getBoothColorClass(region)}`}>
                    {region}
                  </div>
                  <span className="font-bold text-text">{region} 구역</span>
                  <span className="text-xs text-text-dim font-medium">{boothsInRegion.length}개 부스</span>
                </div>
                <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {isExpanded && (
                <div className="mt-2 grid grid-cols-1 gap-2 fade-in">
                  {boothsInRegion.map((booth) => (
                    <div 
                      key={booth.id} 
                      onClick={() => setSelectedBooth(booth)}
                      className={`glass-card p-4 flex flex-col gap-3 bg-white cursor-pointer hover:border-primary/50 transition-all duration-300 relative overflow-hidden ${visitedBooths.includes(booth.id) ? 'bg-primary/2' : ''}`}
                    >
                      {visitedBooths.includes(booth.id) && (
                        <div className="absolute top-0 right-0 bg-primary text-white p-1 rounded-bl-xl shadow-sm z-10">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                      )}
                      {favoriteBooths.includes(booth.id) && (
                        <div className="absolute top-0 right-6 bg-pink-500 text-white p-1 rounded-b-lg shadow-sm z-10 flex items-center justify-center">
                          <HeartIcon filled className="w-3 h-3" />
                        </div>
                      )}
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 shrink-0 rounded-xl flex flex-col items-center justify-center border border-glass-border/30 shadow-sm ${getBoothColorClass(booth.region)}`}>
                          <span className="text-[0.6rem] opacity-60 font-bold leading-none mb-0.5">{booth.region}</span>
                          <span className="text-[0.8rem] font-black leading-none">{booth.id.replace(booth.region, '')}</span>
                        </div>
                        <div className="grow">
                          <h3 className={`text-sm font-bold mb-1.5 ${visitedBooths.includes(booth.id) ? 'text-primary' : 'text-text'}`}>{booth.name}</h3>
                          <div className="flex items-center gap-2 overflow-x-auto scrollbar-thin">
                            {getRegionTag(booth.details?.region_name)}
                            {getImporterBadge(booth.details?.tags, true)}
                            {getStyleBadges(getBoothStyleCategories(booth))}
                            {getFlavorBadge(booth.details?.flavor)}
                          </div>
                        </div>
                        {!visitedBooths.includes(booth.id) && <span className="text-primary/30 self-center">❯</span>}
                      </div>
                      
                      {booth.details?.products && booth.details.products.length > 0 && (
                        <div className="mt-2 flex items-start gap-1.5 overflow-hidden px-1">
                          <span className="text-[0.7rem] shrink-0 opacity-70">🍶</span>
                          <p className="text-[0.65rem] text-text-dim line-clamp-1">
                            {booth.details.products.map(p => p.name).join(', ')}
                          </p>
                        </div>
                      )}

                      {booth.details?.features && (
                        <div className="mt-1">
                          <p className="text-[0.7rem] text-text-dim leading-relaxed line-clamp-2">
                            {booth.details.features}
                          </p>
                        </div>
                      )}

                      {boothNotes[booth.id] && (
                        <div className="mt-2 p-3 bg-accent/5 rounded-xl border border-accent/10">
                          <p className="text-[0.7rem] text-accent font-bold mb-1 flex items-center gap-1">
                            <span>📝</span> MY NOTE
                          </p>
                          <p className="text-[0.7rem] text-text-dim line-clamp-1 italic">
                            {boothNotes[booth.id]}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })
      )}
      
      {filteredBooths.length === 0 && (
        <div className="text-center py-20 text-text-dim font-medium italic">
          검색 결과가 없습니다.
        </div>
      )}
    </section>
  );
};

export default BoothSearch;
