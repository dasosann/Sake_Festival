'use client';

import React from 'react';

const LayoutMap: React.FC = () => {
  return (
    <div className="fade-in">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <iframe
            src="/images/배치도.pdf#page=1&view=FitH&zoom=page&toolbar=0&navpanes=0&scrollbar=0"
            width="100%"
            height="600"
            className="border border-glass-border rounded-lg shadow-sm"
          />
          <p className="text-center text-sm text-text-dim mt-2">
            PDF 배치도
          </p>
        </div>
      </div>
    </div>
  );
};

export default LayoutMap;
