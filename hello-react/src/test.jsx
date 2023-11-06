import React from "react";
//jsx를 사용하기전에
//일반 자바스크립트로 똑같은 기능을 구현시
//문법 비교

function test() {
  return React.createElement(
    "div",
    null,
    "Hello",
    React.createElement("b", null, "react")
  );
}

//jsx 문법으로 구현
function test2() {
  return (
    <div>
      Hello, <b>react</b>
    </div>
  );
}

//Reacts code snippets 확장기능으로 자동완성

//==rsc 자동완성================================================================

const test3 = () => {
  return <div></div>;
};

export default test3;
//==rsc 자동완성================================================================

//==rcc 자동완성================================================================

// import React, { Component } from 'react';

// class test extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }

// export default test;
//==rcc 자동완성================================================================
