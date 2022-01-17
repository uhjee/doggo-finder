import './App.scss';
import React, { useState, useEffect } from 'react'; // npm install react-router-dom 로 설치
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { APP_STATE } from 'constant/stringEnum';

import Home from 'view/Home';
import Research from 'view/Research';
import Result from 'view/result';
import Description from 'view/Description';

function App() {
  const [state, setState] = useState(APP_STATE.HOME);
  const [type, setType] = useState('');

  /**
   * state가 HOME 일 경우, type 을 초기화한다.
   * @author  uhjee
   */
  useEffect(() => {
    if (state && state === APP_STATE.HOME) setType('');
  }, [state]);

  return (
    <BrowserRouter>
      <Switch>
        <>
          <div
            className={`main-container${
              state === APP_STATE.DESC ? ' olive' : ''
            }`}
          >
            <Route
              exact
              path="/"
              render={({ history }) => (
                <Home history={history} setState={setState} />
              )}
            />
            <Route
              path="/research/:pageNum"
              render={({ history }) => (
                <Research
                  history={history}
                  setState={setState}
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
                  setState={setState}
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
                  setState={setState}
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
