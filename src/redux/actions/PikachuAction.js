import * as ActionTypes from "../actions/ActionTypes";

export function getMapPikachu() {
    return {type: ActionTypes.GET_MAP_PIKACHU}
}

export function clickElement(element, row, col) {
    return {type: ActionTypes.CLICK_ELEMENT, element, row, col}
}