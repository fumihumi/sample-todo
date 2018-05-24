import * as React from "react";
import styled from "styled-components";


const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Content = styled.div`
  background: #00d1b2;
  border: 1px solid #f2f2f2;
  width: 800px;
  padding: 40px 20px 40px 20px;
  color: #fafafa;
`;

const Row = styled.div`
  padding: 8px;
`

interface Props {
  id: number;
  detail: {
    id: number;
    title: string;
    body: string;
    assigned: string;
  }
}

export class Detail extends React.Component<Props> {
  public render() {
    const todo = this.props.detail ? (
      <div>
        <Row>{this.props.detail.id}</Row>
        <Row>{this.props.detail.title}</Row>
        <Row>{this.props.detail.body}</Row>
        <Row>{this.props.detail.assigned}</Row>
      </div>
    ) : <div />;
    return (
      <ContentWrapper>
        <Content>
          {todo}
        </Content>
      </ContentWrapper>
    );
  }
}