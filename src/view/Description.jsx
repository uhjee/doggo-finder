import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { RESULT_DESC_INFO } from 'constant/description';

import { isNil } from 'utils/commonUtil';

import '../scss/description.scss';

const Description = ({ type, history }) => {
  const [descInfo, setDescInfo] = useState({});

  useEffect(() => {
    if (!isNil(type)) {
      // setDescInfo(() => ({ ...RESULT_DESC_INFO[type] }));
      setDescInfo(() => ({ ...RESULT_DESC_INFO['ISTJ'] }));
    }
    return () => {
      setDescInfo({});
    };
  }, [type]);

  return (
    <>
      <div className="desc-container">
        <Link to="/">홈</Link>
        <h1 className="desc-title text--white">{descInfo.title}</h1>
        <div className="desc-box">
          <img
            className="desc-box__img"
            src={descInfo.imagePath}
            alt={descInfo.title}
          />
          <div className="desc-box__text">
            <h3
              className="desc-box_subtitle"
              // ! dangerouslySetInnerHTML :: react 내에서 innerHTML 사용하는 방법(XSS 방지 목적)
              dangerouslySetInnerHTML={{ __html: descInfo.subTitle }}
            ></h3>
            <p dangerouslySetInnerHTML={{ __html: descInfo.descText }}></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
