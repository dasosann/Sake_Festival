import React from 'react';
import { BoothStyleCategory } from '../data/styleCategories';

export const TYPE_LABELS: Record<string, string> = {
  sake: '사케',
  shochu: '쇼츄',
  awamori: '아와모리',
  beer: '맥주',
  whisky: '위스키',
  liqueur: '리큐르',
  food: '푸드',
  service: '서비스',
  other: '기타'
};

export const getTypeBadge = (type?: string, isLarge: boolean = false) => {
  if (!type) return null;
  return (
    <span className={`inline-flex items-center ${isLarge ? 'px-3 py-1 rounded-full text-[0.7rem]' : 'px-2 py-0.5 rounded-md text-[0.65rem]'} bg-type-tag text-white font-bold border border-white/10 shadow-sm leading-none transition-all whitespace-nowrap`}>
      {TYPE_LABELS[type] || type.toUpperCase()}
    </span>
  );
};

export const getFlavorBadge = (flavor?: string) => {
  if (!flavor) return null;
  const styles: Record<string, string> = {
    amaguchi: 'bg-[#fff0f6] text-[#c2185b] border-[#ffdeeb]',
    karaguchi: 'bg-[#e7f5ff] text-[#1971c2] border-[#a5d8ff]',
    balance: 'bg-[#ebfbee] text-[#2b8a3e] border-[#b2f2bb]'
  };
  const labels: Record<string, string> = {
    amaguchi: '아마구치',
    karaguchi: '카라구치',
    balance: '밸런스'
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[0.65rem] font-bold border leading-none whitespace-nowrap ${styles[flavor]}`}>
      {labels[flavor]}
    </span>
  );
};

export const getRegionTag = (region?: string) => {
  if (!region) return null;
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#f1f3f5] text-[#495057] text-[0.65rem] font-bold border border-[#dee2e6] leading-none whitespace-nowrap">
      {region}
    </span>
  );
};

export const getImporterBadge = (tags?: string[], isSearch: boolean = false) => {
  if (!tags) return null;
  const importers = ['니혼SAKE', '사카야코리아'];
  const importerTag = tags.find(tag => importers.includes(tag));
  if (!importerTag) return null;
  
  // '니혼SAKE', '사카야코리아' 태그는 상세 페이지가 아닌 검색 결과에서는 숨김
  if (isSearch && (importerTag === '니혼SAKE' || importerTag === '사카야코리아')) return null;
  
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#1a1a1e] text-white text-[0.65rem] font-black border border-black shadow-sm leading-none whitespace-nowrap">
      {importerTag}
    </span>
  );
};

export const getStyleBadge = (category?: BoothStyleCategory) => {
  if (!category) return null;

  const styles: Record<BoothStyleCategory, string> = {
    클래식: 'bg-[#f8f0e3] text-[#8a5a00] border-[#ecd3a3]',
    모던: 'bg-[#e7f5ff] text-[#0b7285] border-[#a5d8ff]',
    뉴에이지: 'bg-[#fff0f6] text-[#a61e4d] border-[#fcc2d7]'
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[0.65rem] font-bold border leading-none whitespace-nowrap ${styles[category]}`}>
      {category}
    </span>
  );
};

export const getStyleBadges = (categories?: BoothStyleCategory[]) => {
  if (!categories || categories.length === 0) return null;

  return (
    <>
      {categories.map((category) => (
        <React.Fragment key={category}>{getStyleBadge(category)}</React.Fragment>
      ))}
    </>
  );
};
