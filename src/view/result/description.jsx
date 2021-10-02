import React from 'react';
import image from 'assets/images/dogs/dog_dachshund.png';

const Description = () => {
  // const imagePath = './resources/img/banners/3.jpg';
  // const imagePath = '../assets/images/dogs/dog_dachshund.png';
  return (
    <>
      <div className="desc-container">
        <p className="text--white">
          언제나 싱글벙글!
          <br />
          해맑게 웃는 표정!
        </p>
        <h1 className="desc-title text--white">골든 리트리버</h1>
        <div className="desc-box">
          <div
            className="desc-box__img"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
          <div className="desc-box__text">
            너무나도 귀여운 강아지죠.너무나도 귀여운 강아지죠.너무나도 귀여운
            강아지죠.너무나도 귀여운 강아지죠.
            <br />
            <br />
            너무나도 귀여운 강아지죠.너무나도 귀여운 강아지죠.너무나도 귀여운
            강아지죠.너무나도 귀여운 강아지죠.너무나도 귀여운 강아지죠.너무나도
            귀여운 강아지죠.너무나도 귀여운 강아지죠.
            <br />
            <br />
            너무나도 귀여운 강아지죠.너무나도 귀여운 강아지죠.너무나도 귀여운
            강아지죠.너무나도 귀여운 강아지죠.너무나도 귀여운 강아지죠.너무나도
            귀여운 강아지죠.너무나도 귀여운 강아지죠.아지죠.너무나도 귀여운
            강아지죠.너무나도 귀여운 강아지죠.너무나도 귀여운 강아지죠.너무나도
            귀여운 강아지죠.너무나도 귀여운 강아지죠.너무나도 귀여운
            강아지죠.아지죠.너무나도 귀여운 강아지죠.너무나도 귀여운
            강아지죠.너무나도 귀여운 강아지죠.너무나도 귀여운 강아지죠.너무나도
            귀여운 강아지죠.너무나도 귀여운 강아지죠.
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
