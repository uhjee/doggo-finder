import React, {useState} from "react";
import Answer from "components/Answer";
import { CONTENTS } from 'constant/question.js';
import { APP_STATE } from 'constant/stringEnum.js';


export default function Research({ setState }) {
    const [page, setPage] = useState(0 );
    const [point, setPoint] = useState({
        I: 0,
        E: 0,
        N: 0,
        S: 0,
        T: 0,
        F: 0,
        P: 0,
        J: 0
    });
    const item = CONTENTS.filter(item => item.page === page)[0];
    const selectAnswer = (value) => {
        addPoint(value)
        if(page === CONTENTS.length-1) {
            setState(APP_STATE.RESULT);
            getType();
        }
        else {
            setPage(page+1);
        }
    }
    const addPoint = (v) => {
        point[v] += 5
        setPoint(point);
    }
    const getType = () => {
        const pointList = Object.values(point);
        const list = [];
        let arr = [];
        let temp = 0;
        let result = "";

        pointList.forEach((p, idx) => {
            arr.push({
                "p": p,
                "idx": idx
            });
            temp++;
            if(temp===2) {
                list.push(arr[0].p > arr[1].p ? arr[0].idx : arr[1].idx);
                arr = [];
                temp = 0;
            }
        })

        const pointKeyList = Object.keys(point);
        list.forEach(li => {
            result += pointKeyList[li]
        });

        console.log("결과는 ----",result)
    }

    return (
        <div>
            <p>{item.title}</p>
            <div>
                {item.answerList.map(answer => <Answer key={answer.id} text={answer.title} handler={() => selectAnswer(answer.value)}/>)}
            </div>
        </div>
    )
}