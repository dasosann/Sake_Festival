import React from 'react';
import { HeartIcon } from './Icons';

interface NavigationProps {
  activeTab: 'map' | 'search' | 'collection' | 'schedule';
  setActiveTab: (tab: 'map' | 'search' | 'collection' | 'schedule') => void;
  favoriteCount: number;
}

const Navigation = ({ activeTab, setActiveTab, favoriteCount }: NavigationProps) => {
  return (
    <nav className="flex justify-start sm:justify-center gap-2 my-0 sm:my-2 sticky top-0 z-50 bg-bg/80 backdrop-blur-md py-1.5 px-4 border-b border-glass-border overflow-x-auto scrollbar-thin">
      <button 
        className={`flex-none sm:flex-1 min-w-[100px] max-w-[120px] py-2 rounded-xl transition-all duration-300 font-bold text-xs text-center ${activeTab === 'map' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-transparent text-text-dim hover:bg-glass-hover'}`}
        onClick={() => setActiveTab('map')}
      >
        배치도
      </button>
      <button 
        className={`flex-none sm:flex-1 min-w-[100px] max-w-[120px] py-2 rounded-xl transition-all duration-300 font-bold text-xs text-center ${activeTab === 'search' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-transparent text-text-dim hover:bg-glass-hover'}`}
        onClick={() => setActiveTab('search')}
      >
        부스검색
      </button>
      <button 
        className={`flex-none sm:flex-1 min-w-[100px] max-w-[120px] py-2 rounded-xl transition-all duration-300 font-bold text-xs text-center flex items-center justify-center gap-1.5 ${activeTab === 'collection' ? 'bg-red-500 text-white shadow-lg shadow-red-200' : 'bg-transparent text-text-dim hover:bg-glass-hover'}`}
        onClick={() => setActiveTab('collection')}
      >
        <HeartIcon filled={activeTab === 'collection'} className="w-3.5 h-3.5" />
        찜 목록 {favoriteCount > 0 && <span className="text-[0.65rem] opacity-80">({favoriteCount})</span>}
      </button>
      <button 
        className={`flex-none sm:flex-1 min-w-[100px] max-w-[120px] py-2 rounded-xl transition-all duration-300 font-bold text-xs text-center ${activeTab === 'schedule' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-transparent text-text-dim hover:bg-glass-hover'}`}
        onClick={() => setActiveTab('schedule')}
      >
        행사정보
      </button>
    </nav>
  );
};

export default Navigation;
