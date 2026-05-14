
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/data/hall2.ts');
let content = fs.readFileSync(filePath, 'utf8');

const mapping = [
    { id: "P03", folder: "무츠핫센" },
    { id: "P04", folder: "기쿄" },
    { id: "P09", folder: "히타카미" },
    { id: "P11", folder: "에이쿤" }
];

mapping.forEach(m => {
    // 해당 ID를 가진 부스 섹션을 찾습니다.
    const boothRegex = new RegExp(`id:\\s*"${m.id}"[\\s\\S]*?products:\\s*\\[([\\s\\S]*?)\\]`, 'g');
    content = content.replace(boothRegex, (match, productList) => {
        let index = 1;
        // 제품 객체마다 image 필드를 추가하거나 교체합니다.
        const updatedProductList = productList.replace(/\{([\s\S]*?)\}/g, (pMatch) => {
            // 이미 image 필드가 있으면 교체, 없으면 추가
            const imagePath = `/${m.folder}/${index}.jpg`;
            index++;
            if (pMatch.includes('image:')) {
                return pMatch.replace(/image:\s*"[^"]*"/, `image: "${imagePath}"`);
            } else {
                return pMatch.replace(/name:/, `image: "${imagePath}",\n            name:`);
            }
        });
        return match.replace(productList, updatedProductList);
    });
});

fs.writeFileSync(filePath, content);
console.log('Successfully updated hall2.ts with local image paths.');
