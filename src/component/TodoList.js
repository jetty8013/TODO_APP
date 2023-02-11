import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TodoListWrapper = styled.div`
  position: absolute;
  width: 390px;
  height: 240px;
  left: 0px;
  top: 492px;
`
const TodoListUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;

  li:hover {
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  }
`
const TodoListLi = styled.li`
  background: #D1D1D6;
  display: flex;
  justify-content: flex-start;
  padding-left: 15px;
  align-items: center;
  width: 338px;
  height: 48px;
  border-radius: 5px;
  margin-bottom: 6px;
  cursor: pointer;
`
const TodoContent = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  color: #333;
`

function TodoList() {
  const state = useSelector((state) => state);
  const [isTodo, setTodo] = useState(['목록이 없습니다'])

  useEffect(() => {
    if (typeof state[state.dd] === 'undefined') setTodo(['목록이 없습니다'])
    else setTodo([...state[state.dd]])
  }, [state.dd])

  const CreateList = isTodo.map((el, idx) => {
    return (
      <TodoListLi key={idx}><TodoContent>{el}</TodoContent></TodoListLi>
    )
  })

  return (
    <>
      <TodoListWrapper>
        <TodoListUl>{CreateList}</TodoListUl>
      </TodoListWrapper>
    </>
  )
}

export default TodoList;