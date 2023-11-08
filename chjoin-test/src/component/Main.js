//Main 임시 페이지
import { Button } from "antd";
import React from "react";

//yarn add react-router-dom
//라우팅 모듈, 도구 설치.
import { useNavigate } from "react-router-dom";
import MyCount from "./MyCount";

const Main = () => {
  //useNavigate 라는 훅스를 이용해서, 페이징 하기..
  const navigate = useNavigate();

  return (
    <div>
      <h1>메인화면 입니다.</h1>
      {/* join 컴포넌트로 이동하는 버튼 하나 추가 */}
      <Button
        title="회원가입으로 이동"
        type="primary"
        onClick={() => navigate("/join")}
      >
        회원가입으로 이동
      </Button>
      <br />
      <br />
      <Button
        title="mycount으로 이동"
        type="primary"
        onClick={() => navigate("/mycount")}
      >
        mycount으로 이동
      </Button>
    </div>
  );
};

export default Main;
