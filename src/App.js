import './App.scss';
import React, { useState, useEffect } from 'react'; // npm install react-router-dom 로 설치
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { APP_STATE } from 'constant/stringEnum';

import Home from 'view/Home';
import Research from 'view/Research';
import Result from 'view/result';
import Description from 'view/Description';

function App() {
  const [mainState, setMainState] = useState(APP_STATE.HOME);
  const [type, setType] = useState('');

  /**
   * state가 HOME 일 경우, type 을 초기화한다.
   * @author  uhjee
   */
  useEffect(() => {
    if (mainState && mainState === APP_STATE.HOME) setType('');
  }, [mainState]);

  return (
    <BrowserRouter>
      <Switch>
        <>
          <div
            className={`main-container${
              mainState === APP_STATE.DESC ? ' olive' : ''
            }`}
          >
            <Route
              exact
              path="/"
              render={({ history }) => (
                <Home history={history} setMainState={setMainState} />
              )}
            />
            <Route
              path="/research/:pageNum"
              render={({ history }) => (
                <Research
                  history={history}
                  setMainState={setMainState}
                  setType={setType}
                />
              )}
            />
            <Route
              exact
              path="/result"
              render={({ history, match }) => (
                <Result
                  history={history}
                  match={match}
                  setMainState={setMainState}
                  type={type}
                />
              )}
            />
            <Route
              path="/desc/:dogType"
              render={({ history }) => (
                <Description
                  type={type}
                  history={history}
                  setMainState={setMainState}
                />
              )}
            />
          </div>
        </>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
