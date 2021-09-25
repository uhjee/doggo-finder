import React from 'react';
import { useState, useEffect } from 'react';

import { useInterval } from 'common/customHooks';

import 'scss/result.scss';
import { isNil } from 'utils/commonUtil';
import { RESULT_VIEWTYPE } from 'constant/stringEnum';

const Progressive = ({ setView }) => {
  const [imageNum, setImageNum] = useState(0);

  const changeImage = () => {
    setImageNum(imageNum === 0 ? 1 : 0);
  };

  useInterval(() => {
    changeImage();
  }, 500);

  useEffect(() => {
    setTimeout(() => {
      setView(RESULT_VIEWTYPE.CONFIRM);
    }, 5000);
  }, []);

  return (
    <>
      {!isNil(imageNum) && imageNum === 0 && (
        <div className="img img_progressive__00"></div>
      )}
      {!isNil(imageNum) && imageNum === 1 && (
        <div className="img img_progressive__01"></div>
      )}
      <div className="text--grey"> 강아지가 달려오는 중입니다... </div>
    </>
  );
};

export default Progressive;
