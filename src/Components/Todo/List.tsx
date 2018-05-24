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

interface State {
  list: Todo[];
}

interface Props {
  list: Todo[];
}

interface Todo {
  id: number;
  title: string;
  assigned: string;
}

export class List extends React.Component<Props, State> {
  state: State = {
    list: [
      {
        id: 1,
        title: "テストTitle",
        assigned: "@__mnc90"
      },
      { id: 2, title: "mnc Title", assigned: "@__mnc90" },
      { id: 3, title: "Sample Title", assigned: "@sample" }
    ]
  };

  public render() {
    const todoList = this.state.list.map(todo => {
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