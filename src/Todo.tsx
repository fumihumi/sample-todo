import * as React from "react";
import styled from "styled-components";

const TodoComponent = styled.div`
  background: #00d1b2;
  border: 1px solid #f4f4f4;
  color: #fafafa;
  margin-bottom: 10px;
  padding: 8px;
`;

interface Todo {
  id: number;
  title: string;
  body: string;
  assigned: string;
}

export const Todo = ({ id, title, body, assigned }: Todo) => {
  return (
    <TodoComponent>
      <div>{id}</div>
      <div>{title}</div>
      <div>{body}</div>
      <div>{assigned}</div>
    </TodoComponent>
  );
};
