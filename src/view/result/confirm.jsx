import React from 'react';

import Button from 'components/Button';

import { APP_STATE } from 'constant/stringEnum';

const Confirm = ({ setState }) => {
  const moveDescView = () => {
    setState(APP_STATE.DESC);
  };

  return (
    <>
      {/* <div
        className="img_success"
        style={{ backgroundImage: `url(${successImage})` }}
      ></div> */}
      <img
        className="img_success"
        src="img/success_img.png"
        alt="success_img"
      />
      <h3> 어떤 강아지가 찾아왔을까요? 🐶</h3>
      <Button text="결과 확인하기" handler={moveDescView} />
    </>
  );
};

export default Confirm;
