import React from 'react';
import { HeartIcon } from './Icons';

interface NavigationProps {
  activeTab: 'map' | 'search' | 'collection' | 'schedule';
  setActiveTab: (tab: 'map' | 'search' | 'collection' | 'schedule') => void;
  favoriteCount: number;
}

const Navigation = ({ activeTab, setActiveTab, favoriteCount }: NavigationProps) => {
  return (
    <nav className="flex justify-center gap-1 my-0 sm:my-2 sticky top-0 z-50 bg-bg/80 backdrop-blur-md py-1.5 px-2 border-b border-glass-border">
      <button 
        className={`flex-1 py-2 rounded-xl transition-all duration-300 font-bold text-xs text-center ${activeTab === 'map' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-transparent text-text-dim hover:bg-glass-hover'}`}
        onClick={() => setActiveTab('map')}
      >
        지도
      </button>
      <button 
        className={`flex-1 py-2 rounded-xl transition-all duration-300 font-bold text-xs text-center ${activeTab === 'search' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-transparent text-text-dim hover:bg-glass-hover'}`}
        onClick={() => setActiveTab('search')}
      >
        검색
      </button>
      <button 
        className={`flex-1 py-2 rounded-xl transition-all duration-300 font-bold text-xs text-center flex items-center justify-center gap-1 ${activeTab === 'collection' ? 'bg-red-500 text-white shadow-lg shadow-red-200' : 'bg-transparent text-text-dim hover:bg-glass-hover'}`}
        onClick={() => setActiveTab('collection')}
      >
        <HeartIcon filled={activeTab === 'collection'} className="w-3 h-3" />
        찜 {favoriteCount > 0 && <span className="text-[0.6rem] opacity-80">({favoriteCount})</span>}
      </button>
      <button 
        className={`flex-1 py-2 rounded-xl transition-all duration-300 font-bold text-xs text-center ${activeTab === 'schedule' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-transparent text-text-dim hover:bg-glass-hover'}`}
        onClick={() => setActiveTab('schedule')}
      >
        행사
      </button>
    </nav>
  );
};

export default Navigation;
