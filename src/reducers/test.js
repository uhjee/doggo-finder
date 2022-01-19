//편의를 위하여 각 DOM 엘리먼트에 대한 레퍼런스를 만들어준다
const elNumber = document.getElementById("number");
const btnIncrement = document.getElementById("increment");
const btnDecrement = document.getElementById("decrement");

//액션 타입을 정의해준다
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//액션 객체를 만들어주는 액션 생성 함수
const increment = (diff) => ({ type: INCREMENT, diff: diff });
const decrement = () => ({ type: DECREMENT });

//초기값 설정
const initialState = {
    number: 0
}

//리듀서 함수. state와 action을 파라미터로 받아온다.
const counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                number: state.number + action.diff
            };
        case DECREMENT:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}

// 스토어를 만들 땐 createStore에 리듀서 함수를 넣어서 호출한다

const { createStore } = Redux;
const store = createStore(counter);

// 상태가 변경될 때 마다 호출시킬 listener 함수
const render = () => {
    console.log("실행")
}

// // 스토어에 구독을 하고, 뭔가 변화가 있으면 render함수 실행
// store.subscribe(render);
// // 초기렌더링을 위하여 직접 실행시켜준다
// render();
//
// btnIncrement.addEventListener('click', () => {
//     store.dispatch(increment(25));
// })
//
//
// btnDecrement.addEventListener('click', () => {
//     store.dispatch(decrement());
// })