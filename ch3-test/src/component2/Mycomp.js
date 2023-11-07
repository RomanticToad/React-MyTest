import React from "react";
import PropTypes from "prop-types";

//rsc
//자식 컴포넌트
// 부모 컴포넌트로 부터 전달받은 props 라는 속성을 이용하는 입장.

// const Mycomp = (props) => {
//   return (
//     <div>
//       <h1>테스트 props 객체안에 속성들 중에서 name 받아오기,{props.name}</h1>

//       <h1>
//         테스트 props 객체안에 속성들 중에서 password 받아오기,{props.password}
//       </h1>

//       <h1>
//         테스트 props 객체안에 속성들 중에서 children 받아오기,{props.children}
//       </h1>
//     </div>
//   );
// };
//===================================================================================================
//방법2
//매개변수 부분에 바로 객체로 할당.
const Mycomp = ({ name, password, children }) => {
  //방법1
  //비구조화 할당 문법으로 한번에 꺼내서 할당하기
  // const { name, password, children } = props;
  return (
    <div>
      <h1>테스트 props 객체안에 속성들 중에서 name 받아오기,{name}</h1>

      <h1>테스트 props 객체안에 속성들 중에서 password 받아오기,{password}</h1>

      <h1>테스트 props 객체안에 속성들 중에서 children 받아오기,{children}</h1>
    </div>
  );
};

//타입 유효성 체크
Mycomp.defaultProps = {
  name: "기본이름",
  password: " 기본 1234",
};

//props의 타입 확인
Mycomp.propTypes = {
  //기본값 타입
  //not null 반드시 존재 확인하기
  name: PropTypes.string,
  password: PropTypes.string,
};

export default Mycomp;