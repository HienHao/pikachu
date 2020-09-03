import * as ActionTypes from "../actions/ActionTypes";


const elements = [
    {image: '../assets/images/pikachu-1.png', type: 'pikachu1', statusEnable: false},
    {image: '../assets/images/pikachu-2.png', type: 'pikachu2', statusEnable: false},
    {image: '../assets/images/pikachu-3.png', type: 'pikachu3', statusEnable: false},
    {image: '../assets/images/pikachu-4.png', type: 'pikachu4', statusEnable: false},
    {image: '../assets/images/pikachu-5.png', type: 'pikachu5', statusEnable: false},
    {image: '../assets/images/pikachu-6.png', type: 'pikachu6', statusEnable: false},
    {image: '../assets/images/pikachu-7.png', type: 'pikachu7', statusEnable: false},
    {image: '../assets/images/pikachu-8.png', type: 'pikachu8', statusEnable: false},
    {image: '../assets/images/pikachu-9.png', type: 'pikachu9', statusEnable: false},
    {image: '../assets/images/pikachu-10.png', type: 'pikachu10', statusEnable: false},
    {image: '../assets/images/pikachu-11.png', type: 'pikachu11', statusEnable: false},
    {image: '../assets/images/pikachu-12.png', type: 'pikachu12', statusEnable: false},
]

const initialState = matrixArray16x9(randomElements(elements));

function randomElements(elements) {
    //sinh 114 phan tu trong state
    // trong do 1 phan tu duoc gen ra 12 lan
    let newArray = [];
    function genOneHundredFortyFourElements(image, type, statusEnable) {
        for (let i = 0; i < 12; i++) {
            newArray.push({image, type, statusEnable});
        }
        return newArray;
    }
    elements.map(e => genOneHundredFortyFourElements(e.image, e.type, e.statusEnable));

    // random phan tu trong mang
    let indexItem = null;
    let item = null;
    let arrayElementsRandom = [];
    // them phan tu random vao mang moi va xoa o mang cu
    for (let i = 0; i < 144; i++) {
        indexItem = Math.floor(Math.random() * newArray.length);
        item = newArray[indexItem];
        arrayElementsRandom.push(item);
        newArray.splice(indexItem, 1);
    }
    return arrayElementsRandom;
}
function matrixArray16x9(elements) {
    let arraySixteenElements = null;
    let matrixArray = [];
    let startSlice = 0, endSlice = startSlice + 16;
    const limit = 16;
    let row = 1;
    for(let i = 0; i < (elements.length / limit); i++) {
        startSlice = (row - 1) * limit;
        endSlice = row * limit;
        arraySixteenElements = elements.slice(startSlice, endSlice);
        matrixArray.push(arraySixteenElements);
        row++;
    }
    return matrixArray;
}

function PikachuReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_MAP_PIKACHU:
            debugger;
            return [...state];
        default:
            return state;
    }
}

export default PikachuReducer;

