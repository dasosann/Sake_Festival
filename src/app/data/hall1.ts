import { BoothInfo, COMMON_SERVICE_DETAIL } from "./boothTypes";

export const hall1Booths: Record<string, BoothInfo[]> = {
  A: [
    { id: "A01", name: "(주)니혼슈코리아 안내부스", details: COMMON_SERVICE_DETAIL },
    { id: "A02", name: "(주)니혼슈코리아 판매부스", details: COMMON_SERVICE_DETAIL },
    { id: "A03", name: "고쿠류", details: { region_name: "후쿠이현", history: "고쿠류주조 - 1804년 창업, 에이헤이지 인근 지하수를 사용한 전통 명가.", features: "지나치게 화려하지 않은 기품 있는 향과 실크처럼 매끄러운 목넘김.", official_site: "https://www.kokuryu.co.jp", type: "sake", tags: ["전통", "프리미엄"], flavor: "balance", products: [
      { name: "쿠즈류 준마이" },
      { name: "쿠즈류 키죠슈" },
      { name: "고쿠류 잇쵸라이 준긴" },
      { name: "고쿠류 다이긴죠" },
      { name: "고쿠류 다이긴죠 Crystal Dragon" },
      { name: "고쿠류 준마이다이긴죠" },
      { name: "고쿠류 AWA 죠" }
    ] } },
    { id: "A04", name: "데와자쿠라", details: { region_name: "야마가타현", history: "데와자쿠라주조 - 1892년 창업, 긴조슈 대중화의 선구자.", features: "사과·멜론을 떠올리게 하는 화사한 과실 향과 깨끗한 피니시.", official_site: "https://www.dewazakura.co.jp", type: "sake", tags: ["긴조", "과실향"], flavor: "amaguchi", products: [
      { name: "데와자쿠라 유키메가미" },
      { name: "데와자쿠라 준마이긴죠" },
      { name: "유키만만 빙점하 5년 숙성중" },
      { name: "데와자쿠라 토로케루 라프랑스" },
      { name: "데와자쿠리 잇코 혼나마" }
    ] } },
    { id: "A05", name: "코시노칸바이", details: { region_name: "니가타현", history: "이시모토주조 - 니가타 탄레이 카라쿠치의 대명사.", features: "맑고 깨끗한 인상, 입안을 말끔하게 씻어주는 드라이한 식중주.", official_site: "https://www.koshinokanbai.co.jp", type: "sake", tags: ["드라이", "탄레이"], flavor: "karaguchi", products: [
      { name: "코시노칸바이 벳센" },
      { name: "코시노칸바이 사이" },
      { name: "코시노칸바이 아마네" },
      { name: "코시노칸바이 세이슈" },
      { name: "코시노칸바이 초토쿠센" },
      { name: "코시노칸바이 라군" }
    ] } },
    { id: "A06", name: "야마시로야", details: { region_name: "니가타현", history: "코시메이조주식회사 - 전통 키모토 제조법으로 빚은 사케.", features: "모든 술을 키모토 제법으로 빚어 산미와 감칠맛이 살아있음.", official_site: "https://sugihime.jp", type: "sake", tags: ["키모토", "산미"], flavor: "karaguchi", products: [
      { name: "야마시로야 1st Class" },
      { name: "야마시로야 에이케이" },
      { name: "야마시로야 루스이" },
      { name: "야마시로야 가호" },
      { name: "야마시로야 후우가" }
    ] } },
    { id: "A07", name: "이네토아가베", details: { region_name: "아키타현", history: "이네토아가베 - 2021년 설립된 혁신적 크래프트 사케 양조장.", features: "쌀을 기본으로 아가베, 홉 등 다양한 재료를 활용한 실험적 스타일.", official_site: "https://inetoagave.com", type: "other", tags: ["크래프트", "혁신"], flavor: "balance", products: [
      { name: "코우슈 하나카제" }
    ] } },
    { id: "A08", name: "(주)니혼슈코리아 시음부스", details: { region_name: "큐레이션", history: "일본 각지의 우수한 사케를 한국에 소개하며 여러 양조장과 파트너십을 맺고 있습니다.", features: "다양한 지역과 스타일의 사케를 선별하여 소개하는 플랫폼적인 성격이 강합니다.", official_site: "", type: "other", products: [
      { name: "테도리카와 준마이긴죠" },
      { name: "마쵸 준마이 오마치80" },
      { name: "마쵸 준마이 아이야마80" },
      { name: "블랙잭" },
      { name: "산칸 오마치 준마이 무로카나마겐슈" },
      { name: "닷사이 소노사키에" },
      { name: "추구" },
      { name: "고쿠류 준마이다이긴죠" },
      { name: "고쿠류 AWA 죠" }
    ] } },
    { id: "A09", name: "스이게이", details: { region_name: "홋카이도", history: "니혼세이슈 - 홋카이도 최초의 양조장.", features: "청량한 스타일과 묵직한 쌀맛의 대조가 특징.", official_site: "", type: "sake", tags: ["전통", "지역색"], flavor: "balance", products: [
      { name: "치토세츠루 준마이다이긴죠 스이세이" },
      { name: "치토세츠루 준마이슈" }
    ] } },
    { id: "A10", name: "치토세츠루 아즈마이치", details: { region_name: "사가현", history: "고쵸다주조 - 전통과 혁신의 조화로 유명한 사가의 양조장.", features: "화사한 향과 부드러운 단맛의 전형적인 긴조 스타일.", official_site: "", type: "sake", flavor: "balance", products: [
      { name: "아즈마이치 준마이다이긴죠" },
      { name: "아즈마이치 준마이긴죠 하쿠츠루니시키" },
      { name: "아즈마이치 준마이긴죠 야마다니시키" }
    ] } },
    { id: "A11", name: "하츠카메 이소지만", details: { region_name: "시즈오카현", history: "하츠카메양조와 이소지만주조 - 시즈오카를 대표하는 고급 양조장들.", features: "투명한 주질과 정교하고 화려한 향.", official_site: "", type: "sake", tags: ["프리미엄", "긴조"], flavor: "karaguchi", products: [
      { name: "하츠카메 준마이긴죠 카라카라벳삥" },
      { name: "하츠카메 준마이긴죠 토죠야마다니시키" },
      { name: "하츠카메 토쿠베츠준마이" },
      { name: "이소지만 준마이다이긴죠" },
      { name: "이소지만 준마이긴죠 야마다니시키" },
      { name: "이소지만 토쿠베츠준마이 오마치53" }
    ] } },
    { id: "A12", name: "우고노츠키 우타시로", details: { region_name: "히로시마/니가타", history: "아이하라주조와 텐료하이주조 - 히로시마와 니가타의 아이하라주조와 텐료하이주조가 각각 빚어내는 명품 사케.", features: "부드럽고 투명한 주질이 공통적인 특징.", official_site: "", type: "sake", tags: ["부드러움", "섬세함"], flavor: "amaguchi", products: [
      { name: "우고노츠키 토쿠베츠준마이 야마다니시키" },
      { name: "우고노츠키 준마이다이긴죠 핫탄니시키" },
      { name: "우타시로 릿카" },
      { name: "우타시로 즈이카" },
      { name: "우타시로 히요리" },
      { name: "우타시로 겟카" },
      { name: "우타시로 나루카미" }
    ] } },
    { id: "A13", name: "타이메이 카네하치", details: { region_name: "치바/나가사키", history: "코이즈미주조와 오모야주조 - 지역의 특색을 살린 사케들을 생산하는 양조장들.", features: "다양한 스타일의 사케와 전통 리큐르를 선보입니다.", official_site: "", type: "sake", tags: ["다양한스타일"], flavor: "balance", products: [
      { name: "토카이 자카리 준마이긴죠 나노하나" },
      { name: "토카이 자카리 준마이긴죠 지샤덴 후사노마이" },
      { name: "토카이 자카리 토쿠베츠준마이 야마다니시키" },
      { name: "요코야마 고쥬 준마이다이긴죠 블랙" },
      { name: "요코야마 준마이긴죠 SILVER 초카라 7" },
      { name: "요코야마 준마이긴죠 SILVER 7" },
      { name: "친구 블랙라벨" }
    ] } },
    { id: "A14", name: "후지이양조/요쓰야주조", details: { region_name: "오이타현", history: "후지이양조와 요쓰야주조 - 오이타의 전통 소주 양조장들.", features: "각각의 특색 있는 무기쇼츄를 생산합니다.", official_site: "", type: "shochu", tags: ["쇼츄"], flavor: "balance", products: [
      { name: "무기쇼츄 토쿠조 타이메이" },
      { name: "무기쇼츄 카네하치" }
    ] } },
  ],
  B: [
    { id: "B03", name: "이마니시/카모니시키/토요비진/센킨/오니비/사츠마시마비진/아오카게/고다이우메슈", details: { region_name: "혼합", history: "스미카와주조장, 센킨, 이마니시주조, 카모니시키주조, 타사키주조, 나가시마켄조, 야나기타주조, 야마모토주조 - 모던 사케와 명품 소주들의 집합.", features: "현대적 감각의 사케부터 진한 고구마 소주까지.", official_site: "", type: "other", tags: ["모던", "쇼츄"], flavor: "balance", products: [
      { name: "토요비진 준마이다이긴죠 이치번마토이" },
      { name: "토요비진 준도이치즈" },
      { name: "토요비진 준마이긴죠 오오카라구치" },
      { name: "카쿠메이 센킨 잇세이" },
      { name: "센킨 모던" },
      { name: "이마니시 준마이긴죠 아사히" },
      { name: "카모니시키 니후다자케 준마이다이긴죠 반슈야마다니시키" },
      { name: "야키이모쇼츄 오니비" },
      { name: "이모쇼츄 사츠마시마비진" },
      { name: "무기쇼츄 아오카게" },
      { name: "고다이 우메슈" }
    ] } },
    { id: "B04", name: "아와모리잔파", details: { region_name: "오키나와현", history: "히가주조 - 아와모리 대중화의 상징.", features: "부드럽고 깔끔한 아와모리, 입문자도 즐기기 좋음.", official_site: "", type: "awamori", flavor: "karaguchi", products: [
      { name: "류큐아와모리 잔파 블랙" },
      { name: "류큐아와모리 잔파 화이트" },
      { name: "잔파 TAKASHIHO" },
      { name: "잔파 IMUGE" },
      { name: "류큐아와모리 잔파 프리미엄" },
      { name: "잔파 시쿠와사" },
      { name: "잔파 TORAKICHI" }
    ] } },
    { id: "B05", name: "본", details: { region_name: "후쿠이현", history: "가토키치베쇼텐 - 장기 저온 숙성 전문 명가.", features: "빙온 숙성을 통한 농밀한 감칠맛과 중후함.", official_site: "", type: "sake", flavor: "balance", products: [
      { name: "본 고쿠히조 다이긴죠" },
      { name: "본 토쿠센 준마이다이긴죠" },
      { name: "본 준마이 55" },
      { name: "본 긴센 준마이다이긴죠" },
      { name: "본 무로카 준마이다이긴죠 나마겐슈" },
      { name: "본 골드 준마이다이긴죠" },
      { name: "본 준스이 준마이다이긴죠" }
    ] } },
    { id: "B06", name: "쿠마가이주류 판매부스", details: COMMON_SERVICE_DETAIL },
    { id: "B07", name: "SODAWARI", details: { region_name: "기획부스", history: "SODAWARI - 기존 소주·리큐르 문화를 '탄산과 섞어 마시는 스타일'로 재해석하는 콘셉트 부스입니다.", features: "소다와리 스타일 하이볼을 중심으로 청량감 있는 조합을 제안합니다.", official_site: "", type: "other", tags: ["하이볼", "청량감", "믹솔로지"], products: [
      { name: "야마노고토부키 레몬" },
      { name: "무토우" },
      { name: "류노미키" },
      { name: "에모티" }
    ] } },
    { id: "B08", name: "사케노이치자", details: { region_name: "후쿠오카현", history: "사케노이치자 - 후쿠오카 기반의 주류 기획 브랜드로, 여러 양조장과 협업해 다양한 술을 소개합니다.", features: "큐슈 지역의 숨은 명주와 개성 강한 소주·리큐르를 선별해 소개하는 편집숍 콘셉트입니다.", official_site: "", type: "other", tags: ["편집숍", "큐레이션", "큐슈"], products: [
      { name: "메로메로 모지코 바나나" },
      { name: "메로메로 홋카이도 멜론" },
      { name: "후시기노쿠니 노 카시스 시코쿠" },
      { name: "후시기노쿠니 노 카시스 아카조로에" }
    ] } },
    { id: "B09", name: "미이노고토부키", details: { region_name: "후쿠오카현", history: "미이노고토부키 - 슬램덩크 정대만 사케로 유명한 드라이 사케의 명가.", features: "깔끔하면서도 선명한 맛, 드라이한 설계가 특징.", official_site: "", type: "sake", flavor: "karaguchi", products: [
      { name: "미이노고토부키 준마이다이긴죠 아이야마" },
      { name: "미이노고토부키 준마이다이긴죠 사케미라이" },
      { name: "미이노고토부키 준마이긴죠+14 오카라구치나마" },
      { name: "미이노고토부키 와인코보 준마이긴죠" }
    ] } },
    { id: "B10", name: "비죠후", details: { region_name: "코우치현", history: "하마카와쇼텐 - 고치 식문화와 함께 성장한 명가.", features: "산뜻한 산미와 가벼운 질감으로 해산물과 잘 어울림.", official_site: "", type: "sake", flavor: "karaguchi", products: [
      { name: "비죠후 준마이다이긴죠 히나" },
      { name: "비죠후 준마이다이긴죠 마이" },
      { name: "비죠후 준마이긴죠 셀24" },
      { name: "비죠후 폰 슈와" }
    ] } },
    { id: "B11", name: "사라", details: { region_name: "사이타마현", history: "기타니시주조 - 젊은 층을 타깃으로 한 디자인·맛 중심의 모던 브랜드입니다.", features: "달콤·산뜻한 풍미의 리큐르가 많으며, 칵테일 베이스로도 훌륭합니다.", official_site: "", type: "sake", tags: ["모던", "트렌디", "칵테일"], products: [
      { name: "사라 준마이긴죠" },
      { name: "사라 토쿠베츠 준마이 카스미 무로카나마겐슈" },
      { name: "사라 에스즈 나마즈메" },
      { name: "사라 펄즈 오브 듀" }
    ] } },
    { id: "B12", name: "칸코바이", details: { region_name: "미에현", history: "칸코바이주조 - 지역 밀착형 소규모 양조장.", features: "은은한 꽃향과 부드러운 단맛의 편안한 사케.", official_site: "", type: "sake", flavor: "amaguchi", products: [
      { name: "칸코바이 준마이 야마다니시키60" },
      { name: "칸코바이 준마이긴죠 야마다니시키50" },
      { name: "칸코바이 준마이긴죠 Plus 나마" },
      { name: "칸코바이 준마이긴죠 토레세" }
    ] } },
    { id: "B13", name: "지자케CY코리아(판매부스)", details: COMMON_SERVICE_DETAIL },
  ],
  D: [
    { id: "D01", name: "겐비시", details: { region_name: "효고현", history: "겐비시주조 - 1505년 창업한 초장수 양조장.", features: "묵직한 클래식 스타일, 데워 마셔도 훌륭한 전통파.", official_site: "https://www.kenbishi.co.jp", type: "sake", flavor: "karaguchi", tags: ["니혼SAKE"], products: [
      { 
        name: "쵸토쿠센 고쿠죠 쿠로마츠 겐비시", 
        abv: "16%",
        description: "효고현산 야마다니시키와 아이야마 등을 풍부하게 사용하여 최저 1년이상 저장탱크에서 숙성시켜 깊은 맛과 부드러운 목넘김이 특징입니다."
      },
    },
    {
      id: "D02",
      name: "치에비진",
      details: {
        region_name: "오이타",
        history: "부드러운 단맛의 사케와 리큐르로 인기.",
        features: "디저트 같은 부드러운 단맛과 산미의 균형.",
        official_site: "https://chiebijin.com",
        type: "sake",
        flavor: "amaguchi",
        tags: ["니혼SAKE"],
        products: [
          {
            image: "/치에비진/1.jpg",
            name: "치에비진 쥰마이",
            abv: "16%",
            description:
              "매력적인 긴죠의 포함향도 제대로 느끼고 단맛และ 신맛의 밸런스가 좋은 쥰마이슈입니다.",
            awards: [
              "KURA MASTER 2018 최고급 프레지던트상",
              "KURA MASTER 2019 금상",
            ],
          },
          {
            image: "/치에비진/2.jpg",
            name: "치에비진 LOVE PINK",
            abv: "12%",
            description:
              "부드럽고 후르티한 향, 산미와 감칠맛이 퍼지며 오리가라미 특유의 신선한 발포감이 특징입니다.",
          },
          {
            image: "/치에비진/3.jpg",
            name: "키츠키 블랑 큐베 치에비진 生",
            abv: "13%",
            description:
              "확실한 산미와 뒷 맛의 깨끗함이 모든 해산물과의 조합이 일품인 밸런스 좋은 사케입니다.",
          },
          {
            image: "/치에비진/4.jpg",
            name: "치에비진 Rouge Blanc",
            abv: "16%",
            description:
              "프랑스 KURA MASTER상 부문 1위 수상을 기념하여 세련된 탄산감과 입안 가득 퍼지는 달콤한 산미의 오리가라미로 축배를 들어 보시기 바랍니다.",
          },
          {
            image: "/치에비진/5.jpg",
            name: "치에비진 라팡 生",
            abv: "15%",
            description:
              "은은한 과일향에 깨끗이 떨어지는 뒷 맛, 스파클링 같은 발포감에 뿅뿅 튀는 맛이 특징입니다. 라팡(LAPIN)은 프랑스어로 토끼를 뜻합니다.",
            awards: ["2023년 프랑스 KURA MASTER 프레지던트상"],
          },
          {
            image: "/치에비진/6.jpg",
            name: "치에비진 홍차 우메슈",
            abv: "7%",
            description:
              "레몬을 얹으면 레몬티처럼, 따뜻하게 드시면 홍차와 같아 술이 약하신 분들에게도 적극 추천 드립니다.",
          },
          {
            image: "/치에비진/7.jpg",
            name: "치에비진 에버그린",
            abv: "14%",
            description:
              "리치 또는 머스캣을 연상시키는 후르티한 향과 달콤하고 깔끔한 뒷맛에 과실의 여운이 매력입니다.",
          },
        ],
      },
    },
    {
      id: "D03",
      name: "쵸요후쿠무스메",
      details: {
        region_name: "야마구치",
        history:
          "1919년 창업, 야마구치의 부드러운 연수를 사용한 전통 양조장입니다.",
        features:
          "쌀 본연의 포근한 단맛 extrusion 온화한 과실 향이 특징인 힐링 스타일입니다.",
        official_site: "",
        type: "sake",
        flavor: "amaguchi",
        tags: ["포근함", "단맛", "전통", "니혼SAKE"],
        products: [
          {
            image: "/쵸요후쿠무스메/1.jpg",
            name: "초요후쿠무스메 쥰마이 무로카나마겐슈 지카구미 生",
            abv: "16%",
            description:
              "야마다니시키를 전량 사용하여 전통적인 제법으로 빚어낸 술 입니다. 나마사케다운 맛과 겐슈이기에 낼 수 있는 쌀의 단맛, 감칠맛을 즐겨주세요.",
          },
          {
            image: "/쵸요후쿠무스메/2.jpg",
            name: "쵸요후쿠무스메 야마다니시키 쥰마이 모모이로",
            abv: "13%",
            description:
              "첫 모금에는 달콤함이 입안 가득하다가 어느새 산미가 더해지며 달콤함을 코팅 시켜주는 느낌입니다. 사케 초보자분들도 쉽게 접근할 수 있습니다.",
          },
          {
            image: "/쵸요후쿠무스메/3.jpg",
            name: "쵸요후쿠무스메 야마다니시키 쥰마이긴죠",
            abv: "16%",
            description:
              "청사과와 파인애플의 향기가 화려하면서도 넘치지 않게 품격을 갖추며, 기분 좋은 산미가 뒤를 받쳐주는 감칠맛 넘치는 쥰마이긴죠입니다.",
          },
          {
            image: "/쵸요후쿠무스메/4.jpg",
            name: "쵸요후쿠무스메 카라구치쥰마이슈 무로카나마겐슈 지카구미 生",
            abv: "18.5%",
            description:
              "카라구치이면서도 쌀의 맛이 잘 느껴지는 균형 잡힌 맛의 사케입니다.",
          },
          {
            image: "/쵸요후쿠무스메/5.jpg",
            name: "쵸요후쿠무스메 사이토노시즈쿠 카라구치 지카구미 히이레",
            abv: "16%",
            description:
              "지카구미 특유의 신선함과 미탄산감, 시원함에 더해 카라구치 특유의 샤프함이 일품인 사케 입니다.",
          },
        ],
      },
    },
    {
      id: "D04",
      name: "즈이요",
      details: {
        region_name: "구마모토",
        history:
          "1867년 창업, 전통주 ‘아카자케(붉은 술)’ 생산으로도 유명합니다.",
        features: "묵직한 감칠맛과 두터운 풍미를 가진 전통 규슈 스타일입니다.",
        official_site: "",
        type: "sake",
        flavor: "karaguchi",
        tags: ["아카자케", "감칠맛", "묵직함", "니혼SAKE"],
        products: [
          {
            image: "/즈이요/1.jpg",
            name: "호우쥰 쥰마이슈 즈이요",
            abv: "15%",
            description:
              "엄선된 큐슈산 쌀과 아소의 복류수, 온난한 쿠마모토의 풍토가 만들어낸 향기롭고 부드러운 맛의 쥰마이슈입니다.",
          },
          {
            image: "/즈이요/2.jpg",
            name: "긴죠슈 킷쇼 즈이요",
            abv: "15%",
            description:
              "식중주로 적합하게 부드럽게 제조하였습니다. 화려한 긴죠향과 마일드 한 뒷 맛의 밸런스가 매우 좋습니다.",
          },
          {
            image: "/즈이요/3.jpg",
            name: "즈이요 혼카쿠 쇼추 준가 무기 28도",
            abv: "28%",
            description:
              "마치 감귤과 같은 후르티한 향과 보리 특유의 고소함이 하모니를 이루며 온화한 여운을 남기는 부드러운 맛입니다.",
          },
          {
            image: "/즈이요/4.jpg",
            name: "즈이요 나나나마 生",
            abv: "15.4%",
            description:
              "유채꽃을 사용한 천연 유기농법으로 제조하여 신슈(新酒) 특유의 화려함과, 달콤한 향과 상쾌함이 일품입니다.",
          },
          {
            image: "/즈이요/5.jpg",
            name: "즈이요 혼카쿠 쇼추 준가 코메 28도",
            abv: "28%",
            description:
              "잡미가 없으며 담백한 맛에 쌀의 감칠맛과 긴조향을 더해 마일드함과 상쾌한 뒷맛을 추구 하였습니다.",
          },
        ],
      },
    },
    {
      id: "D05",
      name: "에미시키센세이션",
      details: {
        region_name: "시가",
        history: "실험적인 '센세이션' 시리즈로 유명한 모던 명가.",
        features: "열대 과일 향과 개성적인 산미, 팝한 라벨이 특징.",
        official_site: "https://www.emishiki.com",
        type: "sake",
        flavor: "amaguchi",
        tags: ["니혼SAKE"],
        products: [
          {
            name: "에미시키 쥰마이다이긴죠 아카이이토 生",
            abv: "16%",
            description:
              "시가현산 긴후부키로 자사 효모로 빚었습니다. 깨끗한 향, 인상적인 단맛, 조금 긴 여운을 즐길 수 있습니다.",
          },
          {
            name: "에미시키 몬순 야마다니시키 키죠슈 生",
            abv: "17%",
            description:
              "농밀한 시럽을 연상시키는 달콤한 향미와 입 안에서 느껴지는 야마다니시키의 달콤한 맛을 한계점까지 이끌어 낸듯한 느낌을 줍니다",
          },
          {
            name: "에미시키 토쿠베츠쥰마이 센세이션 블랙 生",
            abv: "16%",
            description:
              "확실한 카라구치를 느낄 수 있게 설계되어 감귤을 연상시키는 상쾌한 향미와 입안에서 느껴지는 절제된 달콤함, 신선한 산미의 조화가 특징입니다.",
          },
          {
            name: "에미시키 토쿠베츠쥰마이 센세이션 화이트 生",
            abv: "16%",
            description:
              "효모에서 나오는 긴죠향, 깔끔한 단맛, 경쾌한 끝맛을 즐길수 있어 일식과의 친화성을 높였습니다.",
            awards: ["Sake Competition 2018,2019 연속 금상"],
          },
          {
            name: "에미시키 토쿠베츠쥰마이 센세이션 블루 生",
            abv: "16%",
            description:
              "독특한 청사과와 포도 같은 단맛이 매력적입니다. 화이트/블랙라벨에서 느낄 수 없었던 과일을 먹는듯한 촉촉한 달콤함을 느껴보시기 바랍니다.",
          },
          {
            name: "에미시키 월드피스",
            abv: "16%",
            description:
              "화려하고 선명한 향과 은은한 달콤함에 후르티한 엑센트와 산미가 일품인 쥰마이다이긴죠급 쥰마이긴죠 사케입니다.",
          },
          {
            name: "에미시키 퓨처리즘 쥰마이 이치고 메디테이션",
            abv: "16%",
            description:
              "딸기 잎의 효모를 이용해 종래의 사케에서 느낄 수 없는 아련하고 달콤환 딸기의 산미를 느낄 수 있습니다.",
          },
        ],
      },
    },
    {
      id: "D06",
      name: "타츠리키",
      details: {
        region_name: "효고",
        history:
          "전세계에서 가장 비싼 쌀 생산지인 나카쿠의 쌀만 고집하는 장인 브랜드.",
        features:
          "쌀의 등급과 산지에 따른 미묘한 맛의 차이를 극한까지 표현합니다.",
        official_site: "",
        type: "sake",
        flavor: "karaguchi",
        tags: ["니혼SAKE"],
        products: [
          {
            image: "/타츠리키/1.jpg",
            name: "타츠리키 토쿠베츠 쥰마이 쥰마이88 코메코도부키",
            abv: "15%",
            description:
              "부드러운 목넘김과 심플하면서 입안에 퍼지는 감칠맛을 깔끔한 뒷 맛으로 밸런스를 잡아 내었습니다.",
          },
          {
            image: "/타츠리키/2.jpg",
            name: "타츠리키 쥰마이긴죠 드래곤 에피소드 2 生",
            abv: "16%",
            description:
              "쌀이 가진 느낌을 잘 살리면서 깔끔한 목넘김이 특징입니다. 바나나와 메론이 느껴지는 향이 일품입니다.",
          },
          {
            image: "/타츠리키/3.jpg",
            name: "타츠리키 토쿠베츠 쥰마이 쿠라다시 신슈 生",
            abv: "19%",
            description:
              "유기농 황새 서식 농법으로 재배한 효고현산 주조미 고햐쿠만고쿠를 사용하여 화려한 향과 청량한 미탄산감이 적당한 감미와 함께 부드러운 첫 맛을 느끼게 하는 혼죠조 사케입니다.",
          },
          {
            image: "/타츠리키/4.jpg",
            name: "타츠리키 토쿠베츠 쥰마이 시보리타테 生",
            abv: "18%",
            description:
              "효고현의 황새 서식 농법으로 재배한 햐쿠만고쿠를 사용하여 샤인 머스캣을 연상시키는 후레쉬함, 탁월한 탄산감과 풋풋함이 살아있는 신슈입니다.",
          },
        ],
      },
    },
    {
      id: "D07",
      name: "니혼사케 이벤트",
    },
    { id: "D08", name: "니혼사케 판매부스", details: COMMON_SERVICE_DETAIL },
    {
      id: "D09",
      name: "니혼사케 시음부스",
      details: {
        ...COMMON_SERVICE_DETAIL,
        products: [
          {
            image: "/(주)니혼사케/1.jpg",
            name: "미야칸바이 쥰마이다이긴죠 무로카 나카도리生",
            abv: "15%",
            description:
              "니혼슈의 진수를 말하는 지복(至福). 가장 맛있는 「나카도리」를 무여과 그대로 병입 한 특별한 준마이다이긴죠.",
          },
          {
            image: "/(주)니혼사케/2.jpg",
            name: "미야칸바이 EXTRA CLASS 쥰레이쥰카",
            abv: "16%",
            description:
              "입에 닿았을 때 느껴지는 곱고 아름다움, 숙성된 과실과도 같은 풍부하고 농밀한 사케의 맛, 향기는 매우 깊고 향기로운 향.",
          },
          {
            image: "/(주)니혼사케/3.jpg",
            name: "키쿠마사무네 혼죠조 키모토즈쿠리",
            abv: "15%",
            description:
              "잡미가 없고 깔끔한 맛. 확실한 맛과 깔끔한 목넘김이 장점인 본격 카라쿠치혼죠조슈.",
          },
          {
            image: "/(주)니혼사케/4.jpg",
            name: "키쿠마사무네 쵸토쿠센 시보리타테 쥰마이다이긴죠",
            abv: "16%",
            description:
              "과일이 연상되는 화려한 향과 깊고 부드러운 감칠맛의 조화로 어느 음식과도 페어링하기 좋은 깔끔한 카라쿠치 사케 입니다.",
          },
          {
            image: "/(주)니혼사케/5.jpg",
            name: "밧칸 나사케시마",
            abv: "25%",
            description:
              "여과 과정을 최소화 한 소주 원액을 저장하여 매일매일 부유기름을 수작업으로 걷어내며 정성을 다해 만들었습니다.",
          },
          {
            image: "/(주)니혼사케/6.jpg",
            name: "시라타마 우메슈",
            abv: "14%",
            description:
              "맑은 맛과 풍부한 향이 특징인 퀄리티 높은 우메슈입니다.",
          },
          {
            image: "/(주)니혼사케/7.jpg",
            name: "칸기쿠 Pray for 나카도리무로카나마겐슈",
            abv: "15%",
            description:
              "특유의 감칠맛과 입속에서 사르르 녹아 내리는 잡미가 전혀 없는 최고의 맛을 경험해 보시기 바랍니다.",
          },
          {
            image: "/(주)니혼사케/8.jpg",
            name: "칸기쿠 우슈호마레 50 -Horizon-生",
            abv: "15%",
            description:
              "모든 음식과도 잘 어울리며 투명감이 좋은 깔끔한 맛을 추구하였습니다.",
          },
          {
            image: "/(주)니혼사케/9.jpg",
            name: "칸기쿠 Ocean99 소라우미-Inflight-무로카겐슈",
            abv: "16%",
            description:
              "신선하고 청량한 여름 바다를 연상시키고 산뜻한 자몽의 향과 여과처리를 하지않아 원주의 생동감과 신선함을 동시에 느낄 수 있어 깨끗하고 깔끔하게 즐기실 수 있습니다.",
          },
          {
            image: "/(주)니혼사케/10.jpg",
            name: "칸기쿠 모노크롬 무로카나마겐슈",
            abv: "15%",
            description:
              "선명한 맛과 후레쉬한 미탄산감이 입안 가득히 퍼지며 마치 과실과 같은 향미의 화려한 긴죠항의 사케입니다.",
          },
          {
            image: "/(주)니혼사케/11.jpg",
            name: "칸기쿠 아이야마50 -Red Diamond-生",
            abv: "15%",
            description:
              "정열적이며 우아한 달콤함을 연출 하였습니다. 살아있는 탄산감, 감칠맛과 파인애플을 연상시키는 향기, 가벼운 터치감과 함께 깔끔한 맛의 사케입니다.",
          },
          {
            image: "/(주)니혼사케/12.jpg",
            name: "미야칸바이 쥰마이기뉴 오리가라미 生",
            abv: "16%",
            description:
              "샤인머스캣, 복숭아, 멜론을 연상시키는 농축된 열대과실의 향미로 존재감을 화려하게 드러내며 신주의 깨끗함과 투명감있는 맛이 특징입니다.",
            awards: [
              "SAKE COMPETITION 2016 금상수상",
              "ANA국제선 일등석과 비지니스석 채용주",
            ],
          },
        ],
      },
    },
  ],
  E: [
    {
      id: "E01",
      name: "닷사이",
      details: {
        region_name: "야마구치",
        history: "세계적인 프리미엄 사케 브랜드.",
        features: "화사한 과실 향과 실크 같은 질감의 준마이 다이긴조.",
        official_site: "https://dassai.com",
        type: "sake",
        flavor: "amaguchi",
      },
    },
    {
      id: "E02",
      name: "텡구마이",
      details: {
        region_name: "이시카와",
        history:
          "1823년 창업, 전통 야마하이 제법을 확립하며 전국적인 명성을 얻은 명가입니다.",
        features:
          "진한 감칠맛과 뚜렷한 산미가 공존하며, 중후한 요리와 잘 어울리는 깊은 맛이 특징입니다.",
        official_site: "https://www.tengumai.co.jp",
        type: "sake",
        tags: ["야마하이", "이시카와", "감칠맛"],
        flavor: "karaguchi",
      },
    },
    {
      id: "E03",
      name: "가모츠루",
      details: {
        region_name: "히로시마",
        history: "히로시마를 대표하는 금박 사케 명가.",
        features: "화사한 향과 부드러운 단맛의 전형적인 긴조 스타일.",
        official_site: "https://www.kamotsuru.jp",
        type: "sake",
        flavor: "amaguchi",
      },
    },
    {
      id: "E04",
      name: "코마사양조",
      details: {
        region_name: "가고시마",
        history:
          "1883년 설립, 고구마 소주 ‘호우잔’ 시리즈와 크래프트 진으로 유명한 증류주 명가입니다.",
        features:
          "고구마의 향과 구수함을 살리면서도 깔끔한 현대적 스타일의 소주와 섬세한 진을 생산합니다.",
        official_site: "",
        type: "shochu",
        tags: ["가고시마", "크래프트진", "위스키"],
        flavor: "balance",
      },
    },
    {
      id: "E05",
      name: "킹양조",
      details: {
        region_name: "효고",
        history:
          "1900년 전후 설립, 미림과 알코올 음료 등 폭넓은 제품을 생산합니다.",
        features:
          "안정적인 품질의 가성비 사케 라인업을 공급하는 대형 메이커입니다.",
        official_site: "",
        type: "sake",
        flavor: "balance",
        tags: ["대형메이커", "가성비", "안정적"],
      },
    },
    {
      id: "E06",
      name: "쿠보타",
      details: {
        region_name: "니가타",
        history: "니가타 탄레이 카라쿠치 붐의 주역.",
        features: "극도의 깨끗함과 담백함, 식중주의 대명사.",
        official_site: "",
        type: "sake",
        flavor: "karaguchi",
      },
    },
    {
      id: "E07",
      name: "남부비진",
      details: {
        region_name: "이와테",
        history:
          "1902년 창업, 지역 쌀과 물을 활용해 국제 품평회에서 다수 수상한 세계적 브랜드입니다.",
        features:
          "맑고 고운 인상의 주질과 섬세한 단맛·산미의 조화가 특징인 우아한 사케입니다.",
        official_site: "https://www.nanbubijin.co.jp",
        type: "sake",
        tags: ["이와테", "화사함", "수출강자"],
        flavor: "amaguchi",
      },
    },
    {
      id: "E08",
      name: "오토코야마",
      details: {
        region_name: "홋카이도",
        history:
          "에도 시대 전통을 계승하여 홋카이도 아사히카와의 맑은 물로 사케를 빚습니다.",
        features:
          "설산을 떠올리게 하는 시원하고 드라이한 ‘카라쿠치’ 스타일 사케의 대표격입니다.",
        official_site: "https://www.otokoyama.com",
        type: "sake",
        tags: ["홋카이도", "드라이", "전통"],
        flavor: "karaguchi",
      },
    },
    {
      id: "E09",
      name: "메이리주류",
      details: {
        region_name: "이바라키",
        history: "조 후기 설립, 사케·소주·리큐르 등 다양한 주류를 생산합니다.",
        features:
          "‘햐쿠넨 우메슈’ 등 진한 맛의 리큐르 분야에서 인지도가 높습니다.",
        official_site: "",
        type: "other",
        flavor: "amaguchi",
        tags: ["리큐르", "햐쿠넨우메슈"],
      },
    },
    {
      id: "E10",
      name: "다카라",
      details: {
        region_name: "교토",
        history:
          "1925년 설립, ‘쇼치쿠바이’ 브랜드로 알려진 일본 대표 주류 기업입니다.",
        features:
          "깔끔하고 안정된 맛을 가진 국민 브랜드 성격의 사케를 선보입니다.",
        official_site: "",
        type: "sake",
        flavor: "karaguchi",
        tags: ["쇼치쿠바이", "종합주류"],
      },
    },
    {
      id: "E11",
      name: "카츠야마",
      details: {
        region_name: "미야기",
        history:
          "1688년 창업, 다테 마사무네 가문의 어용주를 만들던 미야기현 센다이의 명가입니다.",
        features:
          "높은 정미율로 구현한 밀도 높은 감칠맛과 구조감이 돋보이는 프리미엄 식중주입니다.",
        official_site: "https://www.katsuyamasake.com",
        type: "sake",
        tags: ["프리미엄", "센다이", "세련됨"],
        flavor: "amaguchi",
      },
    },
    {
      id: "E12",
      name: "킨료",
      details: {
        region_name: "카가와",
        history: "1789년 창업, 시코쿠 지역을 대표하는 전통 양조장입니다.",
        features:
          "온화한 산미와 부드러운 쌀 풍미로 해산물과의 궁합이 좋습니다.",
        official_site: "https://kinryo.co.jp",
        type: "sake",
        flavor: "balance",
        tags: ["시코쿠", "해산물궁합"],
      },
    },
    {
      id: "E13",
      name: "키타야/고쿠",
      details: {
        region_name: "후쿠오카",
        history: "1818년 창업, 국제 대회 IWC 챔피언 수상 경력의 명가입니다.",
        features:
          "정제된 스타일의 사케와 오크 숙성 보리소주 ‘고쿠’가 유명합니다.",
        official_site: "https://www.kitaya.co.jp",
        type: "sake",
        flavor: "karaguchi",
        tags: ["IWC챔피언", "오크숙성소주"],
      },
    },
    {
      id: "E14",
      name: "호우잔/텐부",
      details: {
        region_name: "가고시마",
        history:
          "전통 고구마 소주 '호우잔'과 최근 선보인 모던 사케 브랜드 '텐부'를 전개합니다.",
        features:
          "구수한 소주의 풍미와 맑고 깨끗한 산미의 사케를 모두 즐길 수 있는 라인업입니다.",
        official_site: "",
        type: "shochu",
        tags: ["가고시마", "혁신", "고구마소주"],
        flavor: "balance",
      },
    },
    {
      id: "E15",
      name: "나나쿠보",
      details: {
        region_name: "가고시마",
        history:
          "전통 소주 메이커가 선보이는 프리미엄 고구마 소주 브랜드입니다.",
        features:
          "고구마의 강한 향을 정제해 부드러운 단맛과 깔끔한 마무리를 강조합니다.",
        official_site: "",
        type: "shochu",
        flavor: "amaguchi",
        tags: ["프리미엄소주", "고구마소주"],
      },
    },
    {
      id: "E16",
      name: "핫카이산",
      details: {
        region_name: "니가타",
        history: "설산 지하수를 사용하는 니가타 대표 양조장.",
        features: "질리지 않는 깨끗한 맛의 올라운더 식중주.",
        official_site: "https://www.hakkaisan.co.jp",
        type: "sake",
        flavor: "karaguchi",
      },
    },
    {
      id: "E17",
      name: "호라이센",
      details: {
        region_name: "아이치",
        history:
          "1864년 창업, 아이치현 오쿠미카와에서 체험형 프로그램을 운영하는 지역 친화적 양조장입니다.",
        features:
          "프리미엄 라인 ‘쿠우(空)’로 대표되는 우아한 과실 향과 실크 같은 텍스처가 특징입니다.",
        official_site: "https://www.houraisen.co.jp",
        type: "sake",
        tags: ["아이치", "우아함", "인기주"],
        flavor: "amaguchi",
      },
    },
    {
      id: "E18",
      name: "이나타히메",
      details: {
        region_name: "돗토리",
        history:
          "1673년 창업, 일본 신화 속 공주의 이름을 딴 역사 깊은 곳입니다.",
        features:
          "전통 양조법으로 쌀의 감칠맛을 살린 묵직하고 품위 있는 풍미입니다.",
        official_site: "https://www.inata.co.jp",
        type: "sake",
        flavor: "balance",
        tags: ["신화", "전통양조", "묵직함"],
      },
    },
    {
      id: "E19",
      name: "유키노보우샤",
      details: {
        region_name: "아키타",
        history:
          "1902년 설립, 자연 발효와 정밀한 온도 관리를 통해 아키타 사케의 정수를 보여줍니다.",
        features:
          "화사한 과실 향과 세련된 산미, 정제된 향미가 균형을 이루는 모던한 스타일입니다.",
        official_site: "https://www.yukinobousha.jp",
        type: "sake",
        tags: ["아키타", "효모명가", "세련됨"],
        flavor: "amaguchi",
      },
    },
    {
      id: "E20",
      name: "나베시마",
      details: {
        region_name: "사가",
        history: "IWC 챔피언 사케 수상으로 명성을 얻은 프리미엄 브랜드.",
        features: "화사한 향과 세련된 산미, 풍부한 단맛의 조화.",
        official_site: "https://www.fukuchiyo.co.jp",
        type: "sake",
        flavor: "amaguchi",
      },
    },
  ],
  F: [
    {
      id: "F01",
      name: "죠잔",
      details: {
        region_name: "후쿠이",
        history:
          "후쿠이현의 산간 지역에서 19세기 후반 설립되어 지역 지하수와 쌀로 사케를 빚어왔습니다.",
        features:
          "잡미 없이 깨끗하게 떨어지는 피니시가 특징인 드라이한 식중주 스타일입니다.",
        type: "sake",
        tags: ["후쿠이", "드라이", "강직함", "니혼SAKE"],
        flavor: "karaguchi",
        products: [
          {
            image: "/죠잔/1.jpg",
            name: "죠잔 쥰마이다이긴죠 아라이소 生",
            abv: "16%",
            description:
              "겨울에 거친 일본해를 표현한 신주의 시기인 만큼, 극소량만 출하되는 초한정상품. 고급스럽고 부드러운 탄산감과 깔끔하고 깨끗한 뒷맛이 죠잔의 탄레이 감칠맛을 표현하고 있습니다.",
          },
          {
            image: "/죠잔/2.jpg",
            name: "죠잔 쥰마이긴죠 겐타츠 生",
            abv: "15%",
            description:
              "여름에 개방되는 후쿠이의 환상의 해역 “겐타츠세”에서 이름을 딴 여름 한정 사케. 넓은 바다를 힘차게 도약하는 도미가 인상적인 여름 바다를 표현한 상쾌한 사케입니다.",
          },
          {
            image: "/죠잔/3.jpg",
            name: "죠잔 쥰마이다이긴죠 호우준 카라구치 키와미",
            abv: "15%",
            description:
              "카라구치 사케의 명가 죠잔에서 극강의 깔끔함과 투명감, 그리고 고져스한 향의 삼위일체 품격을 갖춘 카라구치 라인의 가성비 좋은 최상위 사케입니다.",
          },
          {
            image: "/죠잔/4.jpg",
            name: "죠잔 SPRARKLING 니고리 사케",
            abv: "15%",
            description:
              "니고리사케 특유의 농후한 감칠맛과 넘치는 발포감이 일품인 사케입니다.",
          },
          {
            image: "/죠잔/5.jpg",
            name: "죠잔 후나바하츠즈메 즈이이치",
            abv: "15%",
            description:
              "입안 가득히 복숭아 향을 느끼게 해주며 시보리타테의 깨끝한 투명감과 톡톡 튀는탄산감이 모던 후레쉬함을 전해주고 있습니다.",
          },
        ],
        official_site: "",
      },
    },
    {
      id: "F02",
      name: "우메노야도",
      details: {
        region_name: "나라",
        history:
          "1893년 창업, 전통 사케와 함께 생과일 리큐르 ‘아라고시’ 시리즈로 세계적인 인기를 얻었습니다.",
        features:
          "부드러운 질감의 사케와 실제 과일을 듬뿍 사용한 진한 과실 리큐르가 강점입니다.",
        official_site: "https://umenoyado.com",
        type: "liqueur",
        tags: ["리큐르", "아라고시", "나라", "니혼SAKE"],
        flavor: "amaguchi",
        products: [
          { image: "/우메노야도/1.jpg", name: "우메노야도 아라고시 유즈슈" },
          { image: "/우메노야도/2.jpg", name: "우메노야도 아라고시 모모" },
          { image: "/우메노야도/3.jpg", name: "우메노야도 토마토" },
          {
            image: "/우메노야도/4.jpg",
            name: "우메노야도 시트러스위트 Citrusweet",
          },
        ],
      },
    },
    {
      id: "F03",
      name: "(주)카네타 타마다 주조점",
      details: {
        region_name: "아오모리",
        history:
          "아오모리현의 자연환경을 담아 전통적인 방식과 현대적인 감각을 조화시킨 양조장입니다.",
        features:
          "깔끔하고 청량한 맛을 지향하며, 지역 특산물과의 페어링을 중요하게 생각합니다.",
        official_site: "",
        type: "sake",
        tags: ["아오모리", "청량함", "니혼SAKE"],
        flavor: "balance",
        products: [
          {
            image: "/타마다/1.jpg",
            name: "쥰마이긴죠 하나잇푸",
            abv: "16%",
            description:
              "후레쉬하고 잡미가 없으며 화려한 향과 함께 경쾌하고 풋사과를 연상시키는 상쾌함이 좋은 사케 입니다.",
          },
          {
            image: "/타마다/2.jpg",
            name: "340",
            abv: "13%",
            description:
              '일본 스노우 보드의 메카인 "하쿠바의 전용 340 설 돔"에서 전세계 보더들 약 1만명으로부터 찬사를 얻은 명품 니고리 사케 입니다.',
          },
        ],
      },
    },
    {
      id: "F04",
      name: "나가노 메이죠",
      details: {
        region_name: "나가노",
        history:
          "나가노현의 산악 지대에서 지하수를 활용하여 상쾌한 주질을 추구합니다.",
        features:
          "부드러운 산미와 깨끗한 목넘김으로 산지 채소 요리와 훌륭한 궁합을 보여줍니다.",
        official_site: "",
        type: "sake",
        tags: ["니혼SAKE"],
        products: [
          {
            image: "/나가노 메이죠/1.jpg",
            name: "쥰마이다이긴죠 타나다 라그라스",
            abv: "15%",
            description:
              "리치한 보디감에 그윽한 향기, 산미와 감칠맛이 어울리는 밸런스감이 훌륭한 화이트 와인과 같은 사케입니다.",
            awards: ["2023년 쿠라마스터 파리 쥰마이다이긴죠 금상 수상"],
          },
          {
            image: "/나가노 메이죠/2.jpg",
            name: "쥰마이긴죠 모모이로 잉꼬",
            abv: "16%",
            description:
              "레드와인에 견줄만한 중후한 맛과 산미 그리고 마치 스카치 위스키와 훈제치즈 같은 향이 어우러지며 와인과 같은 개성 만점의 달콤, 농후한 맛의 사케입니다.",
          },
          {
            image: "/나가노 메이죠/3.jpg",
            name: "쥰마이긴죠 키세키레이 무로카나마겐슈",
            abv: "15.6%",
            description:
              "입안에 가득 퍼지는 달콤함과 산미가 마치 레몬과 같은 상쾌함이 특징인 무로카나마겐슈 입니다.",
          },
          {
            image: "/나가노 메이죠/4.jpg",
            name: "쥰마이긴죠 키세키키레이",
            abv: "15%",
            description:
              "포도와 같은 상쾌한 산미를 내기 위해 백누룩을 사용하여, 새콤달콤한 화이트 와인과 같은 맛을 내었습니다",
          },
          {
            image: "/나가노 메이죠/5.jpg",
            name: "쥰마이긴죠 타나다 시보리타테",
            abv: "15%",
            description:
              "사과, 또는 오렌지를 연상시키는 후루티한 향기와 품격 높은 부드러움과 감칠맛을 잘 표현 하였습니다.",
          },
        ],
      },
    },
    {
      id: "F05",
      name: "키노에네",
      details: {
        region_name: "치바",
        history:
          "도 시대부터 사케와 발효 식품을 함께 만들어온 치바현의 유서 깊은 곳입니다.",
        features:
          "산뜻한 향과 균형 잡힌 맛을 지향하며 일상 식탁에 곁들이기 좋은 사케를 생산합니다.",
        official_site: "",
        type: "sake",
        tags: ["니혼SAKE"],
        products: [
          {
            image: "/키노에네/1.jpg",
            name: "키노에네 쥰마이 우마카라 미가키하치와리",
            abv: "15%",
            description:
              "치바현 산 후사노코가네를 정미율 80%까지 억제하여 쌀 본래의 맛을 최대한 이끌어 낸 쥰마이슈 입니다.",
            awards: [
              "2022 KURAMASTER상 수상",
              "와인글라스로 마시는 니혼슈어어드2021 금상수상",
              "전국 칸슈 컨텍스트 2021 금상수상",
            ],
          },
          {
            image: "/키노에네/2.jpg",
            name: "키노에네 하나야카 타카미노카오리 쥰마이긴죠",
            abv: "16%",
            description:
              "기존의 히이레(열처리)방식과 달리, 1차 히이레 공정후 병입하는[퍼스터라이더] 제조 기술을 채택한 사케입니다. 따라서, 히이레 사케이지만 나마사케 이상의 미탄산, 상쾌함을 느낄 수 있습니다",
            awards: [
              "2022 쿠라마스터 프라치나상 수상",
              "와인글라스로 마시는 사케어워드 2022 금상",
            ],
          },
          {
            image: "/키노에네/3.jpg",
            name: "시스이노요아케 쥰마이다이긴죠 生",
            abv: "16%",
            description:
              "투명하고 깨끗한 이미지 속 복숭아를 연상케하는 기분 좋은 향미와 매끈한 달콤함, 선명한 산미의 조화가 특징입니다.",
          },
          {
            image: "/키노에네/4.jpg",
            name: "키노에네 아키아가리",
            abv: "15%",
            description:
              "후레쉬한 산미, 화려한 긴죠향의 절묘한 밸런스를 살리며, 여름 한 철 동안 숙성시켜 만든 가을 한정주 입니다.",
          },
        ],
      },
    },
    {
      id: "F06",
      name: "나카이도",
      details: {
        region_name: "오이타",
        history:
          "지역산 보리와 지하수를 사용하여 전통적인 보리 소주를 생산해 왔습니다.",
        features:
          "구수한 곡물 향과 부드러운 목넘김이 특징인 깔끔한 스타일의 보리 소주입니다.",
        official_site: "",
        type: "shochu",
        tags: ["니혼SAKE"],
        products: [
          {
            image: "/니카이도/1.jpg",
            name: "니카이도",
            abv: "25%",
            description:
              "엄선된 보리 100%에 자연수를 사용하여 감압증류기에서 만들어낸 소주로, 풍부한 향과 부드러운 느낌이 뛰어난 상품입니다.",
          },
          {
            image: "/니카이도/2.jpg",
            name: "니카이도 킷쵸무 25도 병",
            abv: "25%",
            description:
              "충분하게 숙성시켜 향을 중요시한 최고급품 보리소주입니다.",
          },
        ],
      },
    },
    {
      id: "F07",
      name: "갓산",
      details: {
        region_name: "시마네",
        history:
          "1826년 설립, 일본 100대 명수로 꼽히는 시마네현 야에가키의 물을 사용합니다.",
        features:
          "녹은 눈처럼 맑고 깨끗한 주질과 은은한 단맛이 담백한 요리와 잘 어울립니다.",
        official_site: "https://gassan-sake.co.jp",
        type: "sake",
        tags: ["시마네", "초연수", "부드러움"],
        flavor: "amaguchi",
        products: [
          {
            name: "갓산 쥰마이긴죠 나카도리지카구미 生",
            abv: "16%",
            description:
              "시마네현 현지의 사카마이 「사카니시키」를 55%까지 깎아내어 기품있고 부드러운 촉감과 확실한 감칠맛을 느낄 수 있습니다.",
            awards: ["Sake Competition 2019 은상"],
          },
          {
            name: "갓산 호우준카라구치쥰마이 시보리타테 무로카나마겐슈 生",
            abv: "15%",
            description:
              "쌀의 감칠맛을 충분히 자아낸 향기로운 사케를 컨셉으로 고햐쿠만고쿠를 원료로 만들어진 카라구치 사케입니다.",
          },
          {
            name: "갓산 토쿠베츠 쥰마이",
            abv: "15%",
            description:
              "샤인머스켓,멜론과 같은 상쾌한 과일을 연상시키는 깔끔하고 담려한 향과 산미의 조화가 훌륭합니다.",
          },
          {
            name: "갓산 토쿠베츠 쥰마이 이즈모",
            abv: "15%",
            description:
              "“사케가 이렇게까지 부드러울 수 있을까” 놀라울 정도로 미끄러지듯 입안에 녹아 듭니다. 화려한 향기와 부드러움이 갓산의 자부심입니다.",
            awards: [
              "와인글라스로 맛있는 사케 금상 수상",
              "KURA MASTER 2022 플라티나상 수상",
            ],
          },
        ],
      },
    },
    {
      id: "F08",
      name: "베니오토메",
      details: {
        region_name: "후쿠오카",
        history:
          "1970년대 세계 최초로 참깨를 주원료로 한 증류주를 상업화한 혁신적 증류소입니다.",
        features:
          "볶은 참깨 특유의 고소한 향과 바닐라 같은 여운이 남는 독창적인 소주입니다.",
        official_site: "",
        type: "shochu",
        tags: ["참깨소주", "고소함", "세계최초", "니혼SAKE"],
        flavor: "balance",
        products: [
          {
            image: "/베니오토메/1.jpg",
            name: "캇파 큐센보우(와인효모)",
            abv: "25%",
            description:
              "완전히 익은 서양배나 머스캣 같은 향과 부드러운 상쾌한 목넘김이 특징입니다.",
          },
          {
            image: "/베니오토메/2.jpg",
            name: "캇파 큐센보우혼류",
            abv: "25%",
            description:
              "기분 좋은 긴죠향에 깔끔한 뒷 맛을 느낄 수 있습니다. 청량감있는 병 색깔과 어울리는 부드러운 목 넘김이 기분 좋은 보리소주입니다.",
          },
          {
            image: "/베니오토메/3.jpg",
            name: "베니오토메 STANDARD25 에구치히사시 VERSION",
            abv: "25%",
            description:
              "부드러운 참깨향과 깔끔한 첫 느낌이 과연 일품 이라는 평가가 자연스러운 쇼츄입니다.",
          },
          {
            image: "/베니오토메/4.jpg",
            name: "크롭엔크롭 쿠로 고마 리큐르",
            abv: "18%",
            description:
              "참깨소주에 흑참깨를 으깨어 용해시켜 고소하고 달콤한 흑참깨의 본성을 살린 농후한 맛입니다.",
          },
        ],
      },
    },
    {
      id: "F09",
      name: "하쿠시카",
      details: {
        region_name: "효고(나다)",
        history:
          "에도 시대부터 이어진 전통을 바탕으로 나다 사케 문화를 알리는 효고현의 대표 양조장입니다.",
        features:
          "힘 있고 드라이한 주질을 중심으로 일상에서 프리미엄까지 폭넓은 라인업을 갖췄습니다.",
        official_site: "https://www.hakushika.co.jp/en/",
        type: "sake",
        tags: ["나다", "전통", "클래식", "니혼SAKE"],
        flavor: "karaguchi",
        products: [
          {
            name: "토쿠베츠 혼죠조 키쥬로",
            abv: "14~15%",
            description:
              "긴죠슈를 25% 블랜드하여 상쾌한 향과 풍부하고 깔끔한 맛을 즐길 수 있는 질리지 않는 카라쿠치 사케입니다.",
          },
          {
            name: "쿠로마츠 하쿠시카 쥰마이 다이긴죠",
            abv: "16.5%",
            description:
              "상쾌한 향, 부드러운 감칠맛으로 익은 과일의 풍성한 향기가 느껴지는 매력적인 사케입니다.",
          },
          {
            name: "하쿠시카 호화 쥰마이다이긴죠 센넨주",
            abv: "15~16%",
            description:
              "야마다니시키 등의 주미를 장시간에 걸쳐 50%까지 깎아내어 미야미즈로 빚어낸 사케로, 과일과도 같은 산뜻한 긴죠향과 부드러움에 깊이있는 맛까지 연출해 냅니다.",
          },
          {
            name: "하쿠시카 야마다니시키 카라구치 쥰마이 실크",
            abv: "14~15%",
            description:
              "최고급 주조미 야마다니시키의 감칠맛을 살려 실크와도 같은 부드러운 첫맛과 화사히 퍼지는 감칠맛, 고급스럽게 여운이 남는 카라구치 본연의 이미지를 최대한 살린 특별쥰마이슈입니다.",
          },
          {
            name: "하쿠시카 시보리타테",
            abv: "14~15%",
            description:
              "사케의 계절이 왔음을 알리는 시보리타테 가을.겨울 한정 사케입니다.후레쉬함과 상쾌한 향기,약간의 달콤함이 계절 음식에 적합한 가성비 탑인 사케입니다.",
            awards: ["2020 런던 사케 챌린지 은상 수상"],
          },
        ],
      },
    },
    {
      id: "F10",
      name: "하나노마이",
      details: {
        region_name: "시즈오카",
        history:
          "시즈오카현 하마마쓰 인근의 양조장으로 지역의 깨끗한 수자원을 적극 활용합니다.",
        features:
          "부드러운 꽃향과 멜론 계열의 은은한 과실 향이 맑은 물맛과 조화를 이룹니다.",
        official_site: "https://www.hananomai.co.jp",
        type: "sake",
        tags: ["시즈오카", "와인효모", "청량감", "니혼SAKE"],
        flavor: "balance",
        products: [
          {
            image: "/하나노마이/1.jpg",
            name: "하나노마이 쥰마이긴죠슈",
            abv: "14.5%",
            description:
              "시즈오카산 야마다니시키를 100% 사용한 고급 사케로, 마시기 쉬운 쥰마이긴죠슈입니다. 일본요리, 서양요리 모두 잘 어울려 식사주로 적합합니다.",
          },
          {
            image: "/하나노마이/2.jpg",
            name: "하나노마이쥰마이긴죠 카타나",
            abv: "16%",
            description:
              "쥰마이슈를 보다 더 담려(淡麗）하게 만들기 위해서 담금(仕込み)기간을 본래보다 길게 잡고 천천히 알코올를 추출하였습니다.카라구치이지만, 부드럽고 깨끗한 술로 완성되고 있습니다.",
          },
          {
            image: "/하나노마이/3.jpg",
            name: "하나노마이 스파클링",
            abv: "12%",
            description:
              "하나노마이와 프랑스 브르고뉴의 도멘 비조가 합작한 궁극의 스파클링 사케입니다. 라임과 같은 향기와 섬세하고 청명한 탄산감이 잡미를 잡아줍니다.",
          },
          {
            image: "/하나노마이/4.jpg",
            name: "쥰마이긴죠 AKANE(아카네)",
            abv: "16%",
            description:
              "시즈오카 출신의 세계적인 음악가 DJ. OKAWARI의 신곡 Akane와 시즈오카를 대표하는 하나노마이 주조의 콜라보입니다.",
          },
        ],
      },
    },
    {
      id: "F11",
      name: "닷사이블루",
      details: {
        region_name: "미국 뉴욕",
        history:
          "일본 닷사이(아사히주조)가 뉴욕 하이드파크에 설립한 해외 양조장 브랜드입니다.",
        features:
          "닷사이의 클린한 스타일에 현지 물 특성을 반영한 선명한 산미가 특징입니다.",
        official_site: "https://dassai.com",
        type: "sake",
        tags: ["뉴욕양조", "닷사이", "글로벌"],
        flavor: "amaguchi",
        products: [
          {
            image: "/닷사이블루/1.jpg",
            name: "닷사이 블루 타입 23",
            abv: "14%",
            description:
              "최고 품질의 준마이 다이긴조만을 만든다는 이념을 상징하는 존재로서,「DASSAI BLUE Type 23」은 브랜드의 플래그십 사케입니다. 최고급 야마다니시키를 정미율 23%까지 깎아내고, 허드슨 밸리의 물이 지닌 개성을 살려 뉴욕 특유의 깊이 있고 만족감 있는 맛으로 완성했습니다. 향은 아니스, 서양배, 마시멜로의 복합적인 아로마에서 시작해 레몬 쉬폰과 허니서클, 스톤프루트로 확장되며, 은은한 미네랄감이 조화를 이룹니다.",
          },
          {
            image: "/닷사이블루/2.jpg",
            name: "닷사이 블루 타입 35",
            abv: "14%",
            description:
              "일본에서 야마다니시키 종자를 수출하여 Isbell Farm과 함께 4년에 걸쳐 재배함으로써 탄생한 「DASSAI BLUE Type 35」는, 허드슨 밸리의 물과 아칸소산 쌀을 사용한 미국산 사케에 대한 강한 집념을 구현한 제품입니다. 백도와 완숙 파파야를 연상시키는 부드럽고 달콤한 향이 퍼지며, 맛은 온화한 단맛과 산뜻한 산미가 특징입니다.",
          },
          {
            image: "/닷사이블루/3.jpg",
            name: "닷사이 블루 타입 50",
            abv: "14%",
            description:
              "Type 50은 야마다니시키의 다양성뿐만 아니라 DASSAI BLUE의 뛰어난 양조 기술을 표현하기 위해, 3가지 사양으로 병입되었습니다. 향은 리코리스와 칸탈루프 멜론에서 시작해 파인애플 캔디, 레몬 커드, 바닐라로 확장되며, 여운에는 은은한 짠맛이 느껴집니다.",
          },
          {
            image: "/닷사이블루/4.jpg",
            name: "닷사이 블루 타입 50 드라이(Dry)",
            abv: "14%",
            description:
              "Type 50 Dry는 일반 Type 50보다 드라이함과 깔끔한 피니시를 강조한 설계로, 단맛을 줄이고 샤프하고 경쾌한 음용감을 특징으로 합니다. 향은 리코리스와 칸탈루프 멜론에서 시작해 파인애플 캔디, 레몬 커드, 바닐라로 이어지며, 여운에는 은은한 짠맛이 느껴집니다.",
          },
        ],
      },
    },
    {
      id: "F12",
      name: "치요무스비",
      details: {
        region_name: "돗토리",
        history:
          "돗토리현 사카이미나토에서 메이지 시대부터 사케와 소주를 함께 생산해 왔습니다.",
        features:
          "해안 지역 특유의 산뜻한 드라이함과 실험적인 발포성 사케 등이 유명합니다.",
        official_site: "https://www.chiyomusubi.co.jp",
        type: "sake",
        tags: ["돗토리", "스파클링", "인연"],
        flavor: "balance",
      },
    },
    {
      id: "F13",
      name: "쿠로우시",
      details: {
        region_name: "와카야마",
        history:
          "와카야마현 헤이와주조가 1866년 창업 이후 생산해 온 대표 사케 브랜드입니다.",
        features:
          "쌀의 두터운 감칠맛과 적당한 산미를 살린 범용성 높은 준마이 스타일입니다.",
        official_site: "https://www.heiwa-shuzou.co.jp",
        type: "sake",
        tags: ["와카야마", "감칠맛", "식중주"],
        flavor: "balance",
      },
    },
    {
      id: "F14",
      name: "하나가키",
      details: {
        region_name: "후쿠이",
        history:
          "1733년 창업, 에치젠 오노의 명수와 지역 쌀을 사용하여 정성껏 술을 빚는 전통 명가입니다.",
        features:
          "쌀의 감칠맛을 살리면서도 깔끔하게 떨어지는 전형적인 식중주 스타일입니다.",
        type: "sake",
        flavor: "balance",
      },
    },
    {
      id: "F15",
      name: "시치다",
      details: {
        region_name: "사가",
        history:
          "사가현 텐잔주조가 설립된 이후 무여과 생 원주 스타일로 큰 인기를 얻은 브랜드입니다.",
        features:
          "여과를 최소화하여 쌀의 농밀한 풍미와 볼륨감이 강하게 느껴지는 주질이 특징입니다.",
        official_site: "",
        type: "sake",
        tags: ["사가", "모던", "풍부함"],
        flavor: "balance",
        products: [
          { name: "마츠모네 CLASSIC 90" },
          { name: "마츠모네 CORE 60" },
          { name: "마츠모네 ID-series K" },
          { name: "마츠모네 ID-series W" },
        ],
      },
    },
    {
      id: "F16",
      name: "죠키겐",
      details: {
        region_name: "이시카와",
        history:
          "19세기부터 지역의 물을 사용하여 정성껏 사케를 빚어온 이시카와현의 양조장입니다.",
        features:
          "깔끔한 향과 균형 잡힌 맛을 지향하는 전형적인 식중주 스타일입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "F17",
      name: "이요카기야",
      details: {
        region_name: "에히메",
        history:
          "에히메현의 소규모 양조장으로 시코쿠 지역의 자원을 활용해 가족 경영을 이어왔습니다.",
        features:
          "가벼운 산미와 부드러운 단맛이 특징인 산뜻한 주질의 사케입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "F18",
      name: "카쿠레이",
      details: {
        region_name: "니가타",
        history:
          "니가타현 설산 지역의 지하수를 사용하여 정통 니가타 사케를 빚습니다.",
        features:
          "단맛을 억제하고 깨끗하게 떨어지는 니가타 탄레이 카라쿠치 스타일의 정석입니다.",
        official_site: "https://www.kakurei.co.jp",
        type: "sake",
      },
    },
    {
      id: "F19",
      name: "카이운",
      details: {
        region_name: "시즈오카",
        history:
          "시즈오카현에서 메이지 시대 설립되었으며 ‘행운을 연다’는 길조의 의미를 담고 있습니다.",
        features:
          "향과 맛의 밸런스가 좋고, 깔끔한 피니시 뒤에 남는 우아한 단맛이 인상적입니다.",
        official_site: "https://www.kaiunsake.co.jp",
        type: "sake",
        tags: ["시즈오카", "길조", "청량함"],
        flavor: "karaguchi",
      },
    },
    {
      id: "F20",
      name: "아야키쿠",
      details: {
        region_name: "카가와",
        history:
          "에도 말기 카가와현에서 설립되어 지역 쌀을 이용한 양조를 이어온 곳입니다.",
        features:
          "시코쿠 쌀의 부드러운 감칠맛과 담백한 끝맛이 어우러진 식중주 스타일입니다.",
        official_site: "",
        type: "sake",
      },
    },
  ],
  G: [
    {
      id: "G01",
      name: "일로사케",
      details: {
        region_name: "큐레이션",
        history:
          "일본 각지의 우수한 사케를 한국에 소개하며 여러 양조장과 파트너십을 맺고 있습니다.",
        features:
          "다양한 지역과 스타일의 사케를 선별하여 소개하는 플랫폼적인 성격이 강합니다.",
        official_site: "",
        type: "other",
      },
    },
    {
      id: "G02",
      name: "호오비덴",
      details: {
        region_name: "토치기",
        history:
          "1872년 창업, 니코 산맥의 지하수와 지역 쌀을 사용하여 양조합니다.",
        features:
          "멜론이나 머스캣을 연상시키는 화려한 향과 풍부한 단맛이 돋보이는 모던 사케입니다.",
        official_site: "https://hououbiden.jp",
        type: "sake",
        tags: ["화사함", "인기주", "토치기"],
        flavor: "amaguchi",
        products: [
          { name: "호오비덴 준마이다이긴죠 아카반" },
          { name: "호오비덴 츠루기" },
        ],
      },
    },
    {
      id: "G03",
      name: "카메노우미",
      details: {
        region_name: "나가노",
        history:
          "나가노현의 산악 지대에서 깨끗한 물과 지역 쌀을 바탕으로 양조하는 소규모 브랜드입니다.",
        features:
          "부드러운 과실 향과 둥근 산미를 가진 편안하고 세련된 모던 사케가 중심입니다.",
        official_site: "",
        type: "sake",
        products: [{ name: "카메노우미 우마구치 준마이" }],
      },
    },
    {
      id: "G04",
      name: "미코츠루",
      details: {
        region_name: "나가노",
        history:
          "현대의 젊은 감각을 사케에 투영하여 새로운 스타일을 전개하는 나가노의 양조장입니다.",
        features:
          "화사한 향과 산뜻한 산미가 차갑게 마셨을 때 더욱 돋보이는 모던 스타일입니다.",
        official_site: "",
        type: "sake",
        products: [
          { name: "나루노나마 칼파 쥰마이다이긴죠" },
          { name: "나루노나마 칼파 쥰마이긴죠" },
          { name: "나루노나마 토쿠베츠쥰마이 시보리타테" },
        ],
      },
    },
    {
      id: "G05",
      name: "킷도,츠루우메",
      details: {
        region_name: "와카야마",
        history:
          "와카야마현 헤이와주조의 브랜드로 사케 '킷도'와 리큐르 '츠루우메'를 전개합니다.",
        features:
          "경쾌한 사케와 실제 유자 과즙을 듬뿍 사용한 상큼한 리큐르가 특징입니다.",
        type: "sake",
        tags: ["와카야마", "젊은감각", "매실주"],
        flavor: "amaguchi",
        official_site: "",
      },
    },
    { id: "G06", name: "일로사케" },
    {
      id: "G07",
      name: "이와노이",
      details: {
        region_name: "치바",
        history:
          "치바현 해안가 인근 환경에서 미네랄감 있는 사케를 빚온 양조장입니다.",
        features:
          "해산물과 잘 어울리도록 깨끗하고 산뜻한 산미를 살린 주질을 지향합니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "G08",
      name: "자쿠",
      details: {
        region_name: "미에",
        history:
          "미에현 스즈카에서 1869년 설립, G7 서밋 건배주로 선정되어 세계적 주목을 받았습니다.",
        features:
          "투명한 과실 향과 정교한 단맛·산미의 조화가 세련된 인상을 주는 모던 명작입니다.",
        official_site: "https://www.shimizu-seizaburo.jp",
        type: "sake",
        tags: ["G7공식주", "우아함", "미에"],
        flavor: "amaguchi",
        products: [
          { name: "쇼호 쥰마이긴죠37" },
          { name: "쇼호 쥰마" },
          { name: "이리초 준마이긴죠" },
          { name: "코토바카리이와레테키테(사와야마츠모토)" },
        ],
      },
    },
    {
      id: "G09",
      name: "햐쿠쥬로",
      details: {
        region_name: "기후",
        history:
          "가부키 배우의 이름에서 따온 강렬한 이미지로 브랜드를 전개하는 기후현의 양조장입니다.",
        features:
          "붉은 가부키 마스크 레이블처럼 향과 바디감이 강렬한 존재감 있는 스타일입니다.",
        official_site: "https://hyakujuro-sake.com",
        type: "sake",
        tags: ["가부키", "강렬함", "기후"],
        flavor: "karaguchi",
        products: [
          { name: "반쇼잇코" },
          { name: "하야시호텐" },
          { name: "기타무로가와쵸" },
          { name: "유즈슈" },
        ],
      },
    },
    {
      id: "G10",
      name: "아카루이노우손",
      details: {
        region_name: "가고시마",
        history:
          "‘밝은 농촌’이라는 이름으로 지역 농업과의 연결을 강조하는 고구마 소주 명가입니다.",
        features:
          "고구마의 구수함에 부드러움을 더해 마시기 편한 밝은 이미지를 구현했습니다.",
        official_site: "",
        type: "shochu",
      },
    },
    {
      id: "G11",
      name: "크래프츠맨타다",
      details: {
        region_name: "후쿠오카",
        history:
          "전통 보리 소주를 현대적 감각으로 재해석하여 전개하는 후쿠오카의 브랜드입니다.",
        features:
          "보리의 고소함을 세련되게 다듬어 위스키처럼 즐길 수 있는 모던 소주입니다.",
        official_site: "",
        type: "shochu",
      },
    },
    {
      id: "G12",
      name: "미치자쿠라",
      details: {
        region_name: "야마가타",
        history:
          "벚꽃의 이미지를 담아 산뜻하고 마시기 쉬운 사케를 목표로 하는 야마가타의 브랜드입니다.",
        features:
          "은은한 꽃향과 부드러운 단맛이 일품인 봄날 같은 사케를 선보입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "G13",
      name: "라이후쿠",
      details: {
        region_name: "이바라키",
        history:
          "1716년 창업, 딸기나 해바라기 등 다양한 꽃에서 분리한 꽃 효모를 사용하는 것으로 유명합니다.",
        features:
          "꽃 효모 특유의 다채롭고 신선한 향이 화사하게 표현된 사케입니다.",
        official_site: "https://www.raifuku.co.jp",
        type: "sake",
        tags: ["꽃효모", "다채로움", "이바라키"],
        flavor: "amaguchi",
      },
    },
    {
      id: "G14",
      name: "이즈모후지",
      details: {
        region_name: "시마네",
        history:
          "신들의 고향 시마네현 이즈모에서 19세기부터 사케를 빚온 지역 브랜드입니다.",
        features:
          "일본주 특유의 은은한 감칠맛과 부드러운 단맛을 살린 차분한 식중주 스타일입니다.",
        official_site: "https://www.izumofuji.co.jp",
        type: "sake",
        tags: ["이즈모", "수작업", "전통"],
        flavor: "amaguchi",
      },
    },
    {
      id: "G15",
      name: "하쿠라쿠세이",
      details: {
        region_name: "미야기",
        history:
          "1873년 설립된 니이자와주조의 브랜드로 ‘궁극의 식중주’라는 독보적인 모토를 가졌습니다.",
        features:
          "향이 과하지 않고 음식의 맛을 완벽하게 뒷받침하도록 설계된 매우 깨끗한 주질입니다.",
        official_site: "",
        type: "sake",
        tags: ["궁극의식중주", "미야기", "깔끔함"],
        flavor: "karaguchi",
      },
    },
    {
      id: "G16",
      name: "에시칼스피리츠",
      details: {
        region_name: "혁신증류",
        history:
          "사케 술지게미를 재활용하는 업사이클 콘셉트의 젊은 증류 프로젝트입니다.",
        features:
          "술지게미의 풍미에 각종 보태니컬을 더한 개성적인 크래프트 진을 생산합니다.",
        official_site: "",
        type: "other",
      },
    },
    {
      id: "G17",
      name: "긴자노스즈메",
      details: {
        region_name: "오이타",
        history:
          "세련된 디자인과 대중적인 맛으로 입문자에게도 사랑받는 보리 소주 브랜드입니다.",
        features:
          "부드럽고 깔끔한 맛 덕분에 일상에서 편하게 즐기기 좋은 정석적인 보리 소주입니다.",
        official_site: "https://kumesen.co.jp",
        type: "shochu",
      },
    },
    {
      id: "G18",
      name: "사케노카마쿠라",
      details: {
        region_name: "큐레이션",
        history:
          "다양한 양조장의 우수한 제품들을 테마별로 큐레이션해 소개하는 편집숍형 브랜드입니다.",
        features:
          "전국 각지의 숨은 명주를 한자리에서 제안하는 다양성이 특징입니다.",
        official_site: "",
        type: "other",
      },
    },
    {
      id: "G19",
      name: "사츠마무소",
      details: {
        region_name: "가고시마",
        history:
          "가고시마현에서 1950년대 설립되어 사츠마 고구마 소주를 대표하는 브랜드 중 하나입니다.",
        features:
          "깊은 단맛과 묵직한 바디감을 가진 정통 스타일로 뜨겁게 마실 때 맛이 더욱 살아납니다.",
        official_site: "",
        type: "shochu",
        tags: ["가고시마", "고구마소주", "전통숙성"],
        flavor: "balance",
      },
    },
    {
      id: "G20",
      name: "류카",
      details: {
        region_name: "오키나와",
        history:
          "남국 오키나와의 기후와 재료를 살려 강렬하고 존재감 있는 증류주를 만듭니다.",
        features:
          "향기롭고 깊은 맛을 가진 증류주가 많아 칵테일 베이스로도 훌륭합니다.",
        official_site: "",
        type: "other",
      },
    },
  ],
  H: [
    {
      id: "H01",
      name: "유키노비진",
      details: {
        region_name: "아키타",
        history:
          "도심 빌딩 내에서 사계절 양조를 수행하며 온도 관리에 철저한 신생 양조장입니다.",
        features:
          "잡미 없이 맑고 날카롭게 떨어지는 피니시가 돋보이는 깨끗한 주질이 특징입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "H02",
      name: "야마모토",
      details: {
        region_name: "아키타",
        history:
          "1901년 창업, 모던한 디자인과 화이트 와인 같은 상큼한 맛으로 인기를 얻은 아키타 명가입니다.",
        features:
          "세련된 산미와 깨끗한 과실 향이 돋보이는 ‘블랙 라벨’ 시리즈가 상징적입니다.",
        official_site: "https://www.yamamoto-jizake.co.jp",
        type: "sake",
        tags: ["아키타", "혁신", "산미"],
        flavor: "balance",
      },
    },
    {
      id: "H03",
      name: "야마가타마사무네",
      details: {
        region_name: "야마가타",
        history:
          "1898년 설립, 명검 ‘마사무네’처럼 날렵하게 끊어지는 주질을 추구합니다.",
        features:
          "단단한 뼈대와 드라이한 맛이 매력적인 정통파 사케의 면모를 보여줍니다.",
        official_site: "",
        type: "sake",
        tags: ["야마가타", "경수", "샤프함"],
        flavor: "karaguchi",
      },
    },
    {
      id: "H04",
      name: "벤텐",
      details: {
        region_name: "야마가타",
        history:
          "여신의 이름을 딴 브랜드로, 우아하고 섬세한 인상을 주는 사케를 지향합니다.",
        features:
          "부드러운 단맛과 여성적인 향미가 어우러진 우아한 스타일의 사케가 많습니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "H05",
      name: "가산류",
      details: {
        region_name: "야마가타",
        history:
          "자연의 이미지를 담은 이름처럼 상쾌하고 경쾌한 주질을 목표로 하는 브랜드입니다.",
        features:
          "산뜻한 산미와 맑은 향을 가진 모던 사케로 부담 없이 즐기기 좋은 스타일입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "H06",
      name: "타카",
      details: {
        region_name: "야마구치",
        history:
          "젊은 양조 팀이 운영하며 쌀의 쌉쌀함과 탄탄한 바디감을 강조하는 모던 브랜드입니다.",
        features:
          "단맛을 억제하고 드라이한 맛을 전면에 내세워 차별화된 개성을 보여줍니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "H07",
      name: "미요시",
      details: {
        region_name: "서일본",
        history:
          "소규모 양조장들이 가족 경영을 통해 정성껏 빚어내는 지역 밀착형 브랜드입니다.",
        features:
          "부드러운 단맛과 산미를 가진 전형적인 식중주 스타일의 사케가 중심입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "H08",
      name: "간기",
      details: {
        region_name: "야마구치",
        history:
          "숯 여과를 하지 않는 무여과 방식을 고수하여 쌀의 생동감을 전달하는 양조장입니다.",
        features:
          "여과를 최소화하여 쌀 본연의 질감과 깊은 감칠맛을 그대로 느낄 수 있는 주질입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "H09",
      name: "우라자토",
      details: {
        region_name: "모던양조",
        history:
          "내추럴 와인 같은 감성의 젊은 양조가들이 이끄는 모던 사케 브랜드입니다.",
        features:
          "상큼한 과실 향과 가벼운 바디로 사케 입문자도 편안하게 즐길 수 있는 맛입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "H10",
      name: "쿠메지마노쿠메센",
      details: {
        region_name: "오키나와",
        history:
          "쿠메섬의 맑은 물과 전통 흑국균을 사용하여 깊은 아와모리를 빚는 양조장입니다.",
        features:
          "구수한 향과 묵직한 맛부터 오크통 숙성 스타일까지 폭넓은 아와모리를 선보입니다.",
        official_site: "",
        type: "awamori",
        tags: ["오키나와", "아와모리", "숙성주"],
        flavor: "balance",
      },
    },
    {
      id: "H11",
      name: "슈호",
      details: {
        region_name: "야마가타",
        history:
          "지역의 쌀과 물을 활용해 멜론이나 바나나 같은 화사한 향을 구현하는 양조장입니다.",
        features:
          "상쾌한 산미와 입안 가득 퍼지는 꽃향기가 일품인 화려한 스타일의 사케입니다.",
        official_site: "https://www.akahoshi-shuzo.co.jp",
        type: "sake",
        tags: ["야마가타", "화려함", "프리미엄"],
        flavor: "amaguchi",
      },
    },
    {
      id: "H12",
      name: "록카센",
      details: {
        region_name: "야마가타",
        history:
          "전통을 현대적으로 재해석하여 누구나 좋아할 만한 깔끔한 기획 사케를 선보입니다.",
        features:
          "스파클링 사케 등 다양한 시도를 통해 산뜻하고 현대적인 맛의 스펙트럼을 제공합니다.",
        official_site: "https://rokkasen.co.jp",
        type: "sake",
        tags: ["야마가타", "대중적", "깔끔함"],
        flavor: "balance",
      },
    },
    {
      id: "H13",
      name: "토우코우",
      details: {
        region_name: "야마가타",
        history:
          "1597년 창업, 우에스기 가문의 어용주를 만들던 품위 있는 역사를 가진 양조장입니다.",
        features:
          "쌀의 깊은 맛과 균형 잡힌 산미가 어우러진 격식 있는 정통파 주질이 특징입니다.",
        official_site: "",
        type: "sake",
        tags: ["야마가타", "역사적", "깊은맛"],
        flavor: "balance",
      },
    },
    {
      id: "H14",
      name: "이노센트",
      details: {
        region_name: "혁신브랜드",
        history:
          "내추럴·와일드 발효의 이미지를 담은 최근 등장한 실험적인 브랜드입니다.",
        features:
          "산미와 개성적인 향을 과감하게 드러내어 칵테일처럼 즐길 수 있는 유니크함이 특징입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "H15",
      name: "아카부",
      details: {
        region_name: "이와테",
        history:
          "젊은 토지를 중심으로 부활하여 쥬시한 과실 향으로 화제가 된 이와테의 신성입니다.",
        features:
          "강렬한 생동감과 현대적인 산미·단맛의 밸런스가 뛰어난 모던 사케입니다.",
        official_site: "",
        type: "sake",
        tags: ["이와테", "부활", "젊은감각"],
        flavor: "amaguchi",
      },
    },
    {
      id: "H16",
      name: "야마니쿠모가",
      details: {
        region_name: "신세대양조",
        history:
          "실험적인 제법을 시도하는 젊은 세대의 브랜드로 매니아층을 타깃으로 합니다.",
        features:
          "산미와 개성이 강해 독특한 사케 경험을 찾는 이들에게 어울리는 주질입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "H17",
      name: "아키토라",
      details: {
        region_name: "고치",
        history:
          "고치의 해산물 요리와 밸런스를 맞추기 위해 탄생한 드라이 사케 브랜드입니다.",
        features:
          "강한 산미와 드라이한 맛으로 진한 요리와 함께 마셔도 훌륭한 식중주입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "H18",
      name: "코우치현",
      details: {
        region_name: "지역홍보",
        history:
          "고치현의 우수한 사케 문화를 알리는 홍보 거점으로 다양한 지역주를 소개합니다.",
        features:
          "산뜻하고 드라이한 고치 특유의 해산물 친화형 사케들을 한자리에서 만날 수 있습니다.",
        official_site: "",
        type: "other",
      },
    },
    {
      id: "H19",
      name: "토요노우메",
      details: {
        region_name: "리큐르",
        history: "지역 과일의 신선함을 담아내는 리큐르 전문 브랜드입니다.",
        features:
          "상큼한 산미와 기분 좋은 단맛이 특징인 입가심용으로 훌륭한 과실주들입니다.",
        official_site: "",
        type: "liqueur",
      },
    },
    {
      id: "H20",
      name: "카메이즈미",
      details: {
        region_name: "고치",
        history:
          "1897년 창업, 고치현의 실험적 효모 기술을 활용해 독창적인 맛을 창조합니다.",
        features:
          "트로피컬한 과실 향과 높은 산미가 디저트 와인 같은 인상을 주는 모던 사케입니다.",
        official_site: "https://kameizumi.co.jp",
        type: "sake",
        tags: ["고치", "파인애플향", "CEL24"],
        flavor: "amaguchi",
      },
    },
  ],
  J: [
    {
      id: "J01",
      name: "아즈마쵸",
      details: {
        region_name: "사가",
        history: "에도 말기 설립, 지역 밀착형 사케를 빚어온 전통 양조장.",
        features: "쌀의 단맛과 산미가 균형을 이룸.",
        official_site: "",
        type: "sake",
        flavor: "balance",
      },
    },
    {
      id: "J02",
      name: "아즈마츠루",
      details: {
        region_name: "사가",
        history:
          "20세기 초 사가현에서 설립되어 지역 쌀을 중심으로 양조를 이어온 브랜드입니다.",
        features:
          "부드러운 단맛과 온화한 향을 가진 전형적인 클래식 식중주 스타일입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "J03",
      name: "후쿠우미",
      details: {
        region_name: "기획브랜드",
        history:
          "현대적 감각의 라벨과 맛으로 젊은 층에게 어필하는 모던 사케 컨셉 레이블입니다.",
        features:
          "여러 양조장의 특색 있는 사케들을 세련되게 모아 소개하는 것이 강점입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "J04",
      name: "무소우",
      details: {
        region_name: "무소우",
        history:
          "나가노 등지의 양조장들이 ‘꿈속의 상상’이라는 모토로 재정비한 라인업입니다.",
        features:
          "과실 향과 산미를 살려 캐주얼한 안주와 즐기기 좋은 경쾌한 주질을 지녔습니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "J05",
      name: "케센토하루카",
      details: {
        region_name: "이와테",
        history: "지역 부흥을 목표로 기획된 브랜드.",
        features: "깔끔하고 산뜻한 드라이함과 가벼운 산미.",
        official_site: "",
        type: "sake",
        flavor: "karaguchi",
      },
    },
    { id: "J06", name: "일로사케 판매부스", details: COMMON_SERVICE_DETAIL },
    { id: "J09", name: "일로사케 이벤트", details: COMMON_SERVICE_DETAIL },
    {
      id: "J11",
      name: "센게츠",
      details: {
        region_name: "구마모토",
        history:
          "100년 이상 히토요시의 맑은 물로 쌀 소주를 빚어온 구마모토의 명가입니다.",
        features:
          "부드러운 목넘김과 은은한 곡물 향이 조화로운 맑은 타입의 쌀 소주입니다.",
        official_site: "",
        type: "shochu",
      },
    },
    {
      id: "J12",
      name: "소우텐덴",
      details: {
        region_name: "미야기",
        history:
          "지진 이후 지역 복구를 상징하며 해산물 궁합을 최우선으로 설계된 브랜드입니다.",
        features:
          "깔끔하고 산뜻한 드라이함이 특징인 항구 도시 미야기 특유의 주질입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "J13",
      name: "후쿠쵸",
      details: {
        region_name: "히로시마",
        history:
          "유명 양조장 이마다주조의 브랜드로 부드럽고 섬세한 긴조 스타일을 지향합니다.",
        features:
          "은은 향과 섬세한 단맛이 돋보이는 히로시마의 대표적인 모던 사케입니다.",
        official_site: "https://www.imada.jp",
        type: "sake",
        flavor: "amaguchi",
      },
    },
    {
      id: "J14",
      name: "고젠슈",
      details: {
        region_name: "오카야마",
        history:
          "전통 제법과 오마치 쌀 100% 사용으로 요구르트 같은 개성적 산미를 선사합니다.",
        features:
          "독특한 젖산 산미와 깊은 풍미가 어우러진 오카야마의 명물 사케입니다.",
        official_site: "https://www.gozenshu.co.jp",
        type: "sake",
        flavor: "karaguchi",
      },
    },
    {
      id: "J15",
      name: "타이쇼노츠루",
      details: {
        region_name: "오카야마",
        history:
          "메이지~타이쇼 시대부터 오카야마 지역에 뿌리 내린 유서 깊은 브랜드입니다.",
        features:
          "화려함보다는 쌀의 깊은 맛과 부드러운 단맛에 집중한 식중주 사케입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "J16",
      name: "츠쿠시",
      details: {
        region_name: "후쿠오카",
        history:
          "수십 년간 규슈 지역에서 큰 사랑을 받아온 후쿠오카의 정통 보리 소주입니다.",
        features:
          "보리를 구운 듯한 고소함과 스모키한 여운이 매력적인 소주입니다.",
        official_site: "",
        type: "shochu",
      },
    },
    {
      id: "J17",
      name: "시게마스",
      details: {
        region_name: "후쿠오카",
        history:
          "높은 도정비와 정성 어린 양조로 알려진 후쿠오카의 프리미엄급 브랜드입니다.",
        features:
          "잡미 없이 정갈한 주질과 섬세한 단맛이 돋보이는 고품격 사케입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "J18",
      name: "와카나미",
      details: {
        region_name: "후쿠오카",
        history:
          "젊은 양조자와 여성 토지가 이끄는 부드러운 감성의 모던 양조장입니다.",
        features:
          "부드러운 파도처럼 밀려오는 섬세한 산미와 맛의 조화가 탁월한 사케입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "J19",
      name: "키쿠비진",
      details: {
        region_name: "규슈전통",
        history:
          "20세기 초반부터 예술가들 사이에서 회자된 전통과 권위의 브랜드입니다.",
        features:
          "진중한 쌀맛과 깊은 감칠맛을 정직하게 표현한 정통파 스타일의 사케입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "J20",
      name: "리브롬",
      details: {
        region_name: "후쿠오카",
        history:
          "과일·허브 등을 활용해 실험적인 크래프트 사케를 빚는 신생 양조장입니다.",
        features:
          "전통의 틀을 깬 다채로운 재료의 조화와 신선한 맛이 특징입니다.",
        official_site: "https://www.librom.jp",
        type: "other",
        tags: ["크래프트"],
      },
    },
  ],
  K: [
    {
      id: "K01",
      name: "미요키쿠",
      details: {
        region_name: "도쿠시마",
        history:
          "실험적인 양조와 개성 강한 산미, 팝한 라벨 디자인으로 지지층이 두터운 양조장입니다.",
        features:
          "내추럴 와인과 유사한 뚜렷한 산미와 쥬시한 단맛이 특징인 모던 사케입니다.",
        official_site: "https://www.miyoshikiku.com",
        type: "sake",
        tags: ["내추럴", "산미", "개성적"],
        flavor: "amaguchi",
      },
    },
    {
      id: "K02",
      name: "카제노모리",
      details: {
        region_name: "나라",
        history: "무여과 나마(생주) 중심 양조의 선구자.",
        features: "자연 탄산과 청포도·허브 같은 상큼한 향.",
        official_site: "https://www.yucho-sake.jp",
        type: "sake",
        flavor: "amaguchi",
      },
    },
    {
      id: "K03",
      name: "유호",
      details: {
        region_name: "이시카와",
        history:
          "19세기 후반부터 이시카와현 해변가에서 해산물 맞춤형 사케를 빚어온 곳입니다.",
        features:
          "해산물과 완벽히 어우러지는 풍부한 우마미와 숙성된 산미가 일품인 식중주입니다.",
        official_site: "https://www.yuho-sake.jp",
        type: "sake",
        tags: ["이시카와", "우마미", "식중주"],
        flavor: "balance",
      },
    },
    {
      id: "K04",
      name: "코츠즈미",
      details: {
        region_name: "효고",
        history:
          "1849년 창업, 예술적인 병 디자인과 함께 품격 있는 사케 문화를 지향하는 양조장입니다.",
        features:
          "예술적인 라벨만큼이나 정교하게 조율된 부드러운 단맛과 맑은 피니시가 특징입니다.",
        official_site: "https://www.kotsuzumi.co.jp",
        type: "sake",
        tags: ["효고", "우아함", "예술적"],
        flavor: "balance",
      },
    },
    {
      id: "K05",
      name: "사와노츠루",
      details: {
        region_name: "효고",
        history: "나다를 대표하는 전통 대형 양조장.",
        features: "힘 있고 드라이한 주질이 특징.",
        official_site: "https://www.sawanotsuru.co.jp",
        type: "sake",
        flavor: "karaguchi",
      },
    },
  ],
  L: [
    {
      id: "L01",
      name: "사카야코리아 판매부스",
      details: COMMON_SERVICE_DETAIL,
    },
    {
      id: "L02",
      name: "이와테메이죠",
      details: {
        region_name: "이와테",
        history:
          "이와테현의 차가운 기후에서 지역 자원을 사용해 빚어낸 전통 사케입니다.",
        features:
          "북국의 깨끗함을 닮아 잡미가 없고 담백한 전형적인 식중주 스타일입니다.",
        official_site: "",
        type: "sake",
      },
    },
    {
      id: "L03",
      name: "CR트레이딩",
      details: {
        region_name: "수입사",
        history: "일본 주류의 해외 유통 전문사.",
        features: "다양한 양조장 브랜드를 큐레이션하여 소개.",
        official_site: "https://blog.naver.com/crtrading/80197764020",
        type: "other",
      },
    },
    { id: "L05", name: "CR트레이딩판매부스", details: COMMON_SERVICE_DETAIL },
  ],
};

// 매핑용 고유 데이터 맵
const BREWERY_MAP: Record<string, string> = {
  A01: "㈜니혼슈코리아 판매부스",
  A02: "㈜니혼슈코리아 안내부스",
  A03: "고쿠류주조",
  A04: "데와자쿠라주조",
  A05: "이시모토주조",
  A06: "코시메이조주식회사",
  A07: "이네토아가베",
  A08: "㈜니혼슈코리아",
  A09: "니혼세이슈",
  A10: "고쵸다주조",
  A11: "하츠카메양조",
  A12: "아이하라주조",
  A13: "코이즈미주조",
  A14: "후지이양조",
  B03: "이마니시주조 / 카모니시키주조 / 토요비진 / 센킨 / 오니비 / 사츠마시마비진 / 아오카게 / 고다이우메슈",
  B04: "히가주조",
  B05: "가토키치베쇼텐",
  B06: "쿠마가이주류",
  B07: "SODAWARI",
  B08: "사케노이치자",
  B09: "미이노고토부키",
  B10: "하마카와쇼텐",
  B11: "기타니시주조",
  B12: "칸코바이주조",
  B13: "지자케CY코리아",
  D01: "겐비시주조",
  D02: "나카노주조",
  D03: "이와사키주조",
  D04: "즈이죠주조",
  D05: "에미시키주조",
  D06: "혼다쇼텐",
  D07: "니혼사케",
  E01: "닷사이주조",
  E02: "샤타주조",
  E03: "가모츠루주조",
  E04: "코마사주조",
  E05: "킹양조",
  E06: "아사히주조",
  E07: "남부비진",
  E08: "오토코야마주조",
  E09: "메이리슈루이",
  E10: "다카라주조",
  E11: "센다이이사와케 카츠야마주조",
  E12: "니시노킨료",
  E13: "키타야주조 / 고쿠",
  E14: "니시주조",
  E15: "히가시주조",
  E16: "핫카이양조",
  E17: "세키야주조",
  E18: "이나타혼텐",
  E19: "사이야주조",
  E20: "후쿠치요주조",
  F01: "토코야마(죠잔)",
  F02: "우메노야도 주조",
  F03: "카네다타마다주조",
  F04: "나가노 메이죠",
  F05: "이이누마혼케",
  F06: "니카이도주조",
  F07: "요시다주조",
  F08: "베니오토메",
  F09: "타츠우마(하쿠시카)",
  F10: "하나노마이주조",
  F11: "닷사이블루",
  F12: "치요무스비주조",
  F13: "나테주조점",
  F14: "남부주조장",
  F15: "텐잔주조",
  F16: "사카타주조",
  F17: "세이료주조주식회사",
  F18: "아오키주조",
  F19: "도이주조장",
  F20: "아야키쿠주조",
  G01: "미야사카양조",
  G02: "코바야시주조",
  G03: "츠치야주조점",
  G04: "스와미코츠루 주조장",
  G05: "헤이와주조",
  G07: "이와세주조",
  G08: "시미즈 세이자부로쇼텐",
  G09: "하야시혼텐",
  G10: "키리시마쵸 증류소",
  G11: "텐파이",
  G12: "미치자쿠라주조",
  G13: "라이후쿠주조",
  G14: "후지주조",
  G15: "니이자와양조점",
  G16: "에시칼・스피리츠",
  G17: "야츠시카주조",
  G18: "사케노카마쿠라",
  G19: "사츠마무쏘",
  G20: "신자토주조",
  H01: "아키타양조",
  H02: "야마모토주조점",
  H03: "미토베주조",
  H04: "고토주조점",
  H05: "신도주조점",
  H06: "나가야마혼케주조장",
  H07: "아부노츠루주조",
  H08: "야오신주조",
  H09: "우라자토주조점",
  H10: "쿠메지마노쿠메센",
  H11: "슈호주조장",
  H12: "록카센",
  H13: "코지마소우혼텐",
  H14: "키쿠노츠카사주조",
  H15: "아카부주조",
  H16: "카와자와주조",
  H17: "아리미츠주조장",
  H19: "타카키주조",
  H20: "카메이즈미주조",
  J01: "세토주조",
  J02: "아즈마츠루주조",
  J03: "후쿠다주조",
  J04: "타이요주조",
  J05: "텐세이주조",
  J06: "일로사케 판매부스",
  J09: "일로사케 이벤트부스",
  J11: "센게츠주조",
  J12: "오토코야마혼텐",
  J13: "이마다주조혼텐",
  J14: "고젠슈 츠지혼텐",
  J15: "오치주조",
  J16: "니시요시다주조",
  J17: "타카하시쇼텐",
  J18: "와카나미주조",
  J19: "키쿠비진",
  J20: "리브롬",
  K01: "키타주조",
  K02: "유쵸주조",
  K03: "미오야주조",
  K04: "니시야마주조장",
  K05: "사와노츠루",
  L01: "사카야코리아",
  L02: "이와테메이죠",
  L03: "CR트레이딩",
  L05: "CR트레이딩",
};

// 참조 오염 방지를 위해 얕은 복사(...)를 적용한 안전한 런타임 매핑 로직
for (const section of Object.values(hall1Booths)) {
  for (const booth of section) {
    if (!booth.details) continue;

    if (BREWERY_MAP[booth.id]) {
      booth.details = {
        ...booth.details,
        brewery: BREWERY_MAP[booth.id],
      };
    }
  }
}
