import React from 'react';
import { useEffect, useState } from 'react';

import { RESULT_DESC_INFO } from 'constant/description';

import { isNil } from 'utils/commonUtil';

const path = 'img/dog_king_charles.png';

const Description = ({ type }) => {
  // const initialDescInfo = {
  //   title: '',
  //   subTitle: '',
  //   image: '',
  //   descText: '',
  // };

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
        <h1 className="desc-title text--white">{descInfo.title}</h1>
        <div className="desc-box">
          <img
            className="desc-box__img"
            src={path}
            alt="img/dog_dog_king_charles.png"
          />
          {/* <div
            className="desc-box__img"
            style={{
              backgroundImage: `url(${descInfo.image})`,
            }}
          ></div> */}
          <div className="desc-box__text">
            <h3 className="desc-box_subtitle"
              // className="text--white"
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
