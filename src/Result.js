import React from 'react';
import { Link } from 'react-router-dom';

const Result = () => {
    return (
        <div>
            <p>안녕하세요 result이다</p>
            <Link to="/research">research로 이동</Link>
        </div>
    );
}

export default Result;
