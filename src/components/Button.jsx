import React from 'react';
import { useClick } from '../common/customHooks';
import '../scss/button.scss';

const Button = ({ text, handler }) => {
  const button = useClick(handler);

  return (
    <>
      <div className="button" ref={button}>
        {text}
      </div>
    </>
  );
};

export default Button;