import * as React from "react";
import styled from "styled-components";
import { Item } from './Item'


const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Content = styled.div`
  background: #e5faf7;
  border: 1px solid #f2f2f2;
  width: 800px;
  padding: 40px 20px 40px 20px;
`;

interface Props {
  list: Todo[];
}

interface Todo {
  id: number;
  title: string;
  assigned: string;
}

export class List extends React.Component<Props> {
  public render() {
    const todoList = this.props.list.map(todo => {
      return (
        <Item
          key={todo.id}
          id={todo.id}
          title={todo.title}
          assigned={todo.assigned}
        />
      );
    });
    return (
      <ContentWrapper>
        <Content>{todoList}</Content>
      </ContentWrapper>
    );
  }
}