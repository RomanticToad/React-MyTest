// 부모 : App, 자식 : TodoMain
// 자식 : TodoMain (베이스 컴포넌트)

//전체 가운데 요소로 정렬시켜주는 템플릿 : TodoBase

// 1)제목 ...2)입력란 : TodoInsert 3)리스트... 4)리스트의 아이템 등..

import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { AiFillApple } from "react-icons/ai";
import TodoBase from "./TodoBase";
import TodoInsert from "./TodoInsert";
import TodoListItem from "./TodoListItem";
import TodoList from "./TodoList";

const Main_css = styled.div`
  margin: 0;
  padding: 0%;
  background: #e9ecef;
`;

//Todo만들기 준비 메인
const TodoMain = () => {
  //샘플 더미데이터를 임시 배열에 만들어서 전달. props 테스트
  const [todos, setTodos] = useState([
    { id: 1, text: "더미 데이터 요소 1번입니다.", checked: true },
    { id: 2, text: "더미 데이터 요소 2번입니다.", checked: false },
    { id: 3, text: "더미 데이터 요소 3번입니다.", checked: true },
  ]);

  //추가로 입력이 되는 todo부분의 아이디를 id : 4부터 할당
  const nextId = useRef(4);

  //TodoMain -> TodoInsert 자식 컴포넌트에게, props로 함수를 전달하기
  //onInsert 라는 함수는, onChange함수와는 다르게
  //매번 새로운 함수를 생성한다. 이유는 함수안에 배열이 변경이 되어서
  // todos 배열의 변경에 따라서, 동작하게 만들기
  const onInsert = useCallback(
    (text) => {
      const todo = {
        //const nextId = useRef(4); 4부터 id 시작
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  //지우기 기능 함수 추가하기
  //데이터 추가시 : 내장함수 concat 이용해서 새로운배열생성
  //데이터 삭제시 : 내장함수 filter 이용해서 새로운배열생성
  //콜백함수 ,
  const onRemove = useCallback(
    (id) => {
      //만약 id가 2를 선택했다면, todo.id!==id
      //선택된 id2를 제외한 나머지 요소를 뽑아서 (필터해서) 새로운배열생성
      // 결론, 선택된 id2를제거하는효과와같다
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  //토글(스위치 on/off), checkbox 부분에, 이벤트 핸들러 추가하기.
  // onToggle 이라는 이름. 함수를 자식 컴포넌트에게 전달하기.
  //순서1
  const onToggle = useCallback(
    (id) => {
      setTodos(
        //선택된 todo의 id가 일치하면, 기존 배열을 복사해서, 선택된 id 의 속성 checked 부분 변경시키기
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <div>
      <Main_css>
        Todo만들기 준비 메인
        <AiFillApple />
        <TodoBase>
          {/* 위에서 만든 useCallBack 함수를 자식컴포넌트에 전달하기 */}
          <TodoInsert onInsert={onInsert} />
          {/* 위에서 만든 임시 데이터 배열을 전달 : props속성으로 전달 */}
          {/* <TodoList /> */}
          {/* 제거하는 함수를 props이용해서, 전달 */}
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoBase>
      </Main_css>
    </div>
  );
};

export default TodoMain;
