## 소개글

안녕하세요! 최근에 니혼슈 입문한 샄린이 입니다.

2025년 사케페스티벌을 보러 갔을 때, 간편하게 양조장 정보를 보거나 간단한 맛 정보를 확인할 수 있으면 좋겠다 싶어서 간단하게 만들어보았습니다. 한번 보시고 "이런 거 있으면 좋겠다~" 하시는 의견 주시면 가능하면 반영해보겠습니다!

백엔드 없이 만든 앱이라서 저장되는 정보는 같은 기종의 동일한 브라우저에서만 유지될 수 있으니 참고 부탁드립니다.

다들 더 편하게 사케페스티벌을 즐기실 수 있으면 좋겠네요!

### 기능 한눈에 보기 (현재 구현 기준)

- 지도: 1관/2관 지도와 전체 배치도(PDF) 탭으로 부스 위치를 확인할 수 있어요.
- 검색: 부스 번호/이름뿐 아니라 지역, 타입, 태그, 맛(아마구치/카라구치/밸런스) 키워드까지 통합 검색돼요.
- 찜: 부스 찜 + 사케 찜을 따로 모아보고, 클릭하면 상세로 바로 이동돼요.
- 행사: 일자별 일정 + 유료 시음 안내/바우처 구매 링크를 한 화면에서 볼 수 있어요.

### 부스 상세에서 가능한 것들

- 방문 여부 체크(방문/미방문)
- 부스별 메모(테이스팅 노트) 작성
- 출품 사케 상세 보기 + 사케별 메모
- 공식 사이트 링크 이동(있는 경우)

### 저장 방식

- 찜/방문/메모는 `localStorage`에 저장돼서 같은 기기/같은 브라우저에서만 유지돼요.

### 참고사항

- 배치도는 추후 교체 예정입니다.
- 행사 일정도 추후 공개되는 정보로 교체 예정입니다.
- 각 니혼슈 별 사진은 추후 추가할 예정입니다.
- 각 양조장 정보는 AI로 조사한 내용이라 일부 틀릴 수 있으므로 참고 부탁드립니다.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
