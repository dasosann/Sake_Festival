import React from 'react';
import { BoothInfo, ALL_BOOTHS } from '../boothData';
import { HeartIcon } from './Icons';
import { getFlavorBadge, getRegionTag, getImporterBadge } from './Badges';
import { getBoothColorClass } from '../utils';

interface BoothCollectionProps {
  favoriteBooths: string[];
  favoriteProducts: string[];
  setSelectedBooth: (booth: BoothInfo) => void;
  toggleFavorite: (id: string) => void;
  toggleFavoriteProduct: (boothId: string, productIdx: number) => void;
  boothNotes: Record<string, string>;
  productNotes: Record<string, string>;
  setActiveTab: (tab: 'map' | 'search' | 'collection' | 'schedule') => void;
  setPreviewImage: (image: { src: string, alt: string } | null) => void;
}

const BoothCollection = ({
  favoriteBooths,
  favoriteProducts,
  setSelectedBooth,
  toggleFavorite,
  toggleFavoriteProduct,
  boothNotes,
  productNotes,
  setActiveTab,
  setPreviewImage
}: BoothCollectionProps) => {
  return (
    <section className="fade-in px-2 sm:px-0">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-black flex items-center gap-2">
          <HeartIcon filled className="text-red-500 w-6 h-6" /> 내가 찜한 부스
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
              className="glass-card p-4 flex flex-col gap-3 bg-white cursor-pointer hover:border-red-300 transition-all duration-300 border-l-4 relative"
              style={{ borderLeftColor: '#ef4444' }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 shrink-0 rounded-xl flex flex-col items-center justify-center border border-glass-border/30 shadow-sm ${getBoothColorClass(booth.id.charAt(0))}`}>
                  <span className="text-[0.6rem] opacity-60 font-bold leading-none mb-0.5">{booth.id.charAt(0)}</span>
                  <span className="text-[0.8rem] font-black leading-none">{booth.id.slice(1)}</span>
                </div>
                <div className="grow">
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
                  className="w-10 h-10 flex items-center justify-center text-red-500 transition-transform active:scale-90"
                >
                  <HeartIcon filled className="w-6 h-6" />
                </button>
              </div>
              
              {booth.details?.features && (
                <p className="text-[0.7rem] text-text-dim leading-relaxed line-clamp-1 italic">
                  &quot;{booth.details.features}&quot;
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
        <div className="text-center py-10 bg-white rounded-3xl border border-dashed border-glass-border">
          <p className="text-text-dim text-xs font-medium">찜한 부스가 없습니다.</p>
        </div>
      )}

      {/* Favorite Products Section */}
      <div className="mt-12 mb-6 flex items-center justify-between">
        <h2 className="text-xl font-black flex items-center gap-2">
          <span className="text-2xl">🍶</span> 내가 찜한 술
        </h2>
        <span className="text-xs font-bold text-text-dim bg-bg-sub px-3 py-1 rounded-full border border-glass-border">
          총 {favoriteProducts.length}개
        </span>
      </div>

      {favoriteProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-3">
          {favoriteProducts.map((key) => {
            const [boothId, productIdxStr] = key.split('_');
            const productIdx = parseInt(productIdxStr);
            const booth = ALL_BOOTHS.find(b => b.id === boothId);
            const product = booth?.details?.products?.[productIdx];
            
            if (!booth || !product) return null;

            return (
              <div 
                key={key} 
                className="glass-card p-4 flex gap-4 bg-white hover:border-primary/30 transition-all duration-300 relative cursor-pointer"
                onClick={() => setSelectedBooth(booth)}
              >
                <div className="w-16 h-20 bg-bg-sub rounded-xl shrink-0 flex items-center justify-center border border-glass-border/30 overflow-hidden">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-1 cursor-zoom-in"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreviewImage({ src: product.image!, alt: product.name });
                      }}
                    />
                  ) : (
                    <span className="text-2xl opacity-40">🍶</span>
                  )}
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[0.6rem] font-black px-1.5 py-0.5 bg-primary/10 text-primary rounded leading-none">
                      {booth.id}
                    </span>
                    <span className="text-[0.7rem] font-bold text-text-dim">
                      {booth.name}
                    </span>
                  </div>
                  <h3 className="text-sm font-black text-text leading-tight mb-2">
                    {product.name}
                  </h3>
                  {productNotes[key] && (
                    <div className="p-2 bg-accent/5 rounded-lg border border-accent/10">
                      <p className="text-[0.65rem] text-text-dim line-clamp-1 italic">
                        📝 {productNotes[key]}
                      </p>
                    </div>
                  )}
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavoriteProduct(boothId, productIdx);
                  }}
                  className="w-10 h-10 flex items-center justify-center text-red-500 transition-transform active:scale-90"
                >
                  <HeartIcon filled className="w-5 h-5" />
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-10 bg-white rounded-3xl border border-dashed border-glass-border">
          <p className="text-text-dim text-xs font-medium">찜한 술이 없습니다.</p>
        </div>
      )}
    </section>
  );
};

export default BoothCollection;
