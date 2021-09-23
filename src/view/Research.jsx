import React, {useState} from "react";
import Answer from "../comp/Answer";
import { CONTENTS } from '../constant/questionEnum.js';
import { APP_STATE } from '../constant/stringEnum.js';


export default function Research({ setState }) {
    const [page, setPage] = useState(0 );
    const item = CONTENTS.filter( item => item.page === page)[0]
    const selectAnswer = () => {
        console.log(CONTENTS.length, page)
        if(page === CONTENTS.length-1) {
            setState(APP_STATE.RESULT);
        }else {
            setPage(page+1);
        }
    }
    return (
        <div>
            <p>{item.title}</p>
            <div>
                {item.answerList.map(answer => <Answer key={answer.id} text={answer.title} handler={selectAnswer}/>)}
            </div>
        </div>
    )
}