import * as ActionTypes from "../actions/ActionTypes";

export function getMapPikachu() {
    return {type: ActionTypes.GET_MAP_PIKACHU}
}

export function clickElement(element, index) {
    return {type: ActionTypes.CLICK_ELEMENT, element, index}
}