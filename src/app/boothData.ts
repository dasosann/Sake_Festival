export interface BoothInfo {
  id: string;
  name: string;
}

export const FESTIVAL_BOOTHS: Record<string, BoothInfo[]> = {
  A: [
    { id: "A01", name: "(주)니혼슈코리아 안내부스" },
    { id: "A02", name: "(주)니혼슈코리아 판매부스" },
    { id: "A03", name: "고쿠류" },
    { id: "A04", name: "데와자쿠라" },
    { id: "A05", name: "코시노칸바이" },
    { id: "A06", name: "야마시로야" },
    { id: "A07", name: "이네토아가베" },
    { id: "A08", name: "(주)니혼슈코리아 시음부스" },
    { id: "A09", name: "스이게이" },
    { id: "A10", name: "치토세츠루 아즈마이치" },
    { id: "A11", name: "하츠카메 이소지만" },
    { id: "A12", name: "우고노츠키 우타시로" },
    { id: "A13", name: "타이메이 카네하치" },
  ],
  B: [
    { id: "B03", name: "이마니시/카모니시키/토요비진/센킨/오니비/사츠마시마비진/아오카게/고다이우메슈" },
    { id: "B04", name: "아와모리잔파" },
    { id: "B05", name: "본" },
    { id: "B06", name: "쿠마가이주류 판매부스" },
    { id: "B07", name: "SODAWARI" },
    { id: "B08", name: "사케노이치자" },
    { id: "B09", name: "미이노고토부키" },
    { id: "B10", name: "비죠후" },
    { id: "B11", name: "사라" },
    { id: "B12", name: "칸코바이" },
    { id: "B13", name: "지자케CY코리아(판매부스)" },
  ],
  D: [
    { id: "D01", name: "겐비시" },
    { id: "D02", name: "치에비진" },
    { id: "D03", name: "쵸요후쿠무스메" },
    { id: "D04", name: "즈이요" },
    { id: "D05", name: "에미시키센세이션" },
    { id: "D06", name: "나츠리키" },
    { id: "D07", name: "니혼사케이벤트" },
    { id: "D08", name: "니혼사케판매부스" },
    { id: "D09", name: "니혼사케시음부스" },
  ],
  E: [
    { id: "E01", name: "닷사이" }, { id: "E02", name: "텡구마이" }, { id: "E03", name: "가모츠루" },
    { id: "E04", name: "코마사양조" }, { id: "E05", name: "킹양조" }, { id: "E06", name: "쿠보타" },
    { id: "E07", name: "남부비진" }, { id: "E08", name: "오토코야마" }, { id: "E09", name: "메이리주류" },
    { id: "E10", name: "다카라" }, { id: "E11", name: "카츠야마" }, { id: "E12", name: "킨료" },
    { id: "E13", name: "키타야/고쿠" }, { id: "E14", name: "호우잔/텐부" }, { id: "E15", name: "나나쿠보" },
    { id: "E16", name: "핫카이산" }, { id: "E17", name: "호라이센" }, { id: "E18", name: "이나타히메" },
    { id: "E19", name: "유키노보우샤" }, { id: "E20", name: "나베시마" },
  ],
  F: [
    { id: "F01", name: "죠잔" }, { id: "F02", name: "우메노야도" }, { id: "F03", name: "(주)카네타 타마다 주조점" },
    { id: "F04", name: "나가노메이죠" }, { id: "F05", name: "키노에네" }, { id: "F06", name: "나카이도" },
    { id: "F07", name: "갓산" }, { id: "F08", name: "베니오토메" }, { id: "F09", name: "하쿠시카" },
    { id: "F10", name: "하나노마이" }, { id: "F11", name: "닷사이블루" }, { id: "F12", name: "치요무스비" },
    { id: "F13", name: "쿠로우시" }, { id: "F14", name: "하나가키" }, { id: "F15", name: "시치다" },
    { id: "F16", name: "죠키겐" }, { id: "F17", name: "이요카기야" }, { id: "F18", name: "카쿠레이" },
    { id: "F19", name: "카이운" }, { id: "F20", name: "아야키쿠" },
  ],
  G: [
    { id: "G01", name: "일로사케" }, { id: "G02", name: "호오비덴" }, { id: "G03", name: "카메노우미" },
    { id: "G04", name: "미코츠루" }, { id: "G05", name: "킷도,츠루우메" }, { id: "G06", name: "일로사케" },
    { id: "G07", name: "이와노이" }, { id: "G08", name: "자쿠" }, { id: "G09", name: "햐쿠쥬로" },
    { id: "G10", name: "아카루이노우손" }, { id: "G11", name: "크래프츠맨타다" }, { id: "G12", name: "미치자쿠라" },
    { id: "G13", name: "라이후쿠" }, { id: "G14", name: "이즈모후지" }, { id: "G15", name: "하쿠라쿠세이" },
    { id: "G16", name: "에시칼스피리츠" }, { id: "G17", name: "긴자노스즈메" }, { id: "G18", name: "사케노카마쿠라" },
    { id: "G19", name: "사츠마무소" }, { id: "G20", name: "류카" },
  ],
  H: [
    { id: "H01", name: "유키노비진" }, { id: "H02", name: "야마모토" }, { id: "H03", name: "야마가타마사무네" },
    { id: "H04", name: "벤텐" }, { id: "H05", name: "가산류" }, { id: "H06", name: "타카" },
    { id: "H07", name: "미요시" }, { id: "H08", name: "간기" }, { id: "H09", name: "우라자토" },
    { id: "H10", name: "쿠메지마노쿠메센" }, { id: "H11", name: "슈호" }, { id: "H12", name: "록카센" },
    { id: "H13", name: "토우코우" }, { id: "H14", name: "이노센트" }, { id: "H15", name: "아카부" },
    { id: "H16", name: "야마니쿠모가" }, { id: "H17", name: "아키토라" }, { id: "H18", name: "코우치현" },
    { id: "H19", name: "토요노우메" }, { id: "H20", name: "카메이즈미" },
  ],
  J: [
    { id: "J01", name: "아즈마쵸" }, { id: "J02", name: "아즈마츠루" }, { id: "J03", name: "후쿠우미" },
    { id: "J04", name: "무소우" }, { id: "J05", name: "케센토하루카" }, { id: "J06", name: "일로사케 판매부스" },
    { id: "J07", name: "일로사케 이벤트" }, { id: "J08", name: "센게츠" }, { id: "J09", name: "소우텐덴" },
    { id: "J10", name: "후쿠쵸" }, { id: "J11", name: "고젠슈" }, { id: "J12", name: "타이쇼노츠루" },
    { id: "J13", name: "츠쿠시" }, { id: "J14", name: "시게마스" }, { id: "J15", name: "와카나미" },
    { id: "J16", name: "키쿠비진" }, { id: "J17", name: "리브롬" },
  ],
  K: [
    { id: "K01", name: "미요키쿠" }, { id: "K02", name: "카제노모리" }, { id: "K03", name: "유호" },
    { id: "K04", name: "코츠즈미" }, { id: "K05", name: "사와노츠루" },
  ],
  L: [
    { id: "L01", name: "사카야코리아 판매부스" }, { id: "L02", name: "이와테메이죠" },
    { id: "L03", name: "CR트레이딩" }, { id: "L05", name: "CR트레이딩판매부스" },
  ],
  M: [
    { id: "M01", name: "사카야코리아" }, { id: "M03", name: "스이센" }, { id: "M04", name: "초카이산" },
    { id: "M05", name: "사쿠라가오" }, { id: "M06", name: "하마치도리" }, { id: "M07", name: "야히코주조" },
    { id: "M08", name: "아키타세이슈" }, { id: "M10", name: "마츠노츠카사" }, { id: "M11", name: "반슈잇콘" },
    { id: "M12", name: "아베" },
  ],
  P: [
    { id: "P01", name: "히라이즈미혼포" }, { id: "P02", name: "텐비" }, { id: "P03", name: "무츠핫센" },
    { id: "P04", name: "기쿄" }, { id: "P05", name: "마치다슈죠" }, { id: "P06", name: "나카시마야" },
    { id: "P07", name: "야마탄마사무네" }, { id: "P08", name: "에헤지 하쿠류" }, { id: "P09", name: "히타카미" },
    { id: "P10", name: "겐콘이치" }, { id: "P11", name: "에이쿤" }, { id: "P13", name: "류진/오제노유키도케" },
    { id: "P14", name: "스가타" }, { id: "P15", name: "카모킨슈" },
  ],
  Q: [
    { id: "Q01", name: "하기노츠루/히와타" }, { id: "Q02", name: "자루소호라이" }, { id: "Q03", name: "쥬하치자카리" },
    { id: "Q04", name: "더블유/호라이" }, { id: "Q05", name: "세키토바/다이야메" }, { id: "Q06", name: "쿠로이사니시키" },
    { id: "Q07", name: "보BO" }, { id: "Q08", name: "다이나" }, { id: "Q09", name: "시메하리츠루" },
    { id: "Q10", name: "츄아이" }, { id: "Q11", name: "하네야" }, { id: "Q12", name: "야마노고토부키" },
    { id: "Q13", name: "보우지마야" }, { id: "Q14", name: "와카무스메" },
  ],
  R: [
    { id: "R01", name: "무기시루" }, { id: "R02", name: "카가미즈진저쇼츄리퍼블릭" },
    { id: "R03", name: "토요카류스이센" }, { id: "R04", name: "덴신 잇본기" },
  ],
  V: [
    { id: "V01", name: "메멜트" }, { id: "V03", name: "땐냥꽁냥" }, { id: "V04", name: "캐리어보관소" },
    { id: "V06", name: "실비노" }, { id: "V07", name: "네스상사" }, { id: "V08", name: "소고기초밥" },
    { id: "V09", name: "꼬마루" },
  ],
  U: [
    { id: "U01", name: "닛카프론티어" }, { id: "U04", name: "네스상사" }, { id: "U05", name: "소고기초밥" },
    { id: "U06", name: "꼬마루" }, { id: "U07", name: "꼬알라파이" }, { id: "U08", name: "케밥" },
    { id: "U09", name: "치즈앤모어" }, { id: "U12", name: "에비스 맥주" },
  ],
};

export const ALL_BOOTHS: (BoothInfo & { region: string })[] = Object.entries(FESTIVAL_BOOTHS).flatMap(
  ([region, booths]) => booths.map(b => ({ ...b, region }))
);
