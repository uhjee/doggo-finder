import { useEffect, useRef } from 'react';

import { isNil } from 'utils/commonUtil';

export const useClick = onClick => {
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

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // useRef를 사용해 가장 마지막 콜백 기억
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // set up the interval
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (!isNil(delay)) {
      let id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  });
};
