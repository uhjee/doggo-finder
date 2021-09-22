import './App.scss';
import Home from './view/Home';
import Research from './view/Research';
import Result from './view/Result';
import React, { useState } from "react"; // npm install react-router-dom 로 설치

function App() {
    const [state, setState] = useState("home");
  return (
      <>
          <div className="main-container">
              { state === 'home' && <Home/> }
              { state === 'research' && <Research /> }
              { state === 'result' && <Result /> }
          </div>
      </>
  );
}

export default App;
