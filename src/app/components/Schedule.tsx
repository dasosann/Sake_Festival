import React from 'react';

const Schedule = () => {
  return (
    <section className="fade-in">
      <div className="mb-6 flex flex-col gap-2">
        <h2 className="text-xl font-black">행사 일정</h2>
        <p className="text-sm text-text-dim">축제 기간 동안 진행되는 특별 세션과 이벤트를 확인하세요.</p>
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
  );
};

export default Schedule;
