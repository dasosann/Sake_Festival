'use client';

import { useState } from 'react';
import styles from './page.module.css';

interface Booth {
  id: number;
  name: string;
  region: string;
  description: string;
  tags: string[];
}

const MOCK_BOOTHS: Booth[] = [
  {
    id: 1,
    name: "아라마사 (Aramasa)",
    region: "아키타현 (Akita)",
    description: "전통적인 양조 방식을 고수하면서도 현대적인 감각을 더한 사케의 혁명가. No.6 시리즈가 특히 유명합니다.",
    tags: ["생사케", "모던", "프리미엄"]
  },
  {
    id: 2,
    name: "닷사이 (Dassai)",
    region: "야마구치현 (Yamaguchi)",
    description: "야마다니시키 쌀을 극한까지 깎아내어 만드는 정교한 풍미. 전 세계적으로 가장 사랑받는 사케 브랜드 중 하나입니다.",
    tags: ["준마이다이긴죠", "스테디셀러"]
  },
  {
    id: 3,
    name: "지콘 (Jikon)",
    region: "미에현 (Mie)",
    description: "과실향의 풍부함과 깨끗한 뒷맛의 완벽한 조화. 희소성이 매우 높아 사케 애호가들 사이에서 꿈의 술로 불립니다.",
    tags: ["희귀", "풀바디", "인기부스"]
  },
  {
    id: 4,
    name: "쿠도키조즈 (Kudokijozu)",
    region: "야마가타현 (Yamagata)",
    description: "화려한 향기와 입안을 감싸는 부드러운 단맛이 특징입니다. 여성분들에게 특히 인기가 많은 세련된 스타일입니다.",
    tags: ["화려한향", "부드러움"]
  },
  {
    id: 5,
    name: "나베시마 (Nabeshima)",
    region: "사가현 (Saga)",
    description: "신선한 탄산감과 농축된 쌀의 감칠맛이 폭발하는 사케. 국제 주류 품평회에서 다수의 수상 경력을 자랑합니다.",
    tags: ["탄산감", "수상경력"]
  },
  {
    id: 6,
    name: "히로키 (Hiroki)",
    region: "후쿠시마현 (Fukushima)",
    description: "강렬한 존재감과 밸런스 잡힌 산미. 식사와 함께 곁들였을 때 최상의 퍼포먼스를 보여주는 식중주입니다.",
    tags: ["식중주", "밸런스"]
  }
];

