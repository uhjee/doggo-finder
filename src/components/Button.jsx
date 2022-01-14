import React from 'react';
import { useClick } from '../common/customHooks';
import '../scss/button.scss';

const Button = ({ text, handler, color = 'sandShell' }) => {
  const button = useClick(handler);

  return (
    <>
      <div className={`button ${color}`} ref={button}>
        {text}
      </div>
    </>
  );
};

export default Button;
