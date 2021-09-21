import './App.scss';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Research from './Research';
import Result from './Result';
import React from "react"; // npm install react-router-dom 로 설치

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/research" component={Research} />
          <Route path="/result" component={Result} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
