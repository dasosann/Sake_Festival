import React, { useState } from 'react';
import { ExternalLinkIcon, ClockIcon, TicketIcon, ShoppingCartIcon } from './Icons';

const Schedule = () => {
  const [activeSubTab, setActiveSubTab] = useState<'day23' | 'day24' | 'tasting'>('day23');

  const premiumTastings = [
    {
      time: "13:00",
      title: "1부: 신슈키레이 프리미엄 컬렉션",
      price: "15,000원 (60ml)",
      desc: "오픈런을 부르는 전설의 사케, 신슈키레이 3종을 한자리에서 만나보세요.",
      items: [
        { name: "신슈키레이\n프리미엄골드\n준마이다이긴죠 39", image: "https://placehold.co/400x600/FFD700/white?text=Premium+Gold" },
        { name: "신슈키레이\n미야마니시키\n준마이다이긴죠 39", image: "https://placehold.co/400x600/DAA520/white?text=Miyama+Nishiki" },
        { name: "신슈키레이\n킨몬니시키\n준마이다이긴죠 39", image: "https://placehold.co/400x600/B8860B/white?text=Kinmon+Nishiki" }
      ],
      limit: "사케 1종당 일일 36잔 한정판매",
      theme: "bg-amber-50"
    },
    {
      time: "15:00",
      title: "2부: 전문가가 엄선한 최고의 밸런스, 명주 3종",
      price: "9,000원 (60ml)",
      desc: "세련된 감각과 깊은 맛의 조화, 인기 모던 사케 3종 유료 시음.",
      items: [
        { name: "기쿄\n타헤", image: "https://placehold.co/400x600/94A3B8/white?text=Kikyo" },
        { name: "마츠노츠카사\n아졸라\n준마이다이긴죠 35", image: "https://placehold.co/400x600/64748B/white?text=Azolla" },
        { name: "핫센\n블라쥬", image: "https://placehold.co/400x600/475569/white?text=Hassen" }
      ],
      limit: "사케 1종당 일일 36잔 한정판매",
      theme: "bg-slate-50"
    }
  ];

  const dailySchedule = {
    day23: [
      { time: "11:00", title: "축제 개막 (Day 1)", desc: "2026 서울 사케 페스티벌의 첫 번째 날이 시작됩니다." },
      { time: "13:00", title: "사케 입문 클래스", desc: "사케의 정의와 기본 분류법 배우기" },
      { time: "14:30", title: "지역별 사케의 특징", desc: "일본 각 지방 기후에 따른 맛의 변화" },
      { time: "16:00", title: "재즈 라이브 1", desc: "국내 정상급 재즈 밴드의 공연" },
      { time: "19:00", title: "Day 1 마감", desc: "첫째 날 모든 부스 운영이 종료됩니다." }
    ],
    day24: [
      { time: "11:00", title: "축제 개장 (Day 2)", desc: "2026 서울 사케 페스티벌의 두 번째 날이 시작됩니다." },
      { time: "13:00", title: "마스터 클래스 II", desc: "프리미엄 사케의 세계와 페어링" },
      { time: "15:00", title: "양조장 대표 대담", desc: "일본 양조장 대표들이 들려주는 양조 철학" },
      { time: "17:00", title: "럭키 드로우 이벤트", desc: "방문객 대상 경품 추첨 행사" },
      { time: "19:00", title: "축제 폐막", desc: "내년 사케 페스티벌을 기약하며 종료합니다." }
    ]
  };

  return (
    <section className="fade-in px-1 sm:px-0 pb-10">
      <div className="mb-8 flex flex-col gap-2">
        <h2 className="text-2xl font-black text-text">행사 정보</h2>
        <p className="text-sm text-text-dim font-medium">날짜별 정보와 특별한 유료시음을 확인하세요.</p>
      </div>

      {/* Sub Tabs */}
      <div className="flex gap-2 mb-8 bg-bg-sub/50 p-1 rounded-2xl w-full sm:w-fit overflow-x-auto scrollbar-none">
        <button 
          onClick={() => setActiveSubTab('day23')}
          className={`flex-1 sm:flex-none sm:min-w-[100px] px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${activeSubTab === 'day23' ? 'bg-white text-primary shadow-sm' : 'text-text-dim hover:text-text'}`}
        >
          23일(토)
        </button>
        <button 
          onClick={() => setActiveSubTab('day24')}
          className={`flex-1 sm:flex-none sm:min-w-[100px] px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${activeSubTab === 'day24' ? 'bg-white text-primary shadow-sm' : 'text-text-dim hover:text-text'}`}
        >
          24일(일)
        </button>
        <button 
          onClick={() => setActiveSubTab('tasting')}
          className={`flex-1 sm:flex-none sm:min-w-[100px] px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${activeSubTab === 'tasting' ? 'bg-red-500 text-white shadow-md shadow-red-200' : 'text-text-dim hover:text-text'}`}
        >
          유료시음
        </button>
      </div>

      {/* Tab Content: Daily Info */}
      {(activeSubTab === 'day23' || activeSubTab === 'day24') && (
        <div className="glass-card divide-y divide-glass-border overflow-hidden">
          {dailySchedule[activeSubTab].map((item, index) => (
            <div key={index} className="flex gap-6 sm:gap-10 p-5 sm:p-6 hover:bg-bg-sub transition-colors duration-200">
              <div className="font-black text-primary text-lg min-w-[70px] tabular-nums">{item.time}</div>
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-bold text-text">{item.title}</h4>
                <p className="text-sm text-text-dim leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab Content: Paid Tasting */}
      {activeSubTab === 'tasting' && (
        <div className="space-y-12">
          {premiumTastings.map((tasting, idx) => (
            <div key={idx} className={`rounded-3xl p-6 sm:p-8 ${tasting.theme} border border-glass-border shadow-sm`}>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-primary font-black text-xl">
                    <ClockIcon className="w-5 h-5" />
                    {tasting.time} 시작
                  </div>
                  <h3 className="text-xl font-black text-text tracking-tight">{tasting.title}</h3>
                  <p className="text-sm text-text-dim font-medium max-w-xl leading-relaxed">{tasting.desc}</p>
                </div>
                <div className="bg-bg-sub text-primary px-3 py-1.5 rounded-xl text-sm font-bold border border-primary/10">
                  {tasting.price}
                </div>
              </div>

              {/* Product Grid with Images */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8">
                {tasting.items.map((item, i) => (
                  <div key={i} className="flex flex-col gap-4 group">
                    <div className="aspect-[3/4] rounded-xl sm:rounded-2xl bg-white shadow-sm overflow-hidden border border-glass-border group-hover:shadow-md transition-all">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "https://placehold.co/400x600/f3f4f6/9ca3af?text=Bottle";
                        }}
                      />
                    </div>
                    <div className="text-[0.6rem] sm:text-xs font-black text-text text-center px-1 whitespace-pre-line leading-tight h-[3.5em] flex items-center justify-center">
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-glass-border">
                <div className="flex items-center gap-2 text-[0.7rem] sm:text-sm text-red-500 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  {tasting.limit}
                </div>
                <a 
                  href="https://www.sakefestival.co.kr/voucher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 bg-text text-white rounded-xl font-bold text-xs hover:bg-primary transition-all shadow-md"
                >
                  사전 예약권 구매하기
                  <ExternalLinkIcon className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}

          {/* Guidelines */}
          <div className="glass-card p-6 sm:p-8 bg-bg-sub/30 border-dashed border-2">
            <h4 className="text-lg font-black mb-6 flex items-center gap-2 text-text">
              <TicketIcon className="w-6 h-6 text-primary" />
              공통 안내 및 구매 수칙
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { id: 1, text: "시음권 구매를 위해 서울 사케 페스티벌 입장권이 필요합니다." },
                { id: 2, text: "1인당 종류별로 1매씩만 구매 가능합니다." },
                { id: 3, text: "예약권은 조기에 매진될 수 있으니 미리 확인해 주세요." }
              ].map((rule) => (
                <div key={rule.id} className="flex items-start gap-3 bg-white/50 p-4 rounded-2xl border border-glass-border">
                  <span className="flex-none w-6 h-6 flex items-center justify-center bg-primary text-white rounded-lg font-black text-xs">
                    {rule.id}
                  </span>
                  <p className="text-xs font-bold text-text-dim leading-normal">
                    {rule.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Schedule;
