import React, { Component } from "react";
// 타입 알아보기 위한 기능 가져오기
import PropTypes from "prop-types";
// 클래스형 컴포넌트 형식, rcc 코드 스니펫으로 자동완성 한 결과.
class MyCompPublicFunction extends Component {
  render() {
    // 비구조화 할당 문법으로 한번에 꺼내서 할당하기.
    const { name, password, children } = this.props;

    return (
      <div>
        <h1>테스트 props 객체 안에 속성들 중에서 name 받아오기 : {name}</h1>
        <h1>
          테스트 props 객체 안에 속성들 중에서 password 받아오기 : {password}
        </h1>
        <h1>
          테스트 props 객체 안에 속성들 중에서 children 받아오기 : {children}
        </h1>
      </div>
    ); // return close
  } // render close
} // class close

// props 기본값 정하기.
MyCompPublicFunction.defaultProps = {
  // name: "기본 이름",
  password: " 기본 1234",
};

// props 의 타입 확인.
// 오타 확인 : MyComp.protoTypes -> MyComp.propTypes
MyCompPublicFunction.propTypes = {
  // 기본값 타입,
  // not null 반드시 존재 확인하기.
  // props 의 명세서 처럼, 어떤 props 가있는지 존재 여부 , 타입을 확인을 할수 있다.
  name: PropTypes.string.isRequired,
  password: PropTypes.string,
};

export default MyCompPublicFunction;