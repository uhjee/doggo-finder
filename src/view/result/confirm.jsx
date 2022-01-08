import React from 'react';

import Button from 'components/Button';

import { RESULT_VIEWTYPE } from 'constant/stringEnum';

const Confirm = ({ setView }) => {
  const moveDescView = () => {
    setView(RESULT_VIEWTYPE.DESCRIPTION);
  };

  return (
    <>
      <h3> 어떤 강아지가 찾아왔을까요? 🐶</h3>
      <Button text="결과 확인하기" handler={moveDescView} />
    </>
  );
};

export default Confirm;
