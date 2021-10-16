import React, {useEffect} from 'react';
import KakaoShareButton from './KakaoShareButton'

export default function Layout() {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])
    return (
        <div>
            <KakaoShareButton />
        </div>
    )
}
