import React from 'react';
import { useEffect, useState } from 'react';
import image from 'assets/images/dogs/dog_dachshund.png';
import IMAGE_ISTJ from 'assets/images/dogs/dog_labrador.png';

import { isNil } from 'utils/commonUtil';

const Description = ({ type }) => {
  // const imagePath = './resources/img/banners/3.jpg';
  // const imagePath = '../assets/images/dogs/dog_dachshund.png';

  const RESULT_DESC_INFO = {
    ISTJ: {
      image: IMAGE_ISTJ,
      subTitle: 'ISTJ <br/>언제나 싱글벙글! <br /> 해맑게 웃는 표정!',
      title: '레브라도 리트리버',
      descText:
        '너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요. <br /><br /> 너무나도 귀여운 강아지라구요.  너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.<br /> 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.',
    },
    ISFJ: {
      image: image,
      subTitle: 'ISFJ <br/>언제나 싱글벙글! <br /> 해맑게 웃는 표정!',
      title: '레브라도 리트리버',
      descText:
        '너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요. <br /><br /> 너무나도 귀여운 강아지라구요.  너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.<br /> 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.',
    },
    ISTP: {
      image: image,
      subTitle: 'ISTP <br/>언제나 싱글벙글! <br /> 해맑게 웃는 표정!',
      title: '레브라도 리트리버',
      descText:
        '너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요. <br /><br /> 너무나도 귀여운 강아지라구요.  너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.<br /> 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.',
    },
    ISFP: {
      image: image,
      subTitle: 'ISFP <br/>언제나 싱글벙글! <br /> 해맑게 웃는 표정!',
      title: '레브라도 리트리버',
      descText:
        '너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요. <br /><br /> 너무나도 귀여운 강아지라구요.  너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.<br /> 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.',
    },
    INFJ: {
      image: image,
      subTitle: 'INFJ <br/>언제나 싱글벙글! <br /> 해맑게 웃는 표정!',
      title: '레브라도 리트리버',
      descText:
        '너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요. <br /><br /> 너무나도 귀여운 강아지라구요.  너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.<br /> 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.',
    },
    INTJ: {
      image: image,
      subTitle: 'INTJ <br/>언제나 싱글벙글! <br /> 해맑게 웃는 표정!',
      title: '레브라도 리트리버',
      descText:
        '너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요. <br /><br /> 너무나도 귀여운 강아지라구요.  너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.<br /> 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.',
    },
    INFP: {
      image: image,
      subTitle: 'INFP <br/>언제나 싱글벙글! <br /> 해맑게 웃는 표정!',
      title: '레브라도 리트리버',
      descText:
        '너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요. <br /><br /> 너무나도 귀여운 강아지라구요.  너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.<br /> 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.',
    },
    INTP: {
      image: image,
      subTitle: 'INTP <br/>언제나 싱글벙글! <br /> 해맑게 웃는 표정!',
      title: '레브라도 리트리버',
      descText:
        '너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요. <br /><br /> 너무나도 귀여운 강아지라구요.  너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.<br /> 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.',
    },
    ESTP: {
      image: image,
      subTitle: 'ESTP <br/>언제나 싱글벙글! <br /> 해맑게 웃는 표정!',
      title: '레브라도 리트리버',
      descText:
        '너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요. <br /><br /> 너무나도 귀여운 강아지라구요.  너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.<br /> 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.',
    },
    ESFP: {
      image: image,
      subTitle: 'ESFP <br/>언제나 싱글벙글! <br /> 해맑게 웃는 표정!',
      title: '레브라도 리트리버',
      descText:
        '너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요. <br /><br /> 너무나도 귀여운 강아지라구요.  너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.<br /> 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.',
    },
    ESTJ: {
      image: image,
      subTitle: 'ESTJ <br/>언제나 싱글벙글! <br /> 해맑게 웃는 표정!',
      title: '레브라도 리트리버',
      descText:
        '너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요. <br /><br /> 너무나도 귀여운 강아지라구요.  너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.<br /> 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.',
    },
    ESFJ: {
      image: IMAGE_ISTJ,
      subTitle: 'ESFJ <br/>언제나 싱글벙글! <br /> 해맑게 웃는 표정!',
      title: '레브라도 리트리버',
      descText:
        '너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요. <br /><br /> 너무나도 귀여운 강아지라구요.  너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.<br /> 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.',
    },
    ENFP: {
      image: image,
      subTitle: 'ENFP <br/>언제나 싱글벙글! <br /> 해맑게 웃는 표정!',
      title: '레브라도 리트리버',
      descText:
        '너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요. <br /><br /> 너무나도 귀여운 강아지라구요.  너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.<br /> 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.',
    },
    ENTP: {
      image: image,
      subTitle: 'ENTP <br/>언제나 싱글벙글! <br /> 해맑게 웃는 표정!',
      title: '레브라도 리트리버',
      descText:
        '너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요. <br /><br /> 너무나도 귀여운 강아지라구요.  너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.<br /> 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.',
    },
    ENFJ: {
      image: image,
      subTitle: 'ENFJ <br/> 언제나 싱글벙글! <br /> 해맑게 웃는 표정!',
      title: '레브라도 리트리버',
      descText:
        '너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요. <br /><br /> 너무나도 귀여운 강아지라구요.  너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.<br /> 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.',
    },
    ENTJ: {
      image: image,
      subTitle: 'ENTJ <br/> 언제나 싱글벙글! <br /> 해맑게 웃는 표정!',
      title: '레브라도 리트리버',
      descText:
        '너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요. <br /><br /> 너무나도 귀여운 강아지라구요.  너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.<br /> 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.',
    },
  };
  console.log(type);

  const [descInfo, setDescInfo] = useState({});

  useEffect(() => {
    if (!isNil(type)) {
      setDescInfo(RESULT_DESC_INFO[type]);
    }
    return () => {
      setDescInfo({});
    };
  }, [type]);

  return (
    <>
      <div className="desc-container">
        <p
          className="text--white"
          // ! dangerouslySetInnerHTML :: react 내에서 innerHTML 사용하는 방법(XSS 방지 목적)
          dangerouslySetInnerHTML={{ __html: descInfo.subTitle }}
        ></p>
        <h1 className="desc-title text--white">{descInfo.title}</h1>
        <div className="desc-box">
          <div
            className="desc-box__img"
            style={{
              backgroundImage: `url(${descInfo.image})`,
            }}
          ></div>
          <div
            className="desc-box__text"
            dangerouslySetInnerHTML={{ __html: descInfo.descText }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Description;
