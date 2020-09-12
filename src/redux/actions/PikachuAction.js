import * as ActionTypes from "../actions/ActionTypes";

export function getMapPikachu() {
    return {type: ActionTypes.GET_MAP_PIKACHU}
}

export function clickElement(matrix, element, row, col) {
    return {type: ActionTypes.CLICK_ELEMENT, matrix, element, row, col}
}

export function updateScore(element1, element2, score) {
    return {type: ActionTypes.SCORE, element1, element2, score}
}

export function updateLevel() {
    return {type: ActionTypes.LEVEL}
}

export function clickPosition(matrix) {
    return {type: ActionTypes.CLICK_POSITION, matrix}
}

export function clickReplay() {
    return {type: ActionTypes.CLICK_REPLAY}
}