import { BoothInfo, BoothDetail } from "./data/boothTypes";
import { hall1Booths } from "./data/hall1";
import { hall2Booths } from "./data/hall2";

// Re-export types for compatibility with page.tsx
export type { BoothInfo, BoothDetail };

export const FESTIVAL_BOOTHS: Record<string, BoothInfo[]> = {
  ...hall1Booths,
  ...hall2Booths,
};

export const ALL_BOOTHS: (BoothInfo & { region: string })[] = Object.entries(FESTIVAL_BOOTHS).flatMap(
  ([region, booths]) => booths.map(b => ({ ...b, region }))
);