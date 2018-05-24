import * as React from "react";
import "./App.css";
import List from "./Containers/List";
import Detail from "./Containers/Detail";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={List} />
          <Route exact={true} path="/detail/:id" render={({match: { params: { id } }}) => {
            return <Detail id={id}/> 
          }}/>
        </Switch>
      </BrowserRouter>
      )
  }
}

export default App;
