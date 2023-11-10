import "./App.css";
//자식 컴포넌트 요소
import Main from "./component/Main";
import Join from "./component/Join";
import MyCount from "./component/MyCount";
import Login from "./component/Login";

import { Button, Space, DatePicker, version } from "antd";

// 페이지 이동을 위한 설정1
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
