'use client';

import { useState, useMemo, useEffect } from 'react';
import { FESTIVAL_BOOTHS, ALL_BOOTHS, BoothInfo } from './boothData';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'map' | 'search' | 'schedule'>('map');
  const [activeHall, setActiveHall] = useState<1 | 2>(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedRegions, setExpandedRegions] = useState<string[]>([]);
  const [selectedBooth, setSelectedBooth] = useState<BoothInfo | null>(null);

  // 방문 여부 및 메모 상태 (localStorage 연동)
  const [visitedBooths, setVisitedBooths] = useState<string[]>([]);
  const [boothNotes, setBoothNotes] = useState<Record<string, string>>({});

  // 초기 로드 시 localStorage에서 데이터 복원
  useEffect(() => {
    const savedVisited = localStorage.getItem('sake_visited');
    const savedNotes = localStorage.getItem('sake_notes');
    if (savedVisited) {
      try { setVisitedBooths(JSON.parse(savedVisited)); } catch (e) { console.error(e); }
    }
    if (savedNotes) {
      try { setBoothNotes(JSON.parse(savedNotes)); } catch (e) { console.error(e); }
    }
  }, []);

  // 상태 변경 시 localStorage에 자동 저장
  useEffect(() => {
    if (visitedBooths.length > 0 || localStorage.getItem('sake_visited')) {
      localStorage.setItem('sake_visited', JSON.stringify(visitedBooths));
    }
  }, [visitedBooths]);

  useEffect(() => {
    if (Object.keys(boothNotes).length > 0 || localStorage.getItem('sake_notes')) {
      localStorage.setItem('sake_notes', JSON.stringify(boothNotes));
    }
  }, [boothNotes]);

  const toggleVisit = (id: string) => {
    setVisitedBooths(prev => 
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    );
  };

  const updateNote = (id: string, note: string) => {
    setBoothNotes(prev => ({ ...prev, [id]: note }));
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

  const getFlavorBadge = (flavor?: string) => {
    if (!flavor) return null;
    const styles: Record<string, string> = {
      amaguchi: 'bg-pink-50 text-pink-600 border-pink-100',
      karaguchi: 'bg-blue-50 text-blue-600 border-blue-100',
      balance: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    };
    const labels: Record<string, string> = {
      amaguchi: 'Sweet (아마구치)',
      karaguchi: 'Dry (카라구치)',
      balance: 'Balance (밸런스)'
    };
    return (
      <span className={`px-2 py-0.5 rounded text-[0.6rem] font-bold border ${styles[flavor]}`}>
        {labels[flavor]}
      </span>
    );
  };

  const getBoothColorClass = (prefix: string) => {
    const colors: Record<string, string> = {
      'A': 'bg-[#ffebee] border-[#ffcdd2] text-[#c62828]',
      'B': 'bg-[#e3f2fd] border-[#bbdefb] text-[#1565c0]',
      'D': 'bg-[#efebe9] border-[#d7ccc8] text-[#4e342e]',
      'E': 'bg-[#f3e5f5] border-[#e1bee7] text-[#7b1fa2]',
      'F': 'bg-[#e8f5e9] border-[#c8e6c9] text-[#2e7d32]',
      'G': 'bg-[#fffde7] border-[#fff9c4] text-[#f9a825]',
      'H': 'bg-[#e0f2f1] border-[#b2dfdb] text-[#00695c]',
      'J': 'bg-[#f1f8e9] border-[#dcedc8] text-[#33691e]',
      'K': 'bg-[#efebe9] border-[#d7ccc8] text-[#4e342e]',
      'M': 'bg-[#f8f9fa] border-[#eee] text-[#888]',
      'P': 'bg-[#fce4ec] border-[#f8bbd0] text-[#c2185b]',
      'Q': 'bg-[#f3e5f5] border-[#e1bee7] text-[#7b1fa2]',
      'R': 'bg-[#e8eaf6] border-[#c5cae9] text-[#283593]',
      'V': 'bg-[#e0f7fa] border-[#b2ebf2] text-[#00838f]',
      'U': 'bg-[#e0f7fa] border-[#b2ebf2] text-[#00838f]',
    };
    return colors[prefix] || 'bg-bg-sub border-[#ddd] text-[#888]';
  };

  const getBoothData = (id: string) => {
    return ALL_BOOTHS.find(b => b.id === id);
  };

  // Helper to render a block of booths
  const renderBlock = (prefix: string, count: number, cols: number, label?: string, startOffset: number = 1) => (
    <div className="relative group">
      {label && <div className="absolute -top-[15px] left-0 text-[0.6rem] font-bold text-[#666] pointer-events-none whitespace-nowrap">{label}</div>}
      <div 
        className="grid gap-1 bg-[#fdfdfd] p-1 border border-[#eee] rounded shadow-sm" 
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {Array.from({ length: count }).map((_, i) => {
          const num = i + startOffset;
          const boothId = `${prefix}${String(num).padStart(2, '0')}`;
          const booth = getBoothData(boothId);
          return (
            <div 
              key={i} 
              title={booth?.name || boothId}
              onClick={() => booth && setSelectedBooth(booth)}
              className={`w-8 h-6 border rounded-sm flex items-center justify-center text-[0.6rem] transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary cursor-pointer relative ${getBoothColorClass(prefix)} ${!booth ? 'opacity-30 grayscale' : ''} ${visitedBooths.includes(boothId) ? 'ring-2 ring-primary ring-inset' : ''}`}
            >
              {prefix}{String(num).padStart(2, '0')}
              {visitedBooths.includes(boothId) && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary text-white rounded-full flex items-center justify-center text-[0.5rem] shadow-sm">✓</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen flex flex-col bg-bg text-text relative">
      {/* Booth Detail Modal */}
      {selectedBooth && (
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
                  <h3 className="text-xl font-bold">{selectedBooth.name}</h3>
                  {selectedBooth.details?.region_name && (
                    <div className="text-sm font-medium mt-1 opacity-80 flex items-center gap-1">
                      <span>📍</span> {selectedBooth.details.region_name}
                    </div>
                  )}
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
            <div className="p-4 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Visit Toggle Area */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-bg-sub border border-glass-border">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${visitedBooths.includes(selectedBooth.id) ? 'bg-primary text-white shadow-lg' : 'bg-white border border-glass-border text-text-dim/40'}`}>
                    {visitedBooths.includes(selectedBooth.id) ? '✓' : '🍷'}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-dim uppercase tracking-wider leading-none mb-1">Status</p>
                    <p className={`text-sm font-black ${visitedBooths.includes(selectedBooth.id) ? 'text-primary' : 'text-text'}`}>
                      {visitedBooths.includes(selectedBooth.id) ? '방문 완료' : '아직 안 가본 곳'}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => toggleVisit(selectedBooth.id)}
                  className={`px-6 py-2 rounded-xl text-xs font-black transition-all duration-300 ${visitedBooths.includes(selectedBooth.id) ? 'bg-white text-primary border border-primary/20 shadow-sm' : 'bg-primary text-white shadow-md active:scale-95'}`}
                >
                  {visitedBooths.includes(selectedBooth.id) ? '취소' : '방문'}
                </button>
              </div>

              {selectedBooth.details ? (
                <>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedBooth.details.type && (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[0.7rem] font-bold border border-primary/20">
                        {selectedBooth.details.type.toUpperCase()}
                      </span>
                    )}
                    {getFlavorBadge(selectedBooth.details.flavor)}
                    {selectedBooth.details.tags?.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-accent/5 text-accent text-[0.7rem] font-bold border border-accent/10">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <section className="bg-primary/5 p-5 rounded-2xl border border-primary/10">
                    <h4 className="text-[0.7rem] font-black text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-white flex items-center justify-center shadow-sm">📜</span>
                      {['food', 'service'].includes(selectedBooth.details.type || '') ? '분류 (Category)' : '역사 (History)'}
                    </h4>
                    <p className="text-sm leading-relaxed text-text font-medium opacity-90 whitespace-pre-wrap">{selectedBooth.details.history}</p>
                  </section>
                  
                  <section className="bg-bg p-5 rounded-2xl border border-glass-border">
                    <h4 className="text-[0.7rem] font-black text-text uppercase tracking-widest mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-bg-sub flex items-center justify-center shadow-sm">✨</span>
                      {['food', 'service'].includes(selectedBooth.details.type || '') ? '특성 (Characteristics)' : '특징 (Features)'}
                    </h4>
                    <p className="text-sm leading-relaxed text-text font-medium opacity-90 whitespace-pre-wrap">{selectedBooth.details.features}</p>
                  </section>

                  {/* Personal Notes Section */}
                  <section className="pt-4 border-t border-glass-border">
                    <h4 className="text-[0.7rem] font-black text-text-dim uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-bg-sub flex items-center justify-center shadow-sm text-[0.8rem]">✍️</span>
                      나의 테이스팅 노트 (My Memo)
                    </h4>
                    <textarea 
                      placeholder="이 부스에서 마신 술의 맛이나 기억하고 싶은 점을 적어보세요..."
                      value={boothNotes[selectedBooth.id] || ''}
                      onChange={(e) => updateNote(selectedBooth.id, e.target.value)}
                      className="w-full h-32 p-5 rounded-2xl bg-bg-sub border border-glass-border text-sm text-text outline-none focus:border-primary transition-all resize-none placeholder:text-text-dim/40 leading-relaxed"
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
                        className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-2xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
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
      )}

      {/* Header Section */}
      <header className="py-10 px-4 flex flex-col justify-center items-center text-center bg-bg-sub border-b border-glass-border">
        <div className="max-w-xl">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-primary tracking-tight">2026 SAKE FESTIVAL</h1>
          <p className="text-xs sm:text-sm text-text-dim tracking-[0.2em] uppercase font-medium">SEOUL SETEC · Visitor Guide</p>
        </div>
      </header>

      {/* Tabs Navigation */}
      <nav className="flex justify-start sm:justify-center gap-2 my-0 sm:my-4 sticky top-0 z-50 bg-bg/80 backdrop-blur-md py-2 px-4 border-b border-glass-border overflow-x-auto no-scrollbar">
        <button 
          className={`flex-none sm:flex-1 min-w-[100px] max-w-[120px] py-2.5 rounded-xl transition-all duration-300 font-bold text-sm text-center ${activeTab === 'map' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-transparent text-text-dim hover:bg-glass-hover'}`}
          onClick={() => setActiveTab('map')}
        >
          배치도
        </button>
        <button 
          className={`flex-none sm:flex-1 min-w-[100px] max-w-[120px] py-2.5 rounded-xl transition-all duration-300 font-bold text-sm text-center ${activeTab === 'search' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-transparent text-text-dim hover:bg-glass-hover'}`}
          onClick={() => setActiveTab('search')}
        >
          부스검색
        </button>
        <button 
          className={`flex-none sm:flex-1 min-w-[100px] max-w-[120px] py-2.5 rounded-xl transition-all duration-300 font-bold text-sm text-center ${activeTab === 'schedule' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-transparent text-text-dim hover:bg-glass-hover'}`}
          onClick={() => setActiveTab('schedule')}
        >
          행사일정
        </button>
      </nav>

      <div className="container min-h-[600px] pb-20 pt-6">
        {/* Tab 1: Map */}
        {activeTab === 'map' && (
          <section className="fade-in">
            <div className="mb-8 flex flex-col gap-4 text-center">
              <h2 className="text-xl font-bold text-text">Booth Map</h2>
              <div className="flex bg-bg-sub p-1 rounded-xl w-fit mx-auto shadow-inner">
                <button 
                  className={`py-2 px-6 rounded-lg text-sm font-bold transition-all duration-300 ${activeHall === 1 ? 'bg-white text-primary shadow-sm' : 'text-text-dim'}`}
                  onClick={() => setActiveHall(1)}
                >
                  1관 (Hall 1)
                </button>
                <button 
                  className={`py-2 px-6 rounded-lg text-sm font-bold transition-all duration-300 ${activeHall === 2 ? 'bg-white text-primary shadow-sm' : 'text-text-dim'}`}
                  onClick={() => setActiveHall(2)}
                >
                  2관 (Hall 2)
                </button>
              </div>
            </div>

            <div className="bg-white border border-glass-border rounded-2xl p-4 sm:p-8 relative overflow-x-auto shadow-sm">
              <div className="min-w-[600px] flex flex-col gap-6">
                {activeHall === 1 ? (
                  <div className="fade-in">
                    {/* Hall 1 Top Zones */}
                    <div className="flex gap-4 justify-center mb-10">
                      <div className="bg-[#f1f3f5] border border-dashed border-[#dee2e6] text-[#495057] rounded-lg flex items-center justify-center text-[0.7rem] font-bold p-2.5 text-center w-[120px]">참가업체 라운지</div>
                      <div className="bg-[#f1f3f5] border border-dashed border-[#dee2e6] text-[#495057] rounded-lg flex items-center justify-center text-[0.7rem] font-bold p-2.5 text-center w-[180px]">라운지 (Lounge)</div>
                      <div className="bg-[#e3f2fd] border border-dashed border-[#90caf9] text-[#1565c0] rounded-lg flex items-center justify-center text-[0.7rem] font-bold p-2.5 text-center w-[60px]">세척존</div>
                      <div className="bg-[#e7f5ff] border border-dashed border-[#a5d8ff] text-[#1971c2] rounded-lg flex items-center justify-center text-[0.7rem] font-bold p-2.5 text-center w-[120px]">세미나존</div>
                    </div>

                    <div className="flex gap-8 justify-center">
                      {/* Left Sidebar: Block B */}
                      <div className="flex flex-col gap-3">
                        {renderBlock('B', 11, 1, '수입사', 3)}
                      </div>

                      {/* Main Center Blocks */}
                      <div className="flex flex-col gap-8">
                        <div className="flex gap-4">
                          {renderBlock('K', 5, 5, '프리미엄')}
                          <div className="w-5" />
                          {renderBlock('J', 17, 9, '인기')}
                        </div>
                        <div className="flex gap-4">
                          {renderBlock('H', 20, 10, '전통')}
                        </div>
                        <div className="flex gap-4">
                          {renderBlock('G', 20, 10, '모던')}
                        </div>
                        <div className="flex gap-4">
                          {renderBlock('F', 20, 10, '신예')}
                        </div>
                        <div className="flex gap-4">
                          {renderBlock('E', 20, 10, '정통')}
                        </div>
                      </div>

                      {/* Right Sidebar: Block D, L */}
                      <div className="flex flex-col gap-6">
                        {renderBlock('D', 9, 1, '특별')}
                        <div className="h-4" />
                        {renderBlock('L', 5, 1, 'L-Zone')}
                      </div>
                    </div>

                    {/* Bottom row A */}
                    <div className="flex gap-4 justify-center mt-12">
                      {renderBlock('A', 13, 13, '안내/기타')}
                    </div>

                    {/* Hall 1 Bottom Zones */}
                    <div className="flex gap-4 justify-center items-center mt-10">
                      <div className="bg-[#f8f9fa] border border-dashed border-[#ced4da] rounded-lg flex items-center justify-center text-[0.7rem] font-bold text-[#495057] p-2.5 text-center w-[100px]">인포/의무존</div>
                      <div className="bg-[#f8f9fa] border border-dashed border-[#ced4da] rounded-lg flex items-center justify-center text-[0.7rem] font-bold text-[#495057] p-2.5 text-center w-[100px]">한진택배</div>
                      <div className="bg-bg py-1.5 px-4 rounded-full text-[0.7rem] font-bold border border-glass-border shadow-sm">로비 출입구 (ENTRANCE)</div>
                    </div>
                  </div>
                ) : (
                  <div className="fade-in">
                    {/* Hall 2 Top Zones */}
                    <div className="flex gap-4 justify-end mb-10">
                      <div className="bg-[#f1f3f5] border border-dashed border-[#dee2e6] text-[#495057] rounded-lg flex items-center justify-center text-[0.7rem] font-bold p-2.5 text-center w-[250px]">라운지 (Lounge)</div>
                    </div>

                    <div className="flex gap-10 justify-center">
                      {/* Hall 2 Main Blocks */}
                      <div className="flex flex-col gap-8">
                        <div className="flex gap-4">
                          {renderBlock('V', 9, 3, '푸드/편의')}
                          <div className="w-5" />
                          {renderBlock('R', 4, 4, 'R-Section')}
                        </div>
                        <div className="flex gap-4">
                          {renderBlock('Q', 14, 7, 'Q-Section')}
                        </div>
                        <div className="flex gap-4">
                          {renderBlock('P', 15, 7, 'P-Section')}
                        </div>
                        <div className="flex gap-4">
                          {renderBlock('M', 12, 6, 'M-Section')}
                        </div>
                      </div>

                      {/* Hall 2 Right Sidebar */}
                      <div className="flex flex-col gap-6">
                        <div className="bg-[#e3f2fd] border border-dashed border-[#90caf9] text-[#1565c0] rounded-lg flex items-center justify-center text-[0.7rem] font-bold p-2.5 text-center h-[100px] w-[60px]">세척존</div>
                        {renderBlock('U', 12, 2, 'U-Block')}
                        <div className="bg-[#fff0f6] border border-dashed border-[#ffdeeb] text-[#c2185b] rounded-lg flex items-center justify-center text-[0.7rem] font-bold p-2.5 text-center h-[80px] w-[120px]">포토존 (술통존)</div>
                      </div>
                    </div>

                    {/* Hall 2 Bottom Zones */}
                    <div className="flex gap-4 justify-center mt-12">
                      <div className="bg-bg py-1.5 px-4 rounded-full text-[0.7rem] font-bold border border-glass-border shadow-sm">로비 출입구 (ENTRANCE)</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <p className="mt-6 text-text-dim text-[0.8rem] text-center leading-relaxed">
              📍 지도를 스와이프하여 전체 배치를 확인하세요.<br className="sm:hidden" /> 각 번호는 '부스검색' 탭에서 검색 가능합니다.
            </p>
          </section>
        )}

        {/* Tab 2: Search */}
        {activeTab === 'search' && (
          <section className="fade-in px-2 sm:px-0">
            <div className="mb-8 flex flex-col gap-4">
              <h2 className="text-xl font-bold">Booth Search</h2>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="부스 번호(예: A01) 또는 이름..." 
                  className="py-3.5 px-5 rounded-2xl bg-bg-sub border border-glass-border text-text w-full outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 text-base"
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
                    className={`glass-card p-4 flex flex-col gap-3 bg-white cursor-pointer hover:border-primary/50 transition-all duration-300 border-l-4 relative overflow-hidden ${visitedBooths.includes(booth.id) ? 'bg-primary/[0.02]' : ''}`}
                    style={{ borderLeftColor: `var(--${booth.region.toLowerCase()}-color, #ddd)` }}
                  >
                    {visitedBooths.includes(booth.id) && (
                      <div className="absolute top-0 right-0 bg-primary text-white p-1.5 rounded-bl-xl shadow-sm">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                    )}
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 shrink-0 rounded-xl flex flex-col items-center justify-center border border-glass-border/30 shadow-sm ${getBoothColorClass(booth.region)}`}>
                        <span className="text-[0.6rem] opacity-60 font-bold leading-none mb-0.5">{booth.region}</span>
                        <span className="text-[0.8rem] font-black leading-none">{booth.id.replace(booth.region, '')}</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h3 className={`text-base font-bold ${visitedBooths.includes(booth.id) ? 'text-primary' : 'text-text'}`}>{booth.name}</h3>
                          {getFlavorBadge(booth.details?.flavor)}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-1.5 py-0.5 rounded-md bg-primary/5 text-primary text-[0.65rem] font-bold border border-primary/10">
                            {booth.details?.region_name || '정보없음'}
                          </span>
                          {booth.details?.type && (
                            <span className="text-[0.65rem] text-text-dim/60 font-medium">
                              • {booth.details.type.toUpperCase()}
                            </span>
                          )}
                        </div>
                      </div>
                      {!visitedBooths.includes(booth.id) && <span className="text-primary/30 self-center">❯</span>}
                    </div>
                    
                    {booth.details?.features && (
                      <div className="mt-1">
                        <p className="text-[0.75rem] text-text-dim leading-relaxed line-clamp-2 italic">
                          "{booth.details.features}"
                        </p>
                        {booth.details.tags && (
                          <div className="flex flex-wrap gap-1.5 mt-2.5">
                            {booth.details.tags.slice(0, 4).map(tag => (
                              <span key={tag} className="text-[0.65rem] text-primary/60 font-medium bg-primary/5 px-2 py-0.5 rounded-full">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
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
                            className={`glass-card p-4 flex flex-col gap-3 bg-white cursor-pointer hover:border-primary/50 transition-all duration-300 relative overflow-hidden ${visitedBooths.includes(booth.id) ? 'bg-primary/[0.02]' : ''}`}
                          >
                            {visitedBooths.includes(booth.id) && (
                              <div className="absolute top-0 right-0 bg-primary text-white p-1.5 rounded-bl-xl shadow-sm">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                              </div>
                            )}
                            <div className="flex items-start gap-4">
                              <div className={`w-12 h-12 shrink-0 rounded-xl flex flex-col items-center justify-center border border-glass-border/30 shadow-sm ${getBoothColorClass(booth.region)}`}>
                                <span className="text-[0.6rem] opacity-60 font-bold leading-none mb-0.5">{booth.region}</span>
                                <span className="text-[0.8rem] font-black leading-none">{booth.id.replace(booth.region, '')}</span>
                              </div>
                              <div className="flex-grow">
                                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                  <h3 className={`text-base font-bold ${visitedBooths.includes(booth.id) ? 'text-primary' : 'text-text'}`}>{booth.name}</h3>
                                  {getFlavorBadge(booth.details?.flavor)}
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="px-1.5 py-0.5 rounded-md bg-primary/5 text-primary text-[0.65rem] font-bold border border-primary/10">
                                    {booth.details?.region_name || '정보없음'}
                                  </span>
                                  {booth.details?.type && (
                                    <span className="text-[0.65rem] text-text-dim/60 font-medium">
                                      • {booth.details.type.toUpperCase()}
                                    </span>
                                  )}
                                </div>
                              </div>
                              {!visitedBooths.includes(booth.id) && <span className="text-primary/30 self-center">❯</span>}
                            </div>
                            
                            {booth.details?.features && (
                              <div className="mt-1">
                                <p className="text-[0.75rem] text-text-dim leading-relaxed line-clamp-2">
                                  {booth.details.features}
                                </p>
                                {booth.details.tags && (
                                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                                    {booth.details.tags.slice(0, 3).map(tag => (
                                      <span key={tag} className="text-[0.65rem] text-primary/60 font-medium bg-primary/5 px-2 py-0.5 rounded-full">
                                        #{tag}
                                      </span>
                                    ))}
                                  </div>
                                )}
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
        )}

        {/* Tab 3: Schedule */}
        {activeTab === 'schedule' && (
          <section className="fade-in px-2 sm:px-0">
            <div className="mb-8">
              <h2 className="text-xl font-bold">Event Schedule</h2>
            </div>
            <div className="glass-card divide-y divide-glass-border overflow-hidden">
              {[
                { time: "11:00", title: "축제 개막", desc: "2026 사케 페스티벌의 성대한 시작" },
                { time: "13:00", title: "마스터 클래스 I", desc: "사케 소믈리에와 함께하는 테이스팅 기초" },
                { time: "15:00", title: "양조장 토크", desc: "아라마사 양조장 대표와의 특별 대담" },
                { time: "17:00", title: "재즈 공연", desc: "사케와 함께 즐기는 감미로운 선율" },
                { time: "19:00", title: "이벤트 종료", desc: "내일을 기약하며 오늘 행사를 마무리합니다" }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 sm:gap-10 p-5 sm:p-6 hover:bg-bg-sub transition-colors duration-200">
                  <div className="font-black text-primary text-lg min-w-[70px] tabular-nums">{item.time}</div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-base font-bold text-text">{item.title}</h4>
                    <p className="text-sm text-text-dim leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="py-10 text-center text-text-dim text-xs font-medium border-t border-glass-border bg-bg-sub/50">
        <p>© 2026 Sake Festival Seoul</p>
      </footer>
    </main>
  );
}
