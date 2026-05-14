import React from 'react';
import { BoothInfo } from '../boothData';
import { HeartIcon } from './Icons';
import { getTypeBadge, getFlavorBadge, getRegionTag, getImporterBadge } from './Badges';
import { getBoothColorClass } from '../utils';

interface BoothDetailModalProps {
  selectedBooth: BoothInfo;
  setSelectedBooth: (booth: BoothInfo | null) => void;
  visitedBooths: string[];
  toggleVisit: (id: string) => void;
  favoriteBooths: string[];
  toggleFavorite: (id: string) => void;
  boothNotes: Record<string, string>;
  updateNote: (id: string, note: string) => void;
  productNotes: Record<string, string>;
  updateProductNote: (boothId: string, productIdx: number, note: string) => void;
}



const BoothDetailModal = ({
  selectedBooth,
  setSelectedBooth,
  visitedBooths,
  toggleVisit,
  favoriteBooths,
  toggleFavorite,
  boothNotes,
  updateNote,
  productNotes,
  updateProductNote
}: BoothDetailModalProps) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm fade-in" onClick={() => setSelectedBooth(null)}>
      <div 
        className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`p-4 ${getBoothColorClass(selectedBooth.id.charAt(0))} border-b`}>
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-black px-2 py-1 bg-white/50 rounded-md border border-black/5 mb-2 inline-block">
                {selectedBooth.id}
              </span>
              <h3 className="text-lg font-bold">{selectedBooth.name}</h3>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {getRegionTag(selectedBooth.details?.region_name)}
                {getImporterBadge(selectedBooth.details?.tags)}
              </div>
            </div>
            <button 
              onClick={() => setSelectedBooth(null)}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors text-xl font-light"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 space-y-6 max-h-[85vh] overflow-y-auto">
          {/* Visit Toggle Area */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-bg-sub border border-glass-border">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${visitedBooths.includes(selectedBooth.id) ? 'bg-primary text-white shadow-lg' : 'bg-white border border-glass-border text-text-dim/40'}`}>
                {visitedBooths.includes(selectedBooth.id) ? '✓' : '🍷'}
              </div>
              <div>
                <p className="text-[0.6rem] font-bold text-text-dim uppercase tracking-wider leading-none mb-1">Status</p>
                <p className={`text-[0.8rem] font-black ${visitedBooths.includes(selectedBooth.id) ? 'text-primary' : 'text-text'}`}>
                  {visitedBooths.includes(selectedBooth.id) ? '방문 완료' : '아직 안 가본 곳'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => toggleFavorite(selectedBooth.id)}
                className="w-10 h-10 flex items-center justify-center text-pink-500 transition-transform active:scale-90"
                title="관심 등록"
              >
                <HeartIcon filled={favoriteBooths.includes(selectedBooth.id)} className="w-6 h-6" />
              </button>
              <button 
                onClick={() => toggleVisit(selectedBooth.id)}
                className={`px-5 py-2 rounded-xl text-[0.7rem] font-black transition-all duration-300 ${visitedBooths.includes(selectedBooth.id) ? 'bg-white text-primary border border-primary/20 shadow-sm' : 'bg-primary text-white shadow-md active:scale-95'}`}
              >
                {visitedBooths.includes(selectedBooth.id) ? '취소' : '방문'}
              </button>
            </div>
          </div>

          {selectedBooth.details ? (
            <>
              <div className="flex flex-wrap gap-2 mb-4">
                {getTypeBadge(selectedBooth.details.type, true)}
                {getFlavorBadge(selectedBooth.details.flavor)}
              </div>
              
              <section className="bg-primary/5 p-5 rounded-2xl border border-primary/10">
                <h4 className="text-[0.7rem] font-black text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-white flex items-center justify-center shadow-sm">📜</span>
                  {['food', 'service'].includes(selectedBooth.details.type || '') ? '분류 (Category)' : '역사 (History)'}
                </h4>
                <p className="text-[0.8rem] leading-relaxed text-text font-medium opacity-90 whitespace-pre-wrap">{selectedBooth.details.history}</p>
              </section>
              
              <section className="bg-bg p-5 rounded-2xl border border-glass-border">
                <h4 className="text-[0.7rem] font-black text-text uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-bg-sub flex items-center justify-center shadow-sm">✨</span>
                  {['food', 'service'].includes(selectedBooth.details.type || '') ? '특성 (Characteristics)' : '특징 (Features)'}
                </h4>
                <p className="text-[0.8rem] leading-relaxed text-text font-medium opacity-90 whitespace-pre-wrap">{selectedBooth.details.features}</p>
              </section>

              {/* 사케 출품 목록 (Exhibited Products) - Moved Up */}
              {selectedBooth.details.products && selectedBooth.details.products.length > 0 && (
                <section className="pt-6 border-t border-glass-border">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[0.7rem] font-black text-primary uppercase tracking-widest flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-primary/10 text-primary flex items-center justify-center shadow-sm text-[0.8rem]">🍶</span>
                      사케 출품 목록 (Exhibited Products)
                    </h4>
                    <span className="text-[0.6rem] text-text-dim/60 font-bold bg-bg-sub px-2 py-0.5 rounded-full border border-glass-border">
                      {selectedBooth.details.products.length} Items
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {selectedBooth.details.products.map((product, idx) => (
                      <div key={idx} className="bg-white border border-glass-border rounded-2xl p-4 flex gap-4 transition-all duration-300 hover:shadow-md hover:border-primary/20">
                        <div className="w-20 h-28 bg-bg-sub rounded-xl flex-shrink-0 flex items-center justify-center">
                          <span className="text-[1.5rem] opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 scale-100 hover:scale-110">🍶</span>
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <p className="text-[0.75rem] font-black text-text leading-tight mb-2">
                            {product.name}
                          </p>
                          <div className="relative">
                            <textarea 
                              placeholder="테이스팅 노트 작성..."
                              value={productNotes[`${selectedBooth.id}_${idx}`] || ''}
                              onChange={(e) => updateProductNote(selectedBooth.id, idx, e.target.value)}
                              className="w-full h-16 p-2 rounded-xl bg-bg-sub/50 border border-glass-border text-[0.7rem] text-text outline-none focus:border-primary transition-all resize-none placeholder:text-text-dim/30 leading-snug"
                            />
                            {productNotes[`${selectedBooth.id}_${idx}`] && (
                              <div className="absolute right-2 bottom-1.5 pointer-events-none opacity-40">
                                <span className="text-[0.5rem] font-bold text-primary">SAVED</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Personal Notes Section - Moved Down */}
              <section className="pt-6 border-t border-glass-border">
                <h4 className="text-[0.7rem] font-black text-text-dim uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-bg-sub flex items-center justify-center shadow-sm text-[0.8rem]">✍️</span>
                  나의 테이스팅 노트 (My Memo)
                </h4>
                <textarea 
                  placeholder="이 부스에서 마신 술의 맛이나 기억하고 싶은 점을 적어보세요..."
                  value={boothNotes[selectedBooth.id] || ''}
                  onChange={(e) => updateNote(selectedBooth.id, e.target.value)}
                  className="w-full h-32 p-5 rounded-2xl bg-bg-sub border border-glass-border text-[0.8rem] text-text outline-none focus:border-primary transition-all resize-none placeholder:text-text-dim/40 leading-relaxed"
                />
                <div className="flex justify-between items-center mt-2 px-1">
                  <span className="text-[0.6rem] text-text-dim/60 font-medium italic">입력 시 실시간 자동 저장됩니다</span>
                  <span className="text-[0.6rem] text-text-dim/60 font-medium">{(boothNotes[selectedBooth.id] || '').length}자</span>
                </div>
              </section>

              {selectedBooth.details.official_site && (
                <section className="pt-4">
                  <a 
                    href={selectedBooth.details.official_site} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-2xl text-[0.8rem] font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all"
                  >
                    공식 사이트 방문하기 <span>↗</span>
                  </a>
                </section>
              )}
            </>
          ) : (
            <div className="py-20 text-center bg-bg-sub rounded-3xl border border-dashed border-glass-border">
              <p className="text-text-dim italic font-medium">상세 정보가 아직 업데이트되지 않았습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoothDetailModal;
