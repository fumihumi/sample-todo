// import { Action, Dispatch } from 'redux'
// import { actionCreatorFactory } from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

export interface DetailState {
  [id: number]: TodoDetail
}

interface TodoDetail {
    id: number
    title: string
    assigned: string
    body: string
}

// const actionCreator = actionCreatorFactory()
// const create = actionCreator.async<{}, any, {}>('CREATE_FLOOR')

const initialState: DetailState = {
  1: 
    {
      id: 1,
      title: "テストTitle",
      assigned: "@__mnc90",
      body: '圧倒的な力を持つ巨人とそれに抗う人間たちの戦いを描いたファンタジーバトル漫画。2009年9月9日に講談社の少年マガジン編集部から発行が開始された『別冊少年マガジン』10月号（創刊号）で連載を開始。2011年には第35回講談社漫画賞の少年部門を受賞した。本作の世界観はダーク・ファンタジーの要素が強く、少年漫画としては残酷な描写も多く描かれている（人間達が巨人に襲撃・捕食されるシーンや、身体が損壊するシーンなど）。原作者の諫山曰く出版社側からは、「人体の断面を描いてはいけない」程度の表現規制しか受けていないとの事[6][7]。2013年にはテレビアニメ化が発表され、第1期が4月から9月まで各局で放送された[8]。また、2015年には実写映画化された。この他、ライトノベル化やゲーム化も行なわれている。このように本作は2011年ごろより様々なメディアミックス展開が採られているが、作者は「読者に媚びることは、読者を裏切ることと等しい」という考えの下、「舞台などの謎が明かされた時が物語の終わる時」としている[9][10]。また、2016年にはテレビアニメ第2期の制作が発表され、2017年4月1日から放送が始まった。第2期最終回後のCM内にて、2018年のテレビアニメ第3期の制作が発表された。',
    },
  2: 
    { 
      id: 2,
      title: "Anarchy",
      assigned: "@anarchy_jp",
      body: 'ANARCHY（アナーキー、本名：北岡 健太（きたおか けんた）、1981年 - ）は京都府出身のラッパーである。R-RATED RECORD',
    },
  3:
    { 
      id: 3,
      title: "TOKONA-X",
      assigned: "@tokona-x", 
      body: 'TOKONA-X（トコナ・エックス、本名：古川 竜一、1978年10月20日 - 2004年11月22日）は、日本のヒップホップMC。通称、T-X。== 来歴 ==神奈川県横浜市で生まれ育つが、家庭の事情で愛知県常滑市に転居。その後ヒップホップと出会い、ラッパーとしての活動を開始する。刀頭とのユニット「刃頭 & TOKONA-X」としてさんピンCAMPに前座という形で出演。後に「ILLMARIACHI」を刃頭と結成。また、AKIRA、"E"qualらと共に3MCsの「M.O.S.A.D.」の一員としても活動。ソロとしてはDef Jam Japanに所属し、アルバムを1枚発表。2004年11月22日、急逝。満26歳没。公式発表では、夏からかかっていた熱中症に伴う体力低下による心停止とされている。完全にオーバーワークによるものと言われている。2013年10月23日、逝去後長らく廃盤及び入手困難となっていたアルバム『トウカイXテイオー』とシングル『知らざあ言って聞かせやSHOW』が再発される。なお、再発盤ではあえてリマスタリングなどのデジタル処理は行わず、当時TOKONA-Xが納得して発表したそのままの状態でリリースされた。完全にオーバーワークである',
    }
}

export default reducerWithInitialState(initialState)
