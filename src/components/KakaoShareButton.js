import React, { useEffect } from 'react';

const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton();
  }, []);
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
      kakao.Link.createDefaultButton({
        // 해당 위치에 카카오링크 공유하기 버튼을 추가하고, 해당 버튼을 클릭했을 때 메세지 보내기를 요청
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '스트리트 도고 파인더',
          description:
            '내 성격과 가장 잘 맞는 강아지 종류는 뭘까? 나와 딱 맞는 강아지 찾기 테스트',
          //   imageUrl: process.env.REACT_FETCH_URL + logo512,

          imageUrl:
            process.env.REACT_FETCH_URL + __dirname + 'public/logo512.png',
          // i.e. process.env.FETCH_URL + /logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '테스트하러 gogo 🐶🚗',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };
  return (
    <div>
      <div
        style={{
          display: 'flex',
          border: '1px solid #eaeaea',
          padding: '5px 8px',
          borderRadius: '8px',
          background: '#ffffff',
        }}
      >
        <div
          style={{
            fontSize: '10px',
            marginRight: '10px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          친구들과 공유하기
        </div>
        <div id="kakao-link-btn">
          <img
            src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
            alt="kakao-share-icon"
            style={{ width: '30px', height: '30px', display: 'flex' }}
          />
        </div>
      </div>
    </div>
  );
};
export default KakaoShareButton;
