import React from 'react';
import Button from 'components/Button';
import Layout from 'components/Layout';

import '../scss/home.scss';

import { APP_STATE } from 'constant/stringEnum.js';

const Home = ({ history, setState }) => {
  setState(APP_STATE.HOME);

  const onStartClick = () => {
    history.push('/research/0');
  };

  return (
    <>
      <div className="home-container">
        <div className="home-text-box">
          <div className="desc">
            <p className="text--small text--grey">
              내 성격과 가장 잘 맞는 강아지 종류는 뭘까?
            </p>
            <p className="text--small text--grey">
              나와 딱 맞는 강아지 찾기 테스트
            </p>
          </div>
          <h2>doggo Finder</h2>
        </div>
        <Button text="START" handler={onStartClick} color="rockBrown" />

        <Layout />
        <p className="creator text--smaller text--grey">
          Designed by ohmjeemin 🧡 uhjee
        </p>
      </div>
    </>
  );
};

export default Home;
