import React from 'react';
import { useClick } from '../common/customHooks';
import '../scss/button.scss';

const Button = ({ text, handler }) => {
  const title = useClick(handler);

  return (
    <>
      <div className="button" ref={title}>
        {text}
      </div>
    </>
  );
};

export default Button;
