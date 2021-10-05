import React from 'react';
import image from 'assets/images/dogs/dog_dachshund.png';

const Description = ({ type }) => {
  // const imagePath = './resources/img/banners/3.jpg';
  // const imagePath = '../assets/images/dogs/dog_dachshund.png';

  const RESULT_DESC_INFO = {
    ISTJ: {
      image: image,
      subTitle: '언제나 싱글벙글! <br /> 해맑게 웃는 표정!',
      title: '레브라도 리트리버',
      descText:
        '너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요. <br /><br /> 너무나도 귀여운 강아지라구요.  너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요. 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.<br /> 너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.너무나도 귀여운 강아지라구요.',
    },
    ISFJ: {},
    ISTP: {},
    ISFP: {},
    INFJ: {},
    INTJ: {},
    INFP: {},
    INTP: {},
    ESTP: {},
    ESFP: {},
    ESTJ: {},
    ESFJ: {},
    ENFP: {},
    ENTP: {},
    ENFJ: {},
    ENTJ: {},
  };
  console.log(type);
  return (
    <>
      <div className="desc-container">
        <p
          className="text--white"
          // ! dangerouslySetInnerHTML :: react 내에서 innerHTML 사용하는 방법(XSS 방지 목적)
          dangerouslySetInnerHTML={{ __html: RESULT_DESC_INFO.ISTJ.subTitle }}
        ></p>
        <h1 className="desc-title text--white">
          {RESULT_DESC_INFO.ISTJ.title}
        </h1>
        <div className="desc-box">
          <div
            className="desc-box__img"
            style={{
              backgroundImage: `url(${RESULT_DESC_INFO.ISTJ.image})`,
            }}
          ></div>
          <div
            className="desc-box__text"
            dangerouslySetInnerHTML={{ __html: RESULT_DESC_INFO.ISTJ.descText }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Description;
