import React from 'react';

import Button from 'components/Button';
import successImage from 'assets/images/success_image.png';

import { RESULT_VIEWTYPE } from 'constant/stringEnum';

const Confirm = ({ setView }) => {
  const moveDescView = () => {
    setView(RESULT_VIEWTYPE.DESCRIPTION);
  };

  return (
    <>
      <div
        className="img_success"
        style={{ backgroundImage: `url(${successImage})` }}
      ></div>
      <h3> 어떤 강아지가 찾아왔을까요? 🐶</h3>
      <Button text="결과 확인하기" handler={moveDescView} />
    </>
  );
};

export default Confirm;
