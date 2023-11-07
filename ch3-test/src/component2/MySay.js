//rsc
import React, { useState } from "react";
//useState로 함수형 컴포넌트에서 상태값 변경 연습해보기

const MySay = () => {
  //회원가입, username 입력 받아서,  username 확인하기
  // const[상태값,세터함수] = useState('')-> 반환 배열 형식
  const [username, setUserName] = useState("kkt");
  const [password, setPassword] = useState("1234");

  //색깔 추가해주기
  const [color, setColor] = useState("red");

  //이벤트 핸들러 추가 . onClick 클릭시 이벤트 발생
  const onClickUserName = () =>
    setUserName("클릭하면 발생하는 username 더미값");
  const onClickPassword = () =>
    setPassword("클릭하면 발생하는 password 더미값");
  return (
    <div>
      <h1 style={{ color }}>{username} 님 환영합니다.</h1>
      <h1>
        {username} 님 패스워드 확인 테스트 :{password}{" "}
      </h1>
      <button onClick={onClickUserName}>username 확인하기</button>
      <button onClick={onClickPassword}>password 확인하기</button>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색 꾸미기
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색 꾸미기
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색 꾸미기
      </button>
    </div>
  );
};

export default MySay;
