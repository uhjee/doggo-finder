import React, {useEffect, useRef} from 'react';
import '../scss/button.scss';
import '../scss/Answer.scss';


const Answer = ({ text, handler }) => {
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
    return <div ref={title} className={"answer"}>{ text }</div>;
}

export default Answer;
