import React, {useState} from "react";
import Answer from "../comp/Answer";
import { CONTENTS } from '../constant/questionEnum.js';


export default function Research() {
    const [page, setPage] = useState(0 );
    const item = CONTENTS.filter( item => item.page === page)[0]
    const selectAnswer = () => {
        //TODO 마지막일 때 페이지 이동 시키기
        if(page >= CONTENTS.length) {
            console.log("마지막 입니다")
        }else {
            setPage(page+1);
        }
    }
    return (
        <div>
            <p>{item.title}</p>
            <div>
                {
                    item.answerList.map(answer => <Answer key={answer.id} text={answer.title} handler={selectAnswer}/>)
                }
            </div>
        </div>
    )
}