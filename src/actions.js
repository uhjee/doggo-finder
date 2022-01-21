/*
* action types - 우리가 하고자 하는 행동
* */
export const LEFT = "SHOT_LEFT"
export const CENTER = "SHOT_CENTER"
export const RIGHT = "SHOT_RIGHT"
export const BOMB = "SHOT_BOMB"

/*
* action creators - 각 행동에 대해 특정 형태의 객체를 아웃풋으로 내는 함수
* */
export function L() {
    return { type: LEFT }
}
export function C() {
    return{ type: CENTER }
}
export function R() {
    return { type: RIGHT }
}
export function B(bomb) {
    return { type:BOMB, bomb:bomb }
}

//==========================================================================================
export const NEXT = "GO_NEXT"
export const PREV = "GO_PREV"
export function next() {
    return { type: NEXT }
}
export function prev() {
    return { type: PREV }
}