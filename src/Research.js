import React from "react";
import {Link} from "react-router-dom";
export default function Research() {
    return (
        <div>
            <p>안녕하세요 Research이다</p>
            <Link to="/result">result로 이동</Link>
        </div>
    )
}