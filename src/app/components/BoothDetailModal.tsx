import React from 'react';
import { BoothInfo } from '../boothData';
import { HeartIcon } from './Icons';
import { getTypeBadge, getFlavorBadge, getRegionTag, getImporterBadge, getStyleBadges } from './Badges';
import { getBoothColorClass } from '../utils';
import { getBoothStyleCategories } from '../data/styleCategories';

interface BoothDetailModalProps {
  selectedBooth: BoothInfo;
  setSelectedBooth: (booth: BoothInfo | null) => void;
  visitedBooths: string[];
  toggleVisit: (id: string) => void;
  favoriteBooths: string[];
  toggleFavorite: (id: string) => void;
  favoriteProducts: string[];
  toggleFavoriteProduct: (boothId: string, productIdx: number) => void;
  boothNotes: Record<string, string>;
  updateNote: (id: string, note: string) => void;
  productNotes: Record<string, string>;
  updateProductNote: (boothId: string, productIdx: number, note: string) => void;
  setPreviewImage: (image: { src: string, alt: string } | null) => void;
}



const BoothDetailModal = ({
  selectedBooth,
  setSelectedBooth,
  visitedBooths,
  toggleVisit,
  favoriteBooths,
  toggleFavorite,
  favoriteProducts,
  toggleFavoriteProduct,
  boothNotes,
  updateNote,
  productNotes,
  updateProductNote,
  setPreviewImage
}: BoothDetailModalProps) => {
  return (
    <div
      className="fixed inset-0 z-100 flex items-start justify-center px-3 py-3 bg-black/60 backdrop-blur-sm fade-in sm:items-center sm:px-4"
      onClick={() => setSelectedBooth(null)}
    >
      <div 
        className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative max-h-[90dvh] flex flex-col" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`p-3 ${getBoothColorClass(selectedBooth.id.charAt(0))} border-b`}>
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-black px-2 py-1 bg-white/50 rounded-md border border-black/5 mb-2 inline-block">
                {selectedBooth.id}
              </span>
              <h3 className="text-lg font-bold">{selectedBooth.name}</h3>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {getRegionTag(selectedBooth.details?.region_name)}
                {getImporterBadge(selectedBooth.details?.tags)}
                {getStyleBadges(getBoothStyleCategories(selectedBooth))}
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
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Visit Toggle Area */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-bg-sub border border-glass-border">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${visitedBooths.includes(selectedBooth.id) ? 'bg-primary text-white shadow-lg' : 'bg-white border border-glass-border text-text-dim/40'}`}>
                {visitedBooths.includes(selectedBooth.id) ? '✓' : '🍷'}
              </div>
              <div>
                <p className="text-[0.6rem] font-bold text-text-dim uppercase tracking-wider leading-none mb-1">방문 상태</p>
                <p className={`text-[0.8rem] font-black ${visitedBooths.includes(selectedBooth.id) ? 'text-primary' : 'text-text'}`}>
                  {visitedBooths.includes(selectedBooth.id) ? '방문 완료' : '미방문'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => toggleFavorite(selectedBooth.id)}
                className="w-10 h-10 flex items-center justify-center text-red-500 transition-transform active:scale-90"
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
                {getStyleBadges(getBoothStyleCategories(selectedBooth))}
                {getFlavorBadge(selectedBooth.details.flavor)}
              </div>
              
              <section className="bg-primary/5 p-5 rounded-2xl border border-primary/10">
                <h4 className="text-[0.7rem] font-black text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-white flex items-center justify-center shadow-sm">📜</span>
                  {['food', 'service'].includes(selectedBooth.details.type || '') ? '분류' : '역사'}
                </h4>
                <p className="text-[0.8rem] leading-relaxed text-text font-medium opacity-90 whitespace-pre-wrap">{selectedBooth.details.history}</p>
              </section>
              
              <section className="bg-bg p-5 rounded-2xl border border-glass-border">
                <h4 className="text-[0.7rem] font-black text-text uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-bg-sub flex items-center justify-center shadow-sm">✨</span>
                  {['food', 'service'].includes(selectedBooth.details.type || '') ? '특성' : '특징'}
                </h4>
                <p className="text-[0.8rem] leading-relaxed text-text font-medium opacity-90 whitespace-pre-wrap">{selectedBooth.details.features}</p>
              </section>

              {/* 사케 출품 목록 (Exhibited Products) - Moved Up */}
              {selectedBooth.details.products && selectedBooth.details.products.length > 0 && (
                <section className="pt-6 border-t border-glass-border">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[0.7rem] font-black text-primary uppercase tracking-widest flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-primary/10 text-primary flex items-center justify-center shadow-sm text-[0.8rem]">🍶</span>
                      사케 출품 목록
                    </h4>
                    <span className="text-[0.6rem] text-text-dim/60 font-bold bg-bg-sub px-2 py-0.5 rounded-full border border-glass-border">
                      {selectedBooth.details.products.length}개 품목
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {selectedBooth.details.products.map((product, idx) => {
                      const [isExpanded, setIsExpanded] = React.useState(false);
                      return (
                        <div key={idx} className="bg-white border border-glass-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20">
                          <div className="p-4 flex gap-4">
                            <div className="w-20 h-28 bg-bg-sub rounded-xl shrink-0 flex items-center justify-center overflow-hidden border border-glass-border">
                              {product.image ? (
                                <img 
                                  src={product.image} 
                                  alt={product.name} 
                                  className="w-full h-full object-contain p-1 transition-transform duration-500 hover:scale-110 cursor-zoom-in"
                                  onClick={() => setPreviewImage({ src: product.image!, alt: product.name })}
                                />
                              ) : (
                                <span className="text-[1.5rem] opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 scale-100 hover:scale-110">🍶</span>
                              )}
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                              <div className="flex justify-between items-start mb-2">
                                <div className="flex-1 pr-2">
                                  <p className="text-[0.75rem] font-black text-text leading-tight mb-1">
                                    {product.name}
                                  </p>
                                  {(product.description || product.abv || product.awards) && (
                                    <button 
                                      onClick={() => setIsExpanded(!isExpanded)}
                                      className="text-[0.6rem] font-black text-primary flex items-center gap-1 hover:underline mt-1"
                                    >
                                      {isExpanded ? '상세 정보 닫기 ▴' : '상세 정보 보기 ▾'}
                                    </button>
                                  )}
                                </div>
                                <button 
                                  onClick={() => toggleFavoriteProduct(selectedBooth.id, idx)}
                                  className={`shrink-0 transition-transform active:scale-90 ${favoriteProducts.includes(`${selectedBooth.id}_${idx}`) ? 'text-red-500' : 'text-text-dim/20 hover:text-red-300'}`}
                                >
                                  <HeartIcon filled={favoriteProducts.includes(`${selectedBooth.id}_${idx}`)} className="w-4 h-4" />
                                </button>
                              </div>
                              <div className="relative">
                                <textarea 
                                  placeholder="테이스팅 노트 작성..."
                                  value={productNotes[`${selectedBooth.id}_${idx}`] || ''}
                                  onChange={(e) => updateProductNote(selectedBooth.id, idx, e.target.value)}
                                  className="w-full h-16 p-2 rounded-xl bg-bg-sub/50 border border-glass-border text-[0.7rem] text-text outline-none focus:border-primary transition-all resize-none placeholder:text-text-dim/30 leading-snug"
                                />
                                {productNotes[`${selectedBooth.id}_${idx}`] && (
                                  <div className="absolute right-2 bottom-1.5 pointer-events-none opacity-40">
                                      <span className="text-[0.5rem] font-bold text-primary">저장됨</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          {/* Expanded Details Section */}
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-2 border-t border-glass-border bg-bg-sub/30 animate-in fade-in slide-in-from-top-1 duration-200">
                              <div className="space-y-3">
                                {product.abv && (
                                  <div className="flex items-center gap-2">
                                    <span className="text-[0.6rem] font-black px-2 py-0.5 bg-primary/10 text-primary rounded-full">도수 {product.abv}</span>
                                  </div>
                                )}
                                {product.description && (
                                  <p className="text-[0.7rem] text-text-dim leading-relaxed font-medium">
                                    {product.description}
                                  </p>
                                )}
                                {product.awards && product.awards.length > 0 && (
                                  <div className="flex flex-wrap gap-1.5 pt-1">
                                    {product.awards.map((award, aIdx) => (
                                      <span key={aIdx} className="text-[0.55rem] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-lg flex items-center gap-1 shadow-sm">
                                        🏆 {award}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* Personal Notes Section - Moved Down */}
              <section className="pt-6 border-t border-glass-border">
                <h4 className="text-[0.7rem] font-black text-text-dim uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-bg-sub flex items-center justify-center shadow-sm text-[0.8rem]">✍️</span>
                  나의 테이스팅 노트
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
