export interface SakeProduct {
  name: string;
  image?: string;
}

export interface BoothDetail {
  region_name: string;
  history: string;
  features: string;
  official_site?: string;
  type?: "sake" | "shochu" | "awamori" | "beer" | "whisky" | "liqueur" | "food" | "service" | "other";
  tags?: string[];
  flavor?: "amaguchi" | "karaguchi" | "balance";
  products?: SakeProduct[];
}


export interface BoothInfo {
  id: string;
  name: string;
  details?: BoothDetail;
}

export const COMMON_SERVICE_DETAIL: BoothDetail = {
  region_name: "행사 인프라",
  history: "특정 양조장이 아니라, 수입사·유통사·행사 주최 측이 운영하는 안내 및 판매 거점입니다.",
  features: "여러 양조장의 술을 한자리에서 시음·비교하고, 마음에 드는 제품을 구매하거나 굿즈 및 정보를 얻을 수 있는 공식 창구입니다.",
  official_site: "",
  type: "service",
  tags: ["안내", "판매", "시음", "이벤트"]
};
