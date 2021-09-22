import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../comp/Button';

const Home = () => {
    return (
        <div>
            <p>나와 잘 맞는 강아지 종류는 뭘까?</p>
            <p>내 성격에 맞는 견종 찾기 테스트</p>
            <Button
                text="START"
                onClick={() => alert("클릭")}
            />
        </div>
    );
}

export default Home;
