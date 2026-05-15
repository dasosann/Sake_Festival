// Parse user's booth data
const boothDataText = `1, ㈜니혼슈코리아 판매부스, A01, , 
2, ㈜니혼슈코리아 안내부스, A02, , 
3, 고쿠류주조, A03, 후쿠이현, 쿠즈류 준마이 / 쿠즈류 키죠슈 / 고쿠류 잇쵸라이 준긴 / 고쿠류 다이긴죠 / 고쿠류 다이긴죠 Crystal Dragon / 고쿠류 다이긴죠 / 고쿠류 준마이다이긴죠 / 고쿠류 AWA 죠
4, 데와자쿠라주조, A04, 야마가타현, 데와자쿠라 유키메가미 / 데와자쿠라 준마이긴죠 / 유키만만 빙점하 5년 숙성중 / 데와자쿠라 토로케루 라프랑스 / 데와자쿠리 잇코 혼나마
5, 이시모토주조, A05, 니가타현, 코시노칸바이 벳센 / 코시노칸바이 사이 / 코시노칸바이 아마네 / 코시노칸바이 세이슈 / 코시노칸바이 초토쿠센 / 코시노칸바이 라군
6, 코시메이조주식회사, A06, 니가타현, 야마시로야 1st Class / 야마시로야 에이케이 / 야마시로야 루스이 / 야마시로야 가호 / 야마시로야 후우가
7, 이네토아가베, A07, 아키타현, 코우슈 하나카제
8, ㈜니혼슈코리아, A08, , 테도리카와 준마이긴죠 / 마쵸 준마이 오마치80 / 마쵸 준마이 아이야마80 / 블랙잭 / 산칸 오마치 준마이 무로카나마겐슈 / 닷사이 소노사키에 / 추구 / 고쿠류 준마이다이긴죠 / 고쿠류 AWA 죠
9, 니혼세이슈, A09, 홋카이도, 치토세츠루 준마이다이긴죠 스이세이 / 치토세츠루 준마이슈
10, 고쵸다주조, A10, 사가현, 아즈마이치 준마이다이긴죠 / 아즈마이치 준마이긴죠 하쿠츠루니시키 / 아즈마이치 준마이긴죠 야마다니시키
11, 하츠카메양조, A11, 시즈오카현, 하츠카메 준마이긴죠 카라카라벳삥 / 하츠카메 준마이긴죠 토죠야마다니시키 / 하츠카메 토쿠베츠준마이
12, 이소지만주조, A11, 시즈오카현, 이소지만 준마이다이긴죠 / 이소지만 준마이긴죠 야마다니시키 / 이소지만 토쿠베츠준마이 오마치53
13, 아이하라주조, A12, 히로시마현, 우고노츠키 토쿠베츠준마이 야마다니시키 / 우고노츠키 준마이다이긴죠 핫탄니시키
14, 텐료하이주조, A12, 니가타현, 우타시로 릿카 / 우타시로 즈이카 / 우타시로 히요리 / 우타시로 겟카 / 우타시로 나루카미`;

const lines = boothDataText.split('\n').filter(l => l.trim());
const boothMap = {};

lines.forEach(line => {
    const parts = line.split(',').map(p => p.trim());
    if (parts.length >= 3) {
        const idx = parts[0];
        const name = parts[1];
        const boothId = parts[2];
        const region = parts[3] || '';
        const productsStr = parts[4] || '';
        const products = productsStr ? productsStr.split('/').map(p => p.trim()).filter(p => p) : [];
        
        boothMap[boothId] = {
            index: idx,
            name: name,
            region: region,
            products: products
        };
    }
});

console.log(JSON.stringify(boothMap, null, 2));
