import React from 'react';
import { useClick } from '../common/customHooks';
import '../scss/button.scss';

const Button = ({ className = '', text, handler, color = 'sandShell' }) => {
  const button = useClick(handler);

  return (
    <span className={`button ${color} ${className}`} ref={button}>
      {text}
    </span>
  );
};

export default Button;
