// js import 키워드를 사용하는데 탈 웹 브라우저,,
// 즉 로컬에서 자바스크립트를 이용한다
// node -> 리액트 프로그램생성 -> 그 프로젝트 내에서, 특정기능 (npm)설치 가능.
// import logo from "./logo.svg";
import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // JSX 문법 모양소개 -> JavaScript eXtened , 자바스크립트 확장된 문법.
  //return 이라는 키워드 아래에, html 태그들이 사용되고 있음.
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  //================================================================================================
  // return React.createElement(
  //   "div",
  //   null,
  //   "Hello, ",
  //   React.createElement("b", null, "react")
  // );
  //================================================================================================
  // return (
  //   <div>
  //     Hello, <b>bitch</b>
  //   </div>
  // );
  //================================================================================================
  // return (
  //   <Fragment>
  //     Hello, <b>bitch</b>
  //   </Fragment>
  // );
  //================================================================================================
  // const name = "김경태";
  // return (
  //   <>
  //     <h1>Hello, {name} </h1>
  //     <b>bitch</b>
  //   </>
  // );
  //================================================================================================
  //if 대신에 jsx에서 조건부 연산자 이용
  //const :  상수처럼 사용, 안드로이드 val
  //let : 변수처럼 사용, 안드로이드 var
  const name = "김경태";
  //{조건식 ? (참 일 때 실행 될 문장) : (거짓 일 때 실행 될 문장)}
  return (
    <>
      {name === "김경태2" ? <h1>김경태가 맛다</h1> : <h1>김경태가 아니다</h1>}
    </>
  );

  //================================================================================================
}

export default App;
