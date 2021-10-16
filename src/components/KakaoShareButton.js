import React, { useEffect } from 'react'
const KakaoShareButton = () => {
    useEffect(() => {
        createKakaoButton()
    }, [])
    const createKakaoButton = () => {
        // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
        if (window.Kakao) {
            const kakao = window.Kakao
            // 중복 initialization 방지
            if (!kakao.isInitialized()) {
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                kakao.init(process.env.REACT_APP_KAKAO_KEY)
            }
            kakao.Link.createDefaultButton({
                // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
                container: '#kakao-link-btn',
                objectType: 'feed',
                content: {
                    title: '스트리트 도고 파인더',
                    description: '내 성격과 가장 잘 맞는 강아지 종류는 뭘까? 나와 딱 맞는 강아지 찾기 테스트',
                    imageUrl: 'IMAGE_URL', // i.e. process.env.FETCH_URL + /logo.png'
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
            })
        }
    }
    return (
        <div className="kakao-share-button">
             {/* Kakao share button */}
                 <button id="kakao-link-btn">
                 <img src="icons/kakao.png" alt="kakao-share-icon" />
             </button>
         </div>
    )
}
export default KakaoShareButton