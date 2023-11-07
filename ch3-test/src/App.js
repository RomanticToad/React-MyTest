// import logo from "./logo.svg";
// import "./App.css";
// import Funccomponenttest from "./component2/Funccomponenttest";
// import Mycomp from "./component2/Mycomp";

// //부모 컴포넌트
// function App() {
//   return (
//     <div>
//       {/* 자식 컴포넌트 출력 해보기 테스트 */}
//       {/* 함수형, 클래스형 컴ㄴ포넌트의 이름의 첫 시작 대문자로 해야 안식. */}
//       <Funccomponenttest />

//       {/* 자식 컴포넌트에게 props라는 속성 객체를 이용해서 이름을 전달하기 */}
//       {/* <Mycomp name="김경태" password="1234"></Mycomp> */}

//       {/* 부모 컴포넌트에서 pros 설정이 없을 때 기본값 설정 후 사용가능.  */}
//       {/* <Mycomp/> */}

//       {/* 자식 컴포넌트 */}
//       {/* <Mycomp>여기 값이 children 속성임 </Mycomp> */}

//       {/* <Mycomp name={"김경태"} password={"123123"} children={"헤헤헿"}></Mycomp> */}

//       <Mycomp name={"111111"} password={"props타입 확인"}>
//         크킄킄ㅋ 흐콰한다
//       </Mycomp>
//     </div>
//   );
// }

// export default App;

//Mycomp.js용
//==================================================================================================================================
//MyCompPublicFuncion.js 용

import logo from "./logo.svg";
import "./App.css";
import Funccomponenttest from "./component2/Funccomponenttest";
import Mycomp from "./component2/Mycomp";
import Count from "./component2/Count";
import MyCount from "./component2/MyCount";
import MySay from "./component2/MySay";

//부모 컴포넌트
function App() {
  return (
    <div>
      {/* 자식 컴포넌트 출력 해보기 테스트 */}
      {/* 함수형, 클래스형 컴ㄴ포넌트의 이름의 첫 시작 대문자로 해야 안식. */}
      <Funccomponenttest />

      {/* 자식 컴포넌트에게 props라는 속성 객체를 이용해서 이름을 전달하기 */}
      {/* <Mycomp name="김경태" password="1234"></Mycomp> */}

      {/* 부모 컴포넌트에서 pros 설정이 없을 때 기본값 설정 후 사용가능.  */}
      {/* <Mycomp/> */}

      {/* 자식 컴포넌트 */}
      {/* <Mycomp>여기 값이 children 속성임 </Mycomp> */}

      {/* <Mycomp name={"김경태"} password={"123123"} children={"헤헤헿"}></Mycomp> */}

      {/* <Mycomp name={"111111"} password={"props타입 확인"}>
        크킄킄ㅋ 흐콰한다
      </Mycomp> */}

      <Count></Count>
      <MyCount></MyCount>
      <MySay></MySay>
    </div>
  );
}

export default App;
