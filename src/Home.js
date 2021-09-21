import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Home = () => {
    return (
        <div>
            <p>나와 잘 맞는 강아지 종류는 뭘까?</p>
            <p>내 성격에 맞는 견종 찾기 테스트</p>
            <p id="Logo">doggo finder</p>
            <Button
                onClick={() => alert("클릭")}
            >시작하기
            </Button>
            <Link to="/research">research로 이동</Link>
        </div>
    );
}

export default Home;
