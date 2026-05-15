// Complete user data with all booth details
const fullBoothData = `1,㈜니혼슈코리아 판매부스,A01,,
2,㈜니혼슈코리아 안내부스,A02,,
3,고쿠류주조,A03,후쿠이현,쿠즈류 준마이
4,데와자쿠라주조,A04,야마가타현,데와자쿠라 유키메가미
5,이시모토주조,A05,니가타현,코시노칸바이 벳센
6,코시메이조주식회사,A06,니가타현,야마시로야 1st Class
7,이네토아가베,A07,아키타현,코우슈 하나카제
8,㈜니혼슈코리아,A08,,테도리카와 준마이긴죠
9,니혼세이슈,A09,홋카이도,치토세츠루 준마이다이긴죠 스이세이
10,고쵸다주조,A10,사가현,아즈마이치 준마이다이긴죠
11,하츠카메양조,A11,시즈오카현,하츠카메 준마이긴죠 카라카라벳삥
12,이소지만주조,A11,시즈오카현,이소지만 준마이다이긴죠
13,아이하라주조,A12,히로시마현,우고노츠키 토쿠베츠준마이 야마다니시키
14,텐료하이주조,A12,니가타현,우타시로 릿카
15,코이즈미주조,A13,치바현,토카이 자카리 준마이긴죠 나노하나
16,오모야주조,A13,나가사키현,요코야마 고쥬 준마이다이긴죠 블랙
17,후지이양조,A14,오이타현,무기쇼츄 토쿠조 타이메이
18,요쓰야주조,A14,오이타현,무기쇼츄 카네하치
19,스미카와주조장,B03,야마구치현,토요비진 준마이다이긴죠 이치번마토이
20,센킨,B03,도치기현,카쿠메이 센킨 잇세이
21,이마니시주조,B03,나라현,이마니시 준마이긴죠 아사히
22,카모니시키주조,B03,니가타현,카모니시키 니후다자케 준마이다이긴죠 반슈야마다니시키
23,타사키주조,B03,가고시마현,야키이모쇼츄 오니비
24,나가시마켄조,B03,가고시마현,이모쇼츄 사츠마시마비진
25,야나기타주조,B03,미야자키현,무기쇼츄 아오카게
26,야마모토주조,B03,가고시마현,고다이 우메슈
27,히가주조,B04,오키나와현,류큐아와모리 잔파 블랙
28,가토키치베쇼텐,B05,후쿠이현,본 고쿠히조 다이긴죠
29,쿠마가이주류 판매부스,B06,,
30,SODAWARI,B07,,야마노고토부키 레몬
31,사케노이치자,B08,후쿠오카현,메로메로 모지코 바나나
32,미이노고토부키,B09,후쿠오카현,미이노고토부키 준마이다이긴죠 아이야마
33,하마카와쇼텐,B10,코우치현,비죠후 준마이다이긴죠 히나
34,기타니시주조,B11,사이타마현,사라 준마이긴죠
35,칸코바이주조,B12,미에현,칸코바이 준마이 야마다니시키60
36,지자케CY코리아 판매부스,B13,경기도 광주시 목동길13번길12,1동,`;

// Parse and generate brewery names
const boothMap = new Map();
const lineArray = fullBoothData.trim().split('\n');
lineArray.forEach(line => {
    const parts = line.split(',');
    if (parts.length >= 3) {
        const boothId = parts[2].trim();
        const breweryName = parts[1].trim();
        if (!boothMap.has(boothId) || boothId !== 'B06' && boothId !== 'B13') {
            // Keep first entry for combined booths, skip services
            if (!boothMap.has(boothId)) {
                boothMap.set(boothId, []);
            }
            boothMap.get(boothId).push(breweryName);
        }
    }
});

// Output brewery names by booth ID
console.log('Brewery data for B section:');
for (const [boothId, names] of boothMap) {
    if (boothId.startsWith('B')) {
        console.log(`${boothId}: ${names.join(' / ')}`);
    }
}
