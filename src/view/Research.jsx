import React, {useState} from "react";
import Answer from "components/Answer";
import Progress from "components/Progress";


import '../scss/research.scss';

import { CONTENTS } from 'constant/question.js';
import { APP_STATE } from 'constant/stringEnum.js';


export default function Research({ setState, setType }) {
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
    const [rate, setRate] = useState(0);
    const question = CONTENTS.filter(item => item.page === page)[0];

    /**
     * addPoint 호출 후 page를 바꾼다
     * @author ohmjeemin
     * @param type [String] type
     */
    const selectAnswer = type => {
        addPoint(type);
        updateRate();
        if(page === CONTENTS.length-1) {
            setState(APP_STATE.RESULT);
            getType();
        }
        else {
            setPage(page + 1);
        }
    }

    /**
     * 선택한 응답에 대한 타입에 점수를 더한다
     * @author ohmjeemin
     * @param type [String] type
     */
    const addPoint = type => {
        point[type] += 5
        setPoint(point);
    }

    /**
     * 점수를 통해 type을 얻는다
     * @author ohmjeemin
     */
    const getType = () => {
        const pointValueList = Object.values(point);
        const selectedTypeIndexList = [];
        let arr = [];
        let temp = 0;
        let resultType= "";

        pointValueList.forEach((point, idx) => {
            arr.push({
                "p": point,
                "idx": idx
            });
            temp++;
            if(temp === 2) {
                selectedTypeIndexList.push(arr[0].p > arr[1].p ? arr[0].idx : arr[1].idx);
                arr = [];
                temp = 0;
            }
        })

        const pointKeyList = Object.keys(point);
        selectedTypeIndexList.forEach(li => {
            resultType += pointKeyList[li]
        });

        setType(resultType);
    }

    const updateRate = () => {
        const rate = ((page + 1) / CONTENTS.length) * 100
        setRate(rate)
        console.log(page, '===', CONTENTS.length)
        console.log('rate===', rate)
    }

    return (
        <div className={"research"}>
            <Progress rate={rate}/>
            <div style={{ height:"400px" }}>
                <p className={"question"}>{question.title}</p>
                <div>
                    {question.answerList.map(answer => <Answer key={answer.id} text={answer.title} handler={() => selectAnswer(answer.value)}/>)}
                </div>
            </div>
        </div>
    )
}