import * as React from "react";
import styled from "styled-components";
import "./App.css";
import { Todo } from "./Todo";

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

interface Todo {
  id: number;
  title: string;
  body: string;
  assigned: string;
}

class App extends React.Component<{}, State> {
  state: State = {
    list: [
      {
        id: 1,
        title: "テストTitle",
        body: "テスト Body",
        assigned: "@__mnc90"
      },
      { id: 2, title: "mnc Title", body: "mnc Body", assigned: "@__mnc90" },
      { id: 3, title: "Sample Title", body: "Sample Body", assigned: "@sample" }
    ]
  };

  public render() {
    const todoList = this.state.list.map(todo => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          body={todo.body}
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

export default App;
