import React from 'react';
import { useClick } from '../common/customHooks';
import '../scss/button.scss';

const Button = ({ className = '', text, handler, color = 'sandShell' }) => {
  const buttonEl = useClick(handler);

  return (
    <span className={`button ${color} ${className}`} ref={buttonEl}>
      {text}
    </span>
  );
};

export default Button;
