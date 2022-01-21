/*
* reducers
* */

import { combineReducers } from "redux" //많은 리듀서들을 이렇게 하나하나 합치는 작업을 해주는 함수
import {LEFT, CENTER, RIGHT, BOMB, NEXT, PREV} from "actions"

//리듀서 1(예시임)
function bubbles(state = "initial state", action) {
    switch (action.type) {
        case LEFT:
            return console.log("왼쪽"); //새로운 값을 리턴
        case CENTER:
            return console.log("센타");
        default:
            return state
    }
}

//또 다른 데이터에 관한 리듀서2(예시임)
function otherState(state = "other initial state", action) {
    switch (action.type) {
    }
}

//위의 리듀서들이 state의 각 값들을 핸들링 할 수 있게 매칭 - combineReducer 사용 안함(예시임)
function reducerNoCombine(state = {}, action) {
    return {
        bubbles: bubbles(state.bubbles, action),
        otherState: otherState(state.otherState, action)
    }
}


//=============================================================================================================
//HOME-CONTENTS-RESULT 이동하는 reducer
// function changeMainState(state="init main state", action) {
//     switch(action.type) {
//         case NEXT:
//             return console.log("넥스트");
//         case PREV:
//             return console.log("프리브");
//         default: console.log("디폴트");
//     }
// }

//위의 리듀서들이 state의 각 값들을 핸들링 할 수 있게 매칭 - combineReducer 사용
// export const reducer = combineReducers({
//     changeMainState
// })
