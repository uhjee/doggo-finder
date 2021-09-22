import React from 'react';
import { useEffect, useRef } from 'react';
import '../scss/button.scss';

const Button = ({ text, handler }) => {
  const useClick = onClick => {
    if (typeof onClick !== 'function') {
      throw new Error('click 이벤트 콜백함수  - 함수가 아님');
    }

    const element = useRef();

    useEffect(() => {
      if (element && element.current) {
        element.current.addEventListener('click', onClick);
      }
      return () => {
        if (element && element.current) {
          element.current.removeEventListener('click', onClick);
        }
      };
    }, []);
    return element;
  };
  const title = useClick(handler);

  return (
    <>
      <div className="button" ref={title}>
        {text}
      </div>
    </>
  );
};
// const Button = styled.button`
//     width: 7rem;
//     height: 3rem;
//     background: #c72e45;
//     border-radius: 12px;
//     font-weight: bold;
//     color: #ffffff;
//     font-family: 'SBAggroB';
//     font-size: 15px;
// `;
//git test
//git test jimny
export default Button;
