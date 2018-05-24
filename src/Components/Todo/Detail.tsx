import * as React from "react";
import styled from "styled-components";


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
  [id: number]: TodoDetail;
}

interface TodoDetail {
  id: number;
  title: string;
  body: string;
  assigned: string;
}

export class Detail extends React.Component<{id: number}, State> {
  state: State = {
    1: {
      id: 1,
      title: "テストTitle",
      body: '圧倒的な力を持つ巨人とそれに抗う人間たちの戦いを描いたファンタジーバトル漫画。2009年9月9日に講談社の少年マガジン編集部から発行が開始された『別冊少年マガジン』10月号（創刊号）で連載を開始。2011年には第35回講談社漫画賞の少年部門を受賞した。本作の世界観はダーク・ファンタジーの要素が強く、少年漫画としては残酷な描写も多く描かれている（人間達が巨人に襲撃・捕食されるシーンや、身体が損壊するシーンなど）。原作者の諫山曰く出版社側からは、「人体の断面を描いてはいけない」程度の表現規制しか受けていないとの事[6][7]。2013年にはテレビアニメ化が発表され、第1期が4月から9月まで各局で放送された[8]。また、2015年には実写映画化された。この他、ライトノベル化やゲーム化も行なわれている。このように本作は2011年ごろより様々なメディアミックス展開が採られているが、作者は「読者に媚びることは、読者を裏切ることと等しい」という考えの下、「舞台などの謎が明かされた時が物語の終わる時」としている[9][10]。また、2016年にはテレビアニメ第2期の制作が発表され、2017年4月1日から放送が始まった。第2期最終回後のCM内にて、2018年のテレビアニメ第3期の制作が発表された。',
      assigned: "@__mnc90"
    },
  };

  public render() {
    const todo = this.state[this.props.id];
    return (
      <ContentWrapper>
        <Content>
          <div>{todo ? todo.id : ''}</div>
          <div>{todo ? todo.title : ''}</div>
          <div>{todo ? todo.body : ''}</div>
          <div>{todo ? todo.assigned : ''}</div>
        </Content>
      </ContentWrapper>
    );
  }
}