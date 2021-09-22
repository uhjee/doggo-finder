import React, {useState} from "react";
import Answer from "../comp/Answer";

const arr = [
    {
        "page": 0,
        "title":"질문1",
        "answerList": [
            {
               "id": "a0",
               "title": "답변 1",
            },
            {
                "id": "a1",
                "title": "답변 2",
            },
            {
                "id": "a2",
                "title": "답변 3"
            }
        ]
    },
    {
        "page": 1,
        "title":"질문2",
        "answerList": [
            {
                "id": "b0",
                "title": "답변 2-1",
            },
            {
                "id": "b1",
                "title": "답변 2-2",
            },
            {
                "id": "b2",
                "title": "답변 2-3"
            }
        ]
    },
    {
        "page": 2,
        "title":"질문3",
        "answerList": [
            {
                "id": "c0",
                "title": "답변 3-1",
            },
            {
                "id": "c1",
                "title": "답변 3-2",
            },
            {
                "id": "c2",
                "title": "답변 3-3"
            }
        ]
    }
]

export default function Research() {
    const [page, setPage] = useState(0);
    const item = arr.filter( item => item.page===page)[0]
    return (
        <div>
            <p>{item.title}</p>
            <div>
                {
                    item.answerList.map(answer => <Answer text={answer.title}/>)
                }
            </div>
        </div>
    )
}