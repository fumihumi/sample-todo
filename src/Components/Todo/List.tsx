import * as React from "react";
import styled from "styled-components";
import { Item } from './Item'
import { Link } from 'react-router-dom'


const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Content = styled.div`
  background: #fafafa;
  border: 1px solid #e2e2e2;
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
        <Link to={`/detail/${todo.id}`} style={{textDecoration: 'none'}}>
          <Item
            key={todo.id}
            id={todo.id}
            title={todo.title}
            assigned={todo.assigned}
          />
        </Link>
      );
    });
    return (
      <ContentWrapper>
        <h4 style={{color: '#999999'}}>TODO一覧</h4>
        <Content>{todoList}</Content>
      </ContentWrapper>
    );
  }
}