import React from 'react';
import { BoothInfo } from '../boothData';
import BoothBlock from './BoothBlock';

interface Hall2MapProps {
  visitedBooths: string[];
  favoriteBooths: string[];
  setSelectedBooth: (booth: BoothInfo) => void;
}

const Hall2Map: React.FC<Hall2MapProps> = ({
  visitedBooths,
  favoriteBooths,
  setSelectedBooth
}) => {
  return (
    <div className="fade-in">
      {/* Hall 2 Top Zones */}
      <div className="flex gap-4 justify-end mb-10">
        <div className="bg-[#f1f3f5] border border-dashed border-[#dee2e6] text-[#495057] rounded-lg flex items-center justify-center text-[0.65rem] font-bold p-2 text-center w-[220px]">
          라운지 (Lounge)
        </div>
      </div>

      <div className="flex gap-10 justify-center">
        {/* Hall 2 Main Blocks */}
        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
            <BoothBlock
              prefix="V"
              count={9}
              cols={3}
              label="푸드/편의"
              visitedBooths={visitedBooths}
              favoriteBooths={favoriteBooths}
              setSelectedBooth={setSelectedBooth}
            />
            <div className="w-5" />
            <BoothBlock
              prefix="R"
              count={4}
              cols={4}
              label="R-Section"
              visitedBooths={visitedBooths}
              favoriteBooths={favoriteBooths}
              setSelectedBooth={setSelectedBooth}
            />
          </div>
          <div className="flex gap-4">
            <BoothBlock
              prefix="Q"
              count={14}
              cols={7}
              label="Q-Section"
              visitedBooths={visitedBooths}
              favoriteBooths={favoriteBooths}
              setSelectedBooth={setSelectedBooth}
            />
          </div>
          <div className="flex gap-4">
            <BoothBlock
              prefix="P"
              count={15}
              cols={7}
              label="P-Section"
              visitedBooths={visitedBooths}
              favoriteBooths={favoriteBooths}
              setSelectedBooth={setSelectedBooth}
            />
          </div>
          <div className="flex gap-4">
            <BoothBlock
              prefix="M"
              count={12}
              cols={6}
              label="M-Section"
              visitedBooths={visitedBooths}
              favoriteBooths={favoriteBooths}
              setSelectedBooth={setSelectedBooth}
            />
          </div>
        </div>

        {/* Hall 2 Right Sidebar */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#e3f2fd] border border-dashed border-[#90caf9] text-[#1565c0] rounded-lg flex items-center justify-center text-[0.65rem] font-bold p-2 text-center h-[90px] w-[55px]">
            세척존
          </div>
          <BoothBlock
            prefix="U"
            count={12}
            cols={2}
            label="U-Block"
            visitedBooths={visitedBooths}
            favoriteBooths={favoriteBooths}
            setSelectedBooth={setSelectedBooth}
          />
          <div className="bg-[#fff0f6] border border-dashed border-[#ffdeeb] text-[#c2185b] rounded-lg flex items-center justify-center text-[0.65rem] font-bold p-2 text-center h-[70px] w-[110px]">
            포토존 (술통존)
          </div>
        </div>
      </div>

      {/* Hall 2 Bottom Zones */}
      <div className="flex gap-4 justify-center mt-12">
        <div className="bg-bg py-1 px-4 rounded-full text-[0.65rem] font-bold border border-glass-border shadow-sm">
          로비 출입구 (ENTRANCE)
        </div>
      </div>
    </div>
  );
};

export default Hall2Map;