const SCHEDULE = [
  { time: "11:00", title: "축제 개막", desc: "2026 사케 페스티벌의 성대한 시작" },
  { time: "13:00", title: "마스터 클래스 I", desc: "사케 소믈리에와 함께하는 테이스팅 기초" },
  { time: "15:00", title: "양조장 토크", desc: "아라마사 양조장 대표와의 특별 대담" },
  { time: "17:00", title: "재즈 공연", desc: "사케와 함께 즐기는 감미로운 선율" },
  { time: "19:00", title: "이벤트 종료", desc: "내일을 기약하며 오늘 행사를 마무리합니다" }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'map' | 'search' | 'schedule'>('map');
  const [activeHall, setActiveHall] = useState<1 | 2>(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooths = MOCK_BOOTHS.filter(booth => 
    booth.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booth.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booth.tags.some(tag => tag.includes(searchTerm))
  );

  // Helper to render a block of booths
  const renderBlock = (prefix: string, count: number, cols: number, sectionClass: string, label?: string) => (
    <div style={{ position: 'relative' }}>
      {label && <div className={styles.boothLabel} style={{ top: '-15px', left: '0' }}>{label}</div>}
      <div className={styles.mapBlock} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className={`${styles.mapBooth} ${sectionClass}`}>
            {prefix}{String(i + 1).padStart(2, '0')}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className={styles.main}>
      {/* Header Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>2026 SAKE FESTIVAL</h1>
          <p className={styles.heroSubtitle}>SEOUL SETEC · Visitor Guide</p>
        </div>
      </header>

      {/* Tabs Navigation */}
      <nav className={styles.tabsContainer}>
        <button 
          className={`${styles.tab} ${activeTab === 'map' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('map')}
        >
          배치도
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'search' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('search')}
        >
          부스검색
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'schedule' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('schedule')}
        >
          행사일정
        </button>
      </nav>

      <div className="container" style={{ minHeight: '600px', paddingBottom: '50px' }}>
        {/* Tab 1: Map */}
        {activeTab === 'map' && (
          <section className="fade-in">
            <div className={styles.sectionHeader} style={{ textAlign: 'center' }}>
              <h2 className={styles.sectionTitle}>Booth Map</h2>
              <div className={styles.hallSwitcher}>
                <button 
                  className={`${styles.hallBtn} ${activeHall === 1 ? styles.activeHall : ''}`}
                  onClick={() => setActiveHall(1)}
                >
                  1관 (Hall 1)
                </button>
                <button 
                  className={`${styles.hallBtn} ${activeHall === 2 ? styles.activeHall : ''}`}
                  onClick={() => setActiveHall(2)}
                >
                  2관 (Hall 2)
                </button>
              </div>
            </div>

            <div className={styles.mapHall}>
              <div className={styles.hallGridContainer}>
                {activeHall === 1 ? (
                  <div className="fade-in">
                    {/* Hall 1 Top Zones */}
                    <div className={styles.hallRow} style={{ marginBottom: '30px' }}>
                      <div className={`${styles.specialZone} ${styles.loungeZone}`} style={{ width: '120px' }}>참가업체 라운지</div>
                      <div className={`${styles.specialZone} ${styles.loungeZone}`} style={{ width: '180px' }}>라운지 (Lounge)</div>
                      <div className={`${styles.specialZone} ${styles.washZone}`} style={{ width: '60px' }}>세척존</div>
                      <div className={`${styles.specialZone} ${styles.seminarZone}`} style={{ width: '120px' }}>세미나존</div>
                    </div>

                    <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
                      {/* Left Sidebar: Block B */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {renderBlock('B', 7, 1, styles.boothB, '수입사')}
                      </div>

                      {/* Main Center Blocks */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                        <div className={styles.hallRow}>
                          {renderBlock('K', 5, 5, styles.boothK, '프리미엄')}
                          <div style={{ width: '20px' }} />
                          {renderBlock('J', 10, 5, styles.boothJ, '인기')}
                        </div>
                        <div className={styles.hallRow}>
                          {renderBlock('H', 20, 10, styles.boothH, '전통')}
                        </div>
                        <div className={styles.hallRow}>
                          {renderBlock('G', 20, 10, styles.boothG, '모던')}
                        </div>
                        <div className={styles.hallRow}>
                          {renderBlock('F', 20, 10, styles.boothF, '신예')}
                        </div>
                        <div className={styles.hallRow}>
                          {renderBlock('E', 20, 10, styles.boothE, '정통')}
                        </div>
                      </div>

                      {/* Right Sidebar: Block D */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {renderBlock('D', 9, 1, styles.boothK, '특별')}
                      </div>
                    </div>

                    {/* Bottom row A */}
                    <div className={styles.hallRow} style={{ marginTop: '40px' }}>
                      {renderBlock('A', 14, 14, styles.boothA, '안내/기타')}
                    </div>

                    {/* Hall 1 Bottom Zones */}
                    <div className={styles.hallRow} style={{ marginTop: '30px' }}>
                      <div className={styles.specialZone} style={{ width: '100px' }}>인포/의무존</div>
                      <div className={styles.specialZone} style={{ width: '100px' }}>한진택배</div>
                      <div className={styles.entranceLabel}>로비 출입구 (ENTRANCE)</div>
                    </div>
                  </div>
                ) : (
                  <div className="fade-in">
                    {/* Hall 2 Top Zones */}
                    <div className={styles.hallRow} style={{ marginBottom: '30px', justifyContent: 'flex-end' }}>
                      <div className={`${styles.specialZone} ${styles.loungeZone}`} style={{ width: '250px' }}>라운지 (Lounge)</div>
                    </div>

                    <div style={{ display: 'flex', gap: '40px', justifyContent: 'center' }}>
                      {/* Hall 2 Main Blocks */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <div className={styles.hallRow}>
                          {renderBlock('V', 10, 5, styles.boothV, 'V-Section')}
                          <div style={{ width: '20px' }} />
                          {renderBlock('R', 4, 4, styles.boothR, 'R-Section')}
                        </div>
                        <div className={styles.hallRow}>
                          {renderBlock('Q', 14, 7, styles.boothQ, 'Q-Section')}
                        </div>
                        <div className={styles.hallRow}>
                          {renderBlock('P', 14, 7, styles.boothP, 'P-Section')}
                        </div>
                        <div className={styles.hallRow}>
                          {renderBlock('M', 8, 8, styles.boothM, 'M-Section')}
                        </div>
                      </div>

                      {/* Hall 2 Right Sidebar */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div className={`${styles.specialZone} ${styles.washZone}`} style={{ height: '100px', width: '60px' }}>세척존</div>
                        {renderBlock('U', 12, 2, styles.boothV, 'U-Block')}
                        <div className={`${styles.specialZone} ${styles.photoZone}`} style={{ height: '80px', width: '120px' }}>포토존 (술통존)</div>
                      </div>
                    </div>

                    {/* Hall 2 Bottom Zones */}
                    <div className={styles.hallRow} style={{ marginTop: '50px' }}>
                      <div className={styles.entranceLabel}>로비 출입구 (ENTRANCE)</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <p style={{ marginTop: '1.5rem', color: 'var(--text-dim)', fontSize: '0.85rem', textAlign: 'center' }}>
              📍 지도를 스와이프하여 전체 배치를 확인하세요. 각 번호는 '부스검색' 탭에서 검색 가능합니다.
            </p>
          </section>
        )}

        {/* Tab 2: Search */}
        {activeTab === 'search' && (
          <section className="fade-in">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Booth Search</h2>
              <input 
                type="text" 
                placeholder="부스 이름, 지역 또는 태그..." 
                className={styles.searchBox}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className={styles.grid}>
              {filteredBooths.map((booth) => (
                <div key={booth.id} className={styles.card + " glass-card"}>
                  <div className={styles.imagePlaceholder} style={{ color: 'var(--text-dim)', fontWeight: '700' }}>
                    {booth.name.split(' ')[0]}
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{booth.name}</h3>
                    <div className={styles.cardRegion}>
                      <span>📍</span> {booth.region}
                    </div>
                    <div className={styles.tagContainer}>
                      {booth.tags.map(tag => (
                        <span key={tag} className={styles.tag} style={{ background: '#f0f0f0', color: '#666' }}>#{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredBooths.length === 0 && (
              <div style={{ textAlign: 'center', padding: '50px', color: 'var(--text-dim)' }}>
                검색 결과가 없습니다.
              </div>
            )}
          </section>
        )}

        {/* Tab 3: Schedule */}
        {activeTab === 'schedule' && (
          <section className="fade-in">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Event Schedule</h2>
            </div>
            <div className="glass-card" style={{ padding: '1rem' }}>
              {SCHEDULE.map((item, index) => (
                <div key={index} className={styles.scheduleItem}>
                  <div className={styles.scheduleTime}>{item.time}</div>
                  <div className={styles.scheduleContent}>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text)' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer style={{ padding: '30px 0', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.8rem', borderTop: '1px solid var(--glass-border)' }}>
        <p>© 2026 Sake Festival Seoul</p>
      </footer>
    </main>
  );
}
