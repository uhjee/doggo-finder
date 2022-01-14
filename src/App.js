import './App.scss';
import React, { useState } from 'react'; // npm install react-router-dom 로 설치
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { APP_STATE } from 'constant/stringEnum';

import Home from 'view/Home';
import Research from 'view/Research';
import Result from 'view/result';
import Description from 'view/Description';

function App() {
  const [state, setState] = useState(APP_STATE.HOME);
  const [type, setType] = useState('');
  return (
    <BrowserRouter>
      <Switch>
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
            exact
            path="/research"
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
            render={({ history }) => (
              <Result history={history} setState={setState} />
            )}
          />
          <Route
            path="/desc"
            render={({ history }) => <Description type={type} />}
          />
        </div>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
