import logo from "./logo.svg";
import "./App.css";
//자식 컴포넌트 요소
import Main from "./component/Main";
import Join from "./component/Join";
import MyCount from "./component/MyCount";

import { Button, Space, DatePicker, version } from "antd";

// 페이지 이동을 위한 설정1
import { BrowserRouter, Route, Routes } from "react-router-dom";

//styled-component, 컴포넌트에서 좀더 편하게 css 작업하는 모듈
//yarn add styled-components
//확장팩 : styled-components

function App() {
  return (
    // 페이지 이동을 위한 설정2.
    // 전체 요소를 BrowserRouter로 감싸기
    // 구성요소는 Routes ->Route 로 구성할 예정.
    <BrowserRouter>
      <Routes>
        {/* 메인으로 사용할 페이지를 App 또는 Main.js로 해도 됨 */}
        <Route index element={<Main />} />

        {/* 주소 : http://localhost:3000/join -> 해당 페이지 안내 : element={<이동할 컴포넌트>} */}
        <Route path="join" element={<Join />} />

        <Route path="mycount" element={<MyCount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <div className="App"> */
}
{
  /* <header className="App-header"> */
}
// <img src={logo} className="App-logo" alt="logo" />
{
  /* 튜토리얼 샘플 가져오기 */
}
// <div style={{ padding: "0 24px" }}>
// <h1>antd version: {version}</h1>
// <Space>
// <DatePicker />
// <Button type="primary">Primary Button</Button>
// </Space>
// </div>
{
  /* 튜토리얼 샘플 가져오기 */
}
// <Join />
// <p>
// Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
// Learn React
// </a>
// </header>
// </div>
