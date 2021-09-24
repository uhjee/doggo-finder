import React, {useState} from "react";
import Answer from "@components/Answer";
import { CONTENTS } from '../constant/question.js';
import { APP_STATE } from '../constant/stringEnum.js';


export default function Research({ setState }) {
    const [page, setPage] = useState(0 );
    const item = CONTENTS.filter(item => item.page === page)[0];
    const obj = {
        "I": 0,
        "E": 0,
        "N": 0,
        "S": 0,
        "T": 0,
        "F": 0,
        "P": 0,
        "J": 0
    }


    const selectAnswer = (value) => {
        if(page === CONTENTS.length-1) setState(APP_STATE.RESULT);
        else {
            setPage(page+1);
            console.log(value);
        }
    }
    return (
        <div>
            <p>{item.title}</p>
            <div>
                {item.answerList.map(answer => <Answer key={answer.id} text={answer.title} handler={selectAnswer(answer.value)}/>)}
            </div>
        </div>
    )
}