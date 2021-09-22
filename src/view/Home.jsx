import '../scss/Home.scss';
import React from 'react';
import Button from '../comp/Button';
import { APP_STATE } from '../constant/stringEnum.js';

const Home = ({ setState }) => {
  const onStartClick = () => {
    console.log('click');
    setState(APP_STATE.RESEARCH);
  };

  return (
    <>
      <div className="home-container">
        <div className="home-text-box">
          <div className="desc">
            <p>내 성격과 가장 잘 맞는 강아지 종류는 뭘까?</p>
            <p>내와 딱 맞는 강아지 찾기 테스트</p>
          </div>
          <h2>doggo Finder</h2>
        </div>
        <Button text="START" handler={onStartClick} />
      </div>
    </>
  );
};

export default Home;
