// es6, cont , let  비교해보기.

function test() {
  var a = "hello";
  if (true) {
    var a = "hi";
    console.log(a); // a 가 뭐가 출력이 될까 : hi
  }
  console.log(a); // a 가 뭐가 출력이 될까 : hi...
}

function test2() {
  let a = "hello";
  if (true) {
    let a = "hi";
    console.log(a); // a 가 뭐가 출력이 될까 : hi
  }
  console.log(a); // a 가 뭐가 출력이 될까 : hello
}

//결론,, var 전역으로 재선언 및 재할당
//       let 블록 단위라서 블록 단위라서, 우리가 원래 알고 있던 지역 변수의 효력범위를 못 넘어감.

//함수사용하기.
console.log("test======================================================");
test();
console.log("test2======================================================");
test2();
