import React from 'react';
import { useState, useEffect } from 'react';

import { useInterval } from 'common/customHooks';

import 'scss/result.scss';
import { isNil } from 'utils/commonUtil';
import { RESULT_VIEWTYPE } from 'constant/stringEnum';

const Progressive = ({ setView }) => {
  const [imageNum, setImageNum] = useState(0);

  const changeImageNum = () => {
    setImageNum(imageNum === 0 ? 1 : 0);
  };

  useInterval(() => {
    changeImageNum();
  }, 500);

  useEffect(() => {
    setTimeout(() => {
      setView(RESULT_VIEWTYPE.CONFIRM);
    }, 2500);
  });

  return (
    <>
      {/* {!isNil(imageNum) && imageNum === 0 && ( */}
      <img
        className={`waiting_img ${
          !isNil(imageNum) && imageNum === 0 ? '' : 'reverse'
        }`}
        src="img/waiting_img.png"
        alt="waiting_img"
      />
      {/* )}
      {!isNil(imageNum) && imageNum === 1 && (
        <img
          className="waiting_img reverse"
          src="img/waiting_img.png"
          alt="waiting_img"
        />
      )} */}
      <div className="text--grey"> 당신의 강아지가 달려오는 중입니다... </div>
      <p className="creator text--smaller text--grey">
        Designed by ohmjeemin 🧡 uhjee
      </p>
    </>
  );
};

export default Progressive;
