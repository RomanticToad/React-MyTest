//함수형 컴포넌트 테스트
//rsc
import React from "react";
//test.css 가져오기
import "../CSS/test.css";

const Funccomponenttest = () => {
  const name = "김경태";
  return (
    <div className="funcComp">
      <h1>함수형 컴포넌트 테스트</h1>
      {name}
    </div>
  );
};

export default Funccomponenttest;
