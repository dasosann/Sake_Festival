import React from 'react';
import { BoothInfo } from '../boothData';
import BoothBlock from './BoothBlock';

interface Hall1MapProps {
  visitedBooths: string[];
  favoriteBooths: string[];
  setSelectedBooth: (booth: BoothInfo) => void;
}

const Hall1Map: React.FC<Hall1MapProps> = ({
  visitedBooths,
  favoriteBooths,
  setSelectedBooth
}) => {
  return (
    <div className="fade-in">
      {/* Hall 1 Top Zones */}
      <div className="flex gap-4 justify-center mb-10">
        <div className="bg-[#f1f3f5] border border-dashed border-[#dee2e6] text-[#495057] rounded-lg flex items-center justify-center text-[0.65rem] font-bold p-2 text-center w-[110px]">
          참가업체 라운지
        </div>
        <div className="bg-[#f1f3f5] border border-dashed border-[#dee2e6] text-[#495057] rounded-lg flex items-center justify-center text-[0.65rem] font-bold p-2 text-center w-[160px]">
          라운지 (Lounge)
        </div>
        <div className="bg-[#e3f2fd] border border-dashed border-[#90caf9] text-[#1565c0] rounded-lg flex items-center justify-center text-[0.65rem] font-bold p-2 text-center w-[55px]">
          세척존
        </div>
        <div className="bg-[#e7f5ff] border border-dashed border-[#a5d8ff] text-[#1971c2] rounded-lg flex items-center justify-center text-[0.65rem] font-bold p-2 text-center w-[110px]">
          세미나존
        </div>
      </div>

      <div className="flex gap-8 justify-center">
        {/* Left Sidebar: Block B */}
        <div className="flex flex-col gap-3">
          <BoothBlock
            prefix="B"
            count={11}
            cols={1}
            label="수입사"
            startOffset={3}
            visitedBooths={visitedBooths}
            favoriteBooths={favoriteBooths}
            setSelectedBooth={setSelectedBooth}
          />
        </div>

        {/* Main Center Blocks */}
        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
            <BoothBlock
              prefix="K"
              count={5}
              cols={5}
              label="프리미엄"
              visitedBooths={visitedBooths}
              favoriteBooths={favoriteBooths}
              setSelectedBooth={setSelectedBooth}
            />
            <div className="w-5" />
            <BoothBlock
              prefix="J"
              count={17}
              cols={9}
              label="인기"
              visitedBooths={visitedBooths}
              favoriteBooths={favoriteBooths}
              setSelectedBooth={setSelectedBooth}
            />
          </div>
          <div className="flex gap-4">
            <BoothBlock
              prefix="H"
              count={20}
              cols={10}
              label="전통"
              visitedBooths={visitedBooths}
              favoriteBooths={favoriteBooths}
              setSelectedBooth={setSelectedBooth}
            />
          </div>
          <div className="flex gap-4">
            <BoothBlock
              prefix="G"
              count={20}
              cols={10}
              label="모던"
              visitedBooths={visitedBooths}
              favoriteBooths={favoriteBooths}
              setSelectedBooth={setSelectedBooth}
            />
          </div>
          <div className="flex gap-4">
            <BoothBlock
              prefix="F"
              count={20}
              cols={10}
              label="신예"
              visitedBooths={visitedBooths}
              favoriteBooths={favoriteBooths}
              setSelectedBooth={setSelectedBooth}
            />
          </div>
          <div className="flex gap-4">
            <BoothBlock
              prefix="E"
              count={20}
              cols={10}
              label="정통"
              visitedBooths={visitedBooths}
              favoriteBooths={favoriteBooths}
              setSelectedBooth={setSelectedBooth}
            />
          </div>
        </div>

        {/* Right Sidebar: Block D, L */}
        <div className="flex flex-col gap-6">
          <BoothBlock
            prefix="D"
            count={9}
            cols={1}
            label="특별"
            visitedBooths={visitedBooths}
            favoriteBooths={favoriteBooths}
            setSelectedBooth={setSelectedBooth}
          />
          <div className="h-4" />
          <BoothBlock
            prefix="L"
            count={5}
            cols={1}
            label="L-Zone"
            visitedBooths={visitedBooths}
            favoriteBooths={favoriteBooths}
            setSelectedBooth={setSelectedBooth}
          />
        </div>
      </div>

      {/* Bottom row A */}
      <div className="flex gap-4 justify-center mt-12">
        <BoothBlock
          prefix="A"
          count={13}
          cols={13}
          label="안내/기타"
          visitedBooths={visitedBooths}
          favoriteBooths={favoriteBooths}
          setSelectedBooth={setSelectedBooth}
        />
      </div>

      {/* Hall 1 Bottom Zones */}
      <div className="flex gap-4 justify-center items-center mt-10">
        <div className="bg-[#f8f9fa] border border-dashed border-[#ced4da] rounded-lg flex items-center justify-center text-[0.65rem] font-bold text-[#495057] p-2 text-center w-[90px]">
          인포/의무존
        </div>
        <div className="bg-[#f8f9fa] border border-dashed border-[#ced4da] rounded-lg flex items-center justify-center text-[0.65rem] font-bold text-[#495057] p-2 text-center w-[90px]">
          한진택배
        </div>
        <div className="bg-bg py-1 px-4 rounded-full text-[0.65rem] font-bold border border-glass-border shadow-sm">
          로비 출입구 (ENTRANCE)
        </div>
      </div>
    </div>
  );
};

export default Hall1Map;
