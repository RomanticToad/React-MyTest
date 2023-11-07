const obj1 = { a: 1, b: 2, c: 3 };
const nextObj1 = { ...obj1, d: 4 };
for (const key in obj1) {
  console.log("복사본의 값: " + nextObj1[key]);
}
// ... spread 연산자를 이용해서, 사본 만들기.
// 복사본을 만들어서 d값만 덮어쓰기.

// 배열
const array = [
  { id: 1, value: true },
  { id: 2, value: true },
  { id: 3, value: true },
];

console.log("========== nextArr concat 테스트 (4번 추가) ====================");
// 내장함수, concat, filter, map 소개.
let nextArr = array.concat({ id: 4, value: false });
//출력
// for (let i = 0; i < nextArr.length; i++) {
//   console.log(nextArr[i]);
// }
for (let i = 0; i < nextArr.length; i++) {
  console.log(
    "concat 확인. nextArr: " +
      nextArr[i] +
      ", key: " +
      nextArr[i].id +
      ", value: " +
      nextArr[i].value
  );
}

console.log("========== nextArr2 filter 테스트 (2번삭제) ====================");
// filter , (item) => item.id !== 2 . 2값 제거
let nextArr2 = nextArr.filter((item) => item.id !== 2);

// 출력.
// for (let i = 0; i < nextArr2.length; i++) {
//   console.log(nextArr2[i]);
// }
for (let i = 0; i < nextArr2.length; i++) {
  console.log(nextArr2[i]);
  console.log(
    "filter 확인. nextArr2: " +
      nextArr2[i] +
      ", key: " +
      nextArr2[i].id +
      ", value: " +
      nextArr2[i].value
  );
}

console.log(
  "=============nextArr3 map 테스트(id값이 1이면 value 값 false 로 변경)================="
);
//map item.id === 1 -> 이면 value 값 false 값 변경.
let nextArr3 = nextArr.map((item) =>
  item.id === 1 ? { ...item, value: false } : item
);

// 출력.
// for (let i = 0; i < nextArr3.length; i++) {
//   console.log(nextArr3[i]);
// }
for (let i = 0; i < nextArr3.length; i++) {
  console.log(nextArr3[i]);
  console.log(
    "map 확인. nextArr3: " +
      nextArr3[i] +
      ", key: " +
      nextArr3[i].id +
      ", value: " +
      nextArr3[i].value
  );
}
