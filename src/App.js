import './App.scss';
import React, { useState } from 'react'; // npm install react-router-dom 로 설치

import { APP_STATE } from 'constant/stringEnum';

import Home from 'view/Home';
import Research from 'view/Research';
import Result from 'view/Result';

function App() {
  const [state, setState] = useState(APP_STATE.HOME);
  const [type, setType] = useState("");
  return (
    <>
      <div className="main-container">
        {state === APP_STATE.HOME && <Home setState={setState} />}
        {state === APP_STATE.RESEARCH && <Research setState={setState} setType={setType} />}
        {state === APP_STATE.RESULT && <Result setState={setState} type={type}/>}
      </div>
    </>
  );
}

export default App;
