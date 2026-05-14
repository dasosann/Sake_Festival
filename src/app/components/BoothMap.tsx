"use client";

import React from 'react';
import { BoothInfo } from '../boothData';
import Hall1Map from './Hall1Map';
import Hall2Map from './Hall2Map';
import LayoutMap from './LayoutMap';

interface BoothMapProps {
  activeHall: 1 | 2 | 'layout';
  setActiveHall: (hall: 1 | 2 | 'layout') => void;
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
          <button 
            className={`py-2 px-6 rounded-lg text-xs font-bold transition-all duration-300 ${activeHall === 'layout' ? 'bg-white text-primary shadow-sm' : 'text-text-dim'}`}
            onClick={() => setActiveHall('layout')}
          >
            배치도 (Layout)
          </button>
        </div>
      </div>

      <div className="bg-white border border-glass-border rounded-2xl p-4 sm:p-8 relative overflow-x-auto shadow-sm">
        <div className="min-w-[600px] flex flex-col gap-6">
          {activeHall === 'layout' && <LayoutMap />}
          {activeHall === 1 && (
            <Hall1Map
              visitedBooths={visitedBooths}
              favoriteBooths={favoriteBooths}
              setSelectedBooth={setSelectedBooth}
            />
          )}
          {activeHall === 2 && (
            <Hall2Map
              visitedBooths={visitedBooths}
              favoriteBooths={favoriteBooths}
              setSelectedBooth={setSelectedBooth}
            />
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
