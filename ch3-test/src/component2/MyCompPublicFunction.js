//rcc 클래스형 컴포넌트 ,
import PropTypes from "prop-types";
import React, { Component } from "react";

class MyCompPublicFunction extends Component {
  render() {
    // 비구조화 할당 문법으로 한번에 꺼내서 할당하기.
    const { name, password, children } = this.props;

    return (
      <div>
        <h1>테스트 props 객체안에 속성들 중에서 name 받아오기,{name}</h1>

        <h1>
          테스트 props 객체안에 속성들 중에서 password 받아오기,{password}
        </h1>

        <h1>
          테스트 props 객체안에 속성들 중에서 children 받아오기,{children}
        </h1>
      </div>
    );
  }
}

export default MyCompPublicFunction;
