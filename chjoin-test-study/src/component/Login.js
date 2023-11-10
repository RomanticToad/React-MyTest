//회원가입 창 처럼 만들기.
import React from "react";
import { useState, useRef } from "react";
import { Button, Avatar } from "antd";
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

const Login = () => {
  const navigate = useNavigate();
  //===========================================================
  //방법1
  //useState 이용해서, 현재 상태값 , 세터 함수 정의하기.
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  //방법2 , 특정 객체에 담아서 (박스 (모델)에 담아서)
  //초깃값으로 객체를 선언했음.
  const [form, setForm] = useState({
    email: "",
    password: "",
    //앞에 부분과 비교하면, 앞에는 개별적으로 처리했고, 객체에 담아서 일괄처리.
  });

  //비구조화 할당으로
  const { email, password } = form;

  //=====================================================
  // onChange, onClick , onKeyPress 등 확인.
  // input 입력된 값의 변경 유무를 확인.

  //방법1
  // const onChangeEmail = (e) => setEmail(e.target.value);

  // 방법2 , form 내부에 값이 변경시 처리하는 로직.
  const onChangeForm = (e) => {
    const nextForm = {
      ...form,
      // email input -> name : email , value : 실제 입력된 값
      // password input -> name : email , value : 실제 입력된 값
      [e.target.name]: e.target.value,
    };
    //입력된 email, password 업데이트 해주는 함수 : 세터와 동일.
    setForm(nextForm);
  };

  //========================================================
  // 추가 패스워드 변경 부분, 해당 뷰에 나타내기 테스트. -> 나중에 데이터 전달
  // 통신 라이브러리 사용함, axios 사용할 예정. 파이어베이스를 연동부분. 할예정.

  //방법1
  // const onChangePassword = (e) => setPassword(e.target.value);

  // // 클릭 이벤트 발생시 값을 확인.
  // const onClick = () => {
  //   alert("email: " + email + ", password : " + password);
  //   setEmail("");
  //   setPassword("");
  // };

  // 방법2. form 객체에 담아서 일괄 처리. 하는중.
  const onClick = () => {
    alert("email: " + email + ", password : " + password);
    setForm({
      email: "",
      password: "",
    });
  };

  // 키보드에서 엔터 키 입력시, 클릭 이벤트 호출 연결 확인.
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <Wrapper>
      <div>
        <h1>로그인 화면 </h1>
        <h2>이메일 : {email}</h2>
        <h2>패스워드 : {password}</h2>
        <input
          type="text"
          name="email"
          placeholder="이메일 입력해주세요."
          value={email}
          //방법1
          // onChange={onChangeEmail}
          //방법2
          onChange={onChangeForm}
          onKeyPress={onKeyPress}
        />
        <br />
        <input
          type="text"
          name="password"
          placeholder="패스워드를 입력해주세요."
          value={password}
          // 방법1
          // onChange={onChangePassword}
          // 방법2
          onChange={onChangeForm}
          onKeyPress={onKeyPress}
        />
        {/* <button onClick={onClick}>확인</button> */}
        <br></br>
        <Button onClick={onClick} type="primary">
          로그인
        </Button>
        <br />
        <br />
        <Button
          title="회원가입으로 이동"
          type="primary"
          onClick={() => navigate("/join")}
        >
          회원가입 화면으로 이동
        </Button>
        <br />
        <br />
        <Button
          title="메인화면으로 이동"
          type="primary"
          onClick={() => navigate("/")}
        >
          메인 화면으로 이동
        </Button>
      </div>
    </Wrapper>
  );
};

export default Login;
