//함수형 컴포넌트 ,
// +1, -1 의 기본적인 동작은 동일함.
// state를 구현하는 방법이 조금 다름.
// useState 라는 hooks 를 미리 사용함.
import React, { useState } from "react";

import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//Wrapper 라고 해서 블록 부분 설정
const Wrapper = styled.div`
  background-color: antiquewhite;
  padding: 20px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MyCount = () => {
  const navigate = useNavigate();
  // state를 할당하는 부분이 , useState 사용.
  const [number, setNumber] = useState(0);
  // const [anotherNumber, setAnoterhNumber] = useState(100);
  // useState 의 결과값 타입이 배열
  // useState(0) : 초깃값 : number = 0
  // 첫번째 : 상태값,
  // 두번째 : 세터 함수.
  const onClickUp = () => setNumber(number + 1);
  const onClickDown = () => setNumber(number - 1);
  return (
    <Wrapper>
      <div>
        <h1>{number}</h1>
        {/* <h2>다른 숫자 : {anotherNumber}</h2> */}
        <button onClick={onClickUp}>+1</button>

        <button
          // onClick 의 값으로 함수를 사용
          onClick={onClickDown}
        >
          -1
        </button>
      </div>
      <br />
      <Button
        title="메인화면으로 이동"
        type="primary"
        onClick={() => navigate("/")}
      >
        메인 화면으로 이동
      </Button>
    </Wrapper>
  );
};

export default MyCount;
