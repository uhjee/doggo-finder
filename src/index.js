import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

require('dotenv').config();

/*
* index.js : src 폴더에 포함되어 있다. 메인 프로그램이라고 할 수 있다. 여기서 HTML 템플릿 및 js컴포넌트 조합ㅎㅏ여 렌더링
* App.js : src 폴더에 포함되어 있고, 컴포넌트를 정의하는 프로그램이다.
* index.html : public 폴더에 있고 메인 프로그램인 index.js에 대응되는 것으로 HTML 템플릿 파일이다.y
* */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
