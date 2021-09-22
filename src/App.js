import './App.scss';
import Home from './view/Home';
import Research from './view/Research';
import Result from './view/Result';
import React, { useState } from 'react'; // npm install react-router-dom 로 설치

import { APP_STATE } from './constant/stringEnum';

function App() {
  const [state, setState] = useState(APP_STATE.HOME);
  return (
    <>
      <div className="main-container">
        {state === APP_STATE.HOME && <Home setState={setState} />}
        {state === APP_STATE.RESEARCH && <Research setState={setState} />}
        {state === APP_STATE.RESULT && <Result setState={setState} />}
      </div>
    </>
  );
}

export default App;
