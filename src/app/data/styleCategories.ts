import { BoothInfo } from "./boothTypes";

export type BoothStyleCategory = "클래식" | "모던" | "뉴에이지";

export const STYLE_CATEGORY_OPTIONS: BoothStyleCategory[] = ["클래식", "모던", "뉴에이지"];

export const STYLE_CATEGORY_SEARCH_TERMS: Record<BoothStyleCategory, string[]> = {
  클래식: ["classic", "클래식"],
  모던: ["modern", "모던"],
  뉴에이지: ["newage", "뉴에이지", "뉴 에이지"],
};

export const BOOTH_STYLE_CATEGORIES: Record<string, BoothStyleCategory[]> = {
  A03: ["모던"],
  A04: ["모던"],
  A05: ["클래식"],
  A06: ["모던"],
  A07: ["뉴에이지"],
  A09: ["클래식"],
  A10: ["모던"],
  A11: ["모던"],
  A12: ["모던"],
  A13: ["클래식"],

  B03: ["모던", "클래식"],
  B04: ["클래식"],
  B05: ["클래식"],
  B07: ["모던"],
  B08: ["클래식"],
  B09: ["클래식"],
  B10: ["모던"],
  B11: ["모던"],
  B12: ["모던"],

  D01: ["클래식"],
  D02: ["모던"],
  D03: ["클래식"],
  D04: ["클래식"],
  D05: ["뉴에이지"],
  D06: ["클래식"],

  E01: ["모던"],
  E02: ["클래식"],
  E03: ["클래식"],
  E04: ["클래식"],
  E05: ["클래식"],
  E06: ["클래식"],
  E07: ["모던"],
  E08: ["클래식"],
  E09: ["클래식"],
  E10: ["클래식"],
  E11: ["모던"],
  E12: ["클래식"],
  E13: ["클래식"],
  E14: ["클래식", "모던"],
  E15: ["클래식"],
  E16: ["클래식"],
  E17: ["모던"],
  E18: ["클래식"],
  E19: ["모던"],
  E20: ["모던"],

  F01: ["모던"],
  F02: ["모던"],
  F03: ["클래식"],
  F04: ["클래식"],
  F05: ["모던"],
  F06: ["클래식"],
  F07: ["모던"],
  F08: ["클래식"],
  F09: ["클래식"],
  F10: ["클래식"],
  F11: ["뉴에이지"],
  F12: ["클래식"],
  F13: ["클래식"],
  F14: ["클래식"],
  F15: ["모던"],
  F16: ["클래식"],
  F17: ["클래식"],
  F18: ["클래식"],
  F19: ["클래식"],
  F20: ["클래식"],
  F21: ["클래식"],

  G02: ["모던"],
  G03: ["모던"],
  G04: ["모던"],
  G05: ["모던"],
  G07: ["클래식"],
  G08: ["모던"],
  G09: ["클래식"],
  G10: ["클래식"],
  G11: ["뉴에이지"],
  G12: ["모던"],
  G13: ["모던"],
  G14: ["클래식"],
  G15: ["모던"],
  G16: ["뉴에이지"],
  G17: ["클래식"],
  G18: ["클래식"],
  G19: ["클래식"],
  G20: ["클래식"],

  H01: ["모던"],
  H02: ["모던"],
  H03: ["클래식"],
  H04: ["모던"],
  H05: ["모던"],
  H06: ["모던"],
  H07: ["모던"],
  H08: ["클래식"],
  H09: ["모던"],
  H10: ["클래식"],
  H11: ["모던"],
  H12: ["클래식"],
  H13: ["클래식"],
  H14: ["뉴에이지"],
  H15: ["모던"],
  H16: ["모던"],
  H17: ["클래식"],
  H18: ["클래식"],
  H19: ["클래식"],
  H20: ["모던"],

  J01: ["클래식"],
  J02: ["모던"],
  J03: ["클래식"],
  J04: ["클래식"],
  J05: ["클래식"],
  J11: ["클래식"],
  J12: ["모던"],
  J13: ["모던"],
  J14: ["클래식"],
  J15: ["클래식"],
  J16: ["클래식"],
  J17: ["클래식"],
  J18: ["모던"],
  J19: ["클래식"],
  J20: ["뉴에이지"],

  K01: ["클래식"],
  K02: ["모던"],
  K03: ["클래식"],
  K04: ["모던"],
  K05: ["클래식"],

  L02: ["클래식"],

  M03: ["클래식"],
  M04: ["모던"],
  M05: ["클래식"],
  M06: ["클래식"],
  M07: ["클래식"],
  M08: ["클래식"],
  M10: ["모던"],
  M11: ["클래식"],
  M12: ["뉴에이지"],

  P01: ["클래식"],
  P02: ["모던"],
  P03: ["모던"],
  P04: ["모던"],
  P05: ["모던"],
  P06: ["클래식"],
  P07: ["클래식"],
  P08: ["클래식"],
  P09: ["클래식"],
  P10: ["클래식"],
  P11: ["모던"],
  P13: ["모던"],
  P14: ["모던"],
  P15: ["모던"],

  Q01: ["모던"],
  Q02: ["클래식"],
  Q03: ["모던"],
  Q04: ["모던"],
  Q05: ["클래식", "뉴에이지"],
  Q06: ["클래식"],
  Q07: ["뉴에이지"],
  Q08: ["모던"],
  Q09: ["클래식"],
  Q10: ["클래식"],
  Q11: ["모던"],
  Q12: ["모던"],
  Q13: ["모던"],
  Q14: ["모던"],

  R01: ["클래식"],
  R02: ["뉴에이지"],
  R03: ["클래식"],
  R04: ["클래식"],
};

export const getBoothStyleCategories = (booth?: BoothInfo | null): BoothStyleCategory[] => {
  if (!booth) return [];
  return BOOTH_STYLE_CATEGORIES[booth.id] || [];
};

export const boothMatchesStyleCategory = (
  booth: BoothInfo,
  selectedCategory: BoothStyleCategory | "전체"
) => {
  if (selectedCategory === "전체") return true;
  return getBoothStyleCategories(booth).includes(selectedCategory);
};

export const boothMatchesStyleSearchTerm = (booth: BoothInfo, term: string) => {
  const normalized = term.trim().toLowerCase();
  if (!normalized) return true;

  return getBoothStyleCategories(booth).some((category) =>
    STYLE_CATEGORY_SEARCH_TERMS[category].some((keyword) => keyword.includes(normalized) || normalized.includes(keyword))
  );
};