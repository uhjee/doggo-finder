import React from 'react';
import { useEffect, useRef } from 'react';
import Button from '../comp/Button';
import { APP_STATE } from '../constant/stringEnum.js';



const Home = ({ setState }) => {

  const onStartClick = () => {
    console.log('click')
    setState(APP_STATE.RESEARCH);
  };

  return (
    <>
      <div>
        <p>나와 잘 맞는 강아지 종류는 뭘까?</p>
        <h2>내 성격에 맞는 견종 찾기 테스트</h2>
      </div>
      <Button text="START" handler={onStartClick}/>
    </>
  );
};

export default Home;
