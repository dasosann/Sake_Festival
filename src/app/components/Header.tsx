import React from 'react';

const Header = () => {
  return (
    <header className="py-10 px-4 flex flex-col justify-center items-center text-center bg-bg-sub border-b border-glass-border">
      <div className="max-w-xl">
        <h1 className="text-xl sm:text-2xl font-bold mb-2 text-primary tracking-tight">2026 SAKE FESTIVAL</h1>
        <p className="text-[0.7rem] sm:text-xs text-text-dim tracking-[0.2em] uppercase font-medium">SEOUL SETEC · 방문객 가이드</p>
      </div>
    </header>
  );
};

export default Header;
