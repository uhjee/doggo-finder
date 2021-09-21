import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <p>안녕하세요 home이다</p>
            <Link to="/research">research로 이동</Link>
        </div>
    );
}

export default Home;
