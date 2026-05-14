'use client';

import { useState, useMemo, useEffect } from 'react';
import { ALL_BOOTHS, BoothInfo } from './boothData';

// Modular Components
import Header from './components/Header';
import Navigation from './components/Navigation';
import BoothMap from './components/BoothMap';
import BoothSearch from './components/BoothSearch';
import BoothCollection from './components/BoothCollection';
import Schedule from './components/Schedule';
import BoothDetailModal from './components/BoothDetailModal';
import Footer from './components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'map' | 'search' | 'collection' | 'schedule'>('map');
  const [activeHall, setActiveHall] = useState<1 | 2 | 'layout'>(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedRegions, setExpandedRegions] = useState<string[]>([]);
  const [selectedBooth, setSelectedBooth] = useState<BoothInfo | null>(null);

  // 방문 여부 및 메모 상태 (localStorage 연동)
  const [visitedBooths, setVisitedBooths] = useState<string[]>([]);
   const [favoriteBooths, setFavoriteBooths] = useState<string[]>([]);
   const [favoriteProducts, setFavoriteProducts] = useState<string[]>([]);
   const [boothNotes, setBoothNotes] = useState<Record<string, string>>({});
   const [productNotes, setProductNotes] = useState<Record<string, string>>({});


  // 초기 로드 시 localStorage에서 데이터 복원
  useEffect(() => {
    const savedVisited = localStorage.getItem('sake_visited');
    const savedFavorites = localStorage.getItem('sake_favorites');
    const savedFavoriteProducts = localStorage.getItem('sake_favorite_products');
    const savedNotes = localStorage.getItem('sake_notes');
    const savedProductNotes = localStorage.getItem('sake_product_notes');
    if (savedVisited) {
      try { setVisitedBooths(JSON.parse(savedVisited)); } catch (e) { console.error(e); }
    }
    if (savedFavorites) {
      try { setFavoriteBooths(JSON.parse(savedFavorites)); } catch (e) { console.error(e); }
    }
    if (savedFavoriteProducts) {
      try { setFavoriteProducts(JSON.parse(savedFavoriteProducts)); } catch (e) { console.error(e); }
    }
    if (savedNotes) {
      try { setBoothNotes(JSON.parse(savedNotes)); } catch (e) { console.error(e); }
    }
    if (savedProductNotes) {
      try { setProductNotes(JSON.parse(savedProductNotes)); } catch (e) { console.error(e); }
    }

  }, []);

  // 상태 변경 시 localStorage에 자동 저장
  useEffect(() => {
    if (visitedBooths.length > 0 || localStorage.getItem('sake_visited')) {
      localStorage.setItem('sake_visited', JSON.stringify(visitedBooths));
    }
  }, [visitedBooths]);

  useEffect(() => {
    if (favoriteBooths.length > 0 || localStorage.getItem('sake_favorites')) {
      localStorage.setItem('sake_favorites', JSON.stringify(favoriteBooths));
    }
  }, [favoriteBooths]);

  useEffect(() => {
    if (favoriteProducts.length > 0 || localStorage.getItem('sake_favorite_products')) {
      localStorage.setItem('sake_favorite_products', JSON.stringify(favoriteProducts));
    }
  }, [favoriteProducts]);

  useEffect(() => {
    if (Object.keys(boothNotes).length > 0 || localStorage.getItem('sake_notes')) {
      localStorage.setItem('sake_notes', JSON.stringify(boothNotes));
    }
  }, [boothNotes]);

  useEffect(() => {
    if (Object.keys(productNotes).length > 0 || localStorage.getItem('sake_product_notes')) {
      localStorage.setItem('sake_product_notes', JSON.stringify(productNotes));
    }
  }, [productNotes]);


  const toggleVisit = (id: string) => {
    setVisitedBooths(prev => 
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    );
  };

  const toggleFavorite = (id: string) => {
    setFavoriteBooths(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const toggleFavoriteProduct = (boothId: string, productIdx: number) => {
    const key = `${boothId}_${productIdx}`;
    setFavoriteProducts(prev => 
      prev.includes(key) ? prev.filter(p => p !== key) : [...prev, key]
    );
  };

  const updateNote = (id: string, note: string) => {
    setBoothNotes(prev => ({ ...prev, [id]: note }));
  };

  const updateProductNote = (boothId: string, productIdx: number, note: string) => {
    setProductNotes(prev => ({ ...prev, [`${boothId}_${productIdx}`]: note }));
  };


  // Close modal with ESC key & Lock Body Scroll
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedBooth(null);
    };
    window.addEventListener('keydown', handleEsc);
    
    if (selectedBooth) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto'; // Cleanup
    };
  }, [selectedBooth]);

  // 탭 전환 시 검색어 초기화 (검색목록 기본값을 전체로 보여주기 위함)
  useEffect(() => {
    setSearchTerm('');
  }, [activeTab]);

  const filteredBooths = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return ALL_BOOTHS.filter(booth => {
      const flavorMap: Record<string, string[]> = {
        amaguchi: ['amaguchi', '아마구치', '단맛', '달콤'],
        karaguchi: ['karaguchi', '카라구치', '드라이', '담백'],
        balance: ['balance', '밸런스', '균형', '조화']
      };
      
      const flavorTerms = booth.details?.flavor ? flavorMap[booth.details.flavor] : [];
      
      return (
        booth.name.toLowerCase().includes(term) ||
        booth.id.toLowerCase().includes(term) ||
        (booth.details?.history || '').toLowerCase().includes(term) ||
        (booth.details?.features || '').toLowerCase().includes(term) ||
        (booth.details?.region_name || '').toLowerCase().includes(term) ||
        (booth.details?.type || '').toLowerCase().includes(term) ||
        (booth.details?.tags || []).some(tag => tag.toLowerCase().includes(term)) ||
        flavorTerms.some(f => f.includes(term))
      );
    });
  }, [searchTerm]);

  return (
    <main className="min-h-screen flex flex-col bg-bg text-text relative">
      {/* Booth Detail Modal */}
      {selectedBooth && (
        <BoothDetailModal 
          selectedBooth={selectedBooth}
          setSelectedBooth={setSelectedBooth}
          visitedBooths={visitedBooths}
          toggleVisit={toggleVisit}
          favoriteBooths={favoriteBooths}
          toggleFavorite={toggleFavorite}
          favoriteProducts={favoriteProducts}
          toggleFavoriteProduct={toggleFavoriteProduct}
          boothNotes={boothNotes}
          updateNote={updateNote}
          productNotes={productNotes}
          updateProductNote={updateProductNote}
        />

      )}

      {/* Header Section */}
      <Header />

      {/* Tabs Navigation */}
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        favoriteCount={favoriteBooths.length + favoriteProducts.length} 
      />

      <div className="container min-h-[600px] pb-20 pt-6">
        {/* Tab 1: Map */}
        {activeTab === 'map' && (
          <BoothMap 
            activeHall={activeHall}
            setActiveHall={setActiveHall}
            visitedBooths={visitedBooths}
            favoriteBooths={favoriteBooths}
            setSelectedBooth={setSelectedBooth}
          />
        )}

        {/* Tab 2: Search */}
        {activeTab === 'search' && (
          <BoothSearch 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filteredBooths={filteredBooths}
            setSelectedBooth={setSelectedBooth}
            visitedBooths={visitedBooths}
            favoriteBooths={favoriteBooths}
            boothNotes={boothNotes}
            expandedRegions={expandedRegions}
            setExpandedRegions={setExpandedRegions}
          />
        )}

        {/* Tab 4: Collection (Favorites) */}
        {activeTab === 'collection' && (
          <BoothCollection 
            favoriteBooths={favoriteBooths}
            favoriteProducts={favoriteProducts}
            setSelectedBooth={setSelectedBooth}
            toggleFavorite={toggleFavorite}
            toggleFavoriteProduct={toggleFavoriteProduct}
            boothNotes={boothNotes}
            productNotes={productNotes}
            setActiveTab={setActiveTab}
          />
        )}

        {/* Tab 3: Schedule */}
        {activeTab === 'schedule' && (
          <Schedule />
        )}
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
