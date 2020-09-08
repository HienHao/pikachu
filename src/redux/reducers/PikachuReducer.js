import { v4 as uuidv4 } from 'uuid';
import * as ActionTypes from "../actions/ActionTypes";

const elements = [
    {id: uuidv4(), image: '../assets/images/1.png', type: 'pikachu1', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/2.png', type: 'pikachu2', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/3.png', type: 'pikachu3', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/4.png', type: 'pikachu4', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/5.png', type: 'pikachu5', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/6.png', type: 'pikachu6', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/7.png', type: 'pikachu7', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/8.png', type: 'pikachu8', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/9.png', type: 'pikachu9', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/10.png', type: 'pikachu10', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/11.png', type: 'pikachu11', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/12.png', type: 'pikachu12', statusEnable: false, barrier: false},
]

const initialState = matrixArray16x9(randomElements(elements));

// random mang 1 chieu
function randomElements(elements) {
    //sinh 114 phan tu trong state
    // trong do 1 phan tu duoc gen ra 12 lan
    let newArray = [];
    function genOneHundredFortyFourElements(id, image, type, statusEnable, barrier) {
        for (let i = 0; i < 12; i++) {
            newArray.push({id: uuidv4(), image, type, statusEnable, barrier});
        }
        return newArray;
    }
    elements.map(e => genOneHundredFortyFourElements(e.id, e.image, e.type, e.statusEnable, e.barrier));
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

// can xem lai
function matrixArray16x9(elements) {
    let arraySixteenElements = null;
    let matrixArray = [];
    let arrayBarrier = [];
    for(let i = 0; i < 18; i++) {
        arrayBarrier.push({image: '', barrier: true});
    }
    matrixArray.unshift(arrayBarrier);
    let startSlice = 0, endSlice = startSlice + 16;
    const limit = 16;
    let row = 1;
    for(let i = 0; i < (elements.length / limit) ; i++) {
        startSlice = (row - 1) * limit;
        endSlice = row * limit;
        arraySixteenElements = elements.slice(startSlice, endSlice);
        arraySixteenElements.push({image: '', barrier: true});
        arraySixteenElements.unshift({image: '', barrier: true});
        matrixArray.push(arraySixteenElements);
        row++;
    }
    matrixArray.push(arrayBarrier);
    return matrixArray;
}

function checkLineX(matrix, y1, y2, x) {
    debugger;
    //check point min max
    const min = Math.min(y1, y2);
    const max = Math.max(y1, y2);
    //run col
    for(let y = min+1; y < max; y++) {
        if(matrix[x][y].barrier !== true) {
            console.log('die ', x,' , ', y);
            return false;
        }
        console.log('success ', x,' , ', y);
    } 
    return true;
}

function checkLineY(matrix, x1, x2, y) {
    //check point min, max
    const min = Math.min(x1, x2);
    const max = Math.max(x1, x2);
    //run row
    for(let x = min+1; x < max; x++) {
        if(matrix[x][y].barrier !== true) {
            console.log('die ', x,' , ', y);
            return false;
        }
        console.log('success ', x,' , ', y);
    }
    return true;
}
function checkLineY1(matrix, x1, x2, y) {
    //check point min, max
    const min = Math.min(x1, x2);
    const max = Math.max(x1, x2);
    //run row
    for(let x = min; x < max; x++) {
        if(matrix[x][y].barrier !== true) {
            console.log('die ', x,' , ', y);
            return false;
        }
        console.log('success ', x,' , ', y);
    }
    return true;
}
function checkLineYHaveBarrier(matrix, x1, y1, x2, y2) {
    debugger;
    const yMin = Math.min(y1, y2);
    const yMax = Math.max(y1, y2);
    let x = x1+1;
    const checkLine = checkLineY1(matrix, x1, x, yMin);
    debugger;
    if (checkLineY1(matrix, x1, x, yMin)) {
        debugger;
        const checklinex = checkLineX(matrix, yMin, yMax, x);
        const checkliney = checkLineY(matrix, x, x2, yMax);
        debugger;
        if (checkLineX(matrix, yMin, yMax, x)
        && checkLineY(matrix, x, x2, yMax)) {
            console.log('check line x have barrier');
            console.log('('+x1+','+yMin+') -> ('+x+','+yMin+') -> ('+x+','+yMax+') -> ('+x2+','+yMax+')');
            return true;
        }
    } else {
        x1++;
        if (x === 18) {
            x = x1 - 1;
            checkLineYHaveBarrier(matrix, x, y1, x2, y2);
            x--;
            if(x === 0) return false;
        }
        checkLineYHaveBarrier(matrix, x, y1, x2, y2);
    }
}

function checkLineXHaveBarrier(matrix, x1, y1, x2, y2) {
    
}

//kiem tra lai dau vao khi gap loi
function checkReactX(matrix, x1, y1, x2, y2) {
    console.log('ckeck react x');
    // find point have y min and max
    let pMinY = {x: x1, y: y1}, pMaxY = {x: x2,y: y2};
    if(y1 > y2) {
       pMinY = {x2, y2};
       pMaxY = {x1, y1};
    }
    if(x1 === x2) return false;
    for(let y = pMinY.y + 1;y < pMaxY.y; y++) {
        // (matrix[pMaxY.x][y].barrier === true)
        if( checkLineX(matrix, pMinY.y, y, pMinY.x)
            && checkLineY(matrix, pMinY.x, pMaxY.x, y)
            && checkLineX(matrix, y, pMaxY.y, pMaxY.x)) {
                console.log('React x');
                console.log("(" + pMinY.x + "," + pMinY.y + ") -> ("
                + pMinY.x + "," + y + ") -> (" + pMaxY.x + "," + y
                + ") -> (" + pMaxY.x + "," + pMaxY.y + ")");
                return true;
            }
    }
    return false;
}

function checkReactY(matrix, x1, y1, x2, y2) {
    debugger;
    console.log('ckeck react y');
    // find point have y min and max
    let pMinX = {x: x1, y: y1}, pMaxX = {x: x2,y: y2};
    if(x1 > x2) {
       pMinX = {x2, y2};
       pMaxX = {x1, y1};
    }
    debugger;
    if(y1 === y2) return false;
    debugger;
    for(let x = pMinX.x + 1;x < pMaxX.x; x++) {
        // (matrix[pMaxY.x][y].barrier === true)
        if( checkLineX(matrix, pMinX.x, x, pMinX.y)
            && checkLineY(matrix, pMinX.y, pMaxX.y, x)
            && checkLineX(matrix, x, pMaxX.x, pMaxX.y)) {
                console.log('React y');
                console.log("(" + pMinX.x + "," + pMinX.y + ") -> (" + x
                + "," + pMinX.y + ") -> (" + x + "," + pMaxX.y
                + ") -> (" + pMaxX.x + "," + pMaxX.y + ")");
                return true;
            }
    }
    return false;
}

function checkTwoLineY(matrix, x1, y1, x2, y2) {
    console.log('check two line y');
    let pMin = {x: x1, y: y1}, pMax = {x: x2, y: y2};
    if(x1 > x2) {
        pMin = {x1, y2};
        pMax = {x1, y1};
    }
    for(let x = pMin.x; x < pMax.x; x++) {
        if(checkLineX(matrix, pMin.y, pMax.y, pMin.x)
            && checkLineY(matrix, pMin.x, pMax.x, pMax.y)) {
                console.log('Two line x');
                console.log('('+pMin.x+','+pMin.y+') -> ('+pMin.x +','+pMax.y+') -> ('+pMax.x+','+pMax.y+')');
                return true;
            }
    }
    return false;
}

function checkTwoLineX(matrix, x1, y1, x2, y2) {
    console.log('check two line x');
    let pMin = {x: x1, y: y1}, pMax = {x: x2, y: y2};
    if(y1 > y2) {
        pMin = {x1, y2};
        pMax = {x1, y1};
    }
    for(let y = pMin.y; y < pMax.y; y++) {
        if(checkLineY(matrix, pMin.x, pMax.x, pMin.y)
            && checkLineX(matrix, pMin.y, pMax.y, pMax.x)) {
                console.log('Two line y');
                console.log('('+pMin.x+','+pMin.y+') -> ('+pMin.x +','+pMax.y+') -> ('+pMax.x+','+pMax.y+')');
                return true;
            }
    }
    return false;
}

function checkMoreLineX(matrix, x1, y1, x2, y2) {
    console.log('check more line x');
    let pMinY = {x: x1, y: y1}, pMaxY = {x: x2, y: y2};
    if(y1 > y2) {
        pMaxY = {x2, y2};
        pMinY = {x1, y1};
    }
    if(y1 === y2) return false;
    for(let y = pMinY.y; y < pMaxY.y; y++) {
        if(checkLineX(matrix, pMinY.y, pMaxY.y, pMinY.x)
            && checkLineX(matrix, pMaxY.y, y, pMinY.x)
            && checkLineY(matrix, pMinY.x, pMaxY.x, y)
            && checkLineX(matrix, y, pMaxY.y, pMaxY.x)) {
            console.log('more line x');
            console.log('('+pMinY.x+','+pMinY.y+') -> (' +pMinY.x+','+pMaxY.y+') -> ('
            +pMinY.x+','+y+') -> ('+pMaxY.x+','+y
            +') -> ('+pMaxY.x+','+pMaxY.y+')');
            return true;
        }
    }
    return false;
}

function checkMoreLineY(matrix, x1, y1, x2, y2) {
    console.log('check more line y');
    let pMinX = {x: x1, y: y1}, pMaxX = {x: x2, y: y2};
    if(y1 > y2) {
        pMaxX = {x2, y2};
        pMinX = {x1, y1};
    }
    if(x1 === x2) return false;
    for(let x = pMinX.x; x < pMaxX.x; x++) {
        if(checkLineY(matrix, pMinX.x, pMaxX.x, pMinX.y)
            && checkLineY(matrix, pMaxX.x, x, pMinX.y)
            && checkLineX(matrix, pMinX.y, pMaxX.y, x)
            && checkLineY(matrix, x, pMaxX.x, pMaxX.y)) {
            console.log('more line y');
            console.log('('+pMinX.x+','+pMinX.y
                +') -> ('+pMaxX.x+','+pMinX.y+') -> ('
                +x+','+pMinX.y+') -> ('+x+','+pMaxX.y+
                ') -> ('+pMaxX.x+','+pMaxX.y+')');
            return true;
        }
    }
    return false;
}

function changeStatusEnable(state, element1, element2) {
    const item1 = state[element1.row].find(el1 => el1.id === element1.element.id);
    const item2 = state[element2.row].find(el2 => el2.id === element2.element.id);
    item1.statusEnable = true;
    item1.barrier = true;
    item2.statusEnable = true;
    item2.barrier = true;
}

function PikachuReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_MAP_PIKACHU:
            return [...state];
        case ActionTypes.CLICK_ELEMENT_SUCCESS:
            const {element1, element2} = action;
            // vi tri cua 2 phan tu
            const row1 = element1.row, row2 = element2.row;
            const col1 = element1.col, col2 = element2.col;
            const newState = [...state];
            debugger;
            if(row1 === row2) {
                if(checkLineX(newState, col1, col2, row1)) {
                    changeStatusEnable(newState, element1, element2);
                    // debugger;
                    console.log('line x');
                    // console.log(newState);    
                } else {
                    // checkLineYHaveBarrier(newState, row1, col1, row2, col2);
                    console.log('line x have barrier');
                }
            }
            if(col1 === col2) {
                if(checkLineY(newState, row1, row2, col1)) {
                    changeStatusEnable(newState, element1, element2);
                    console.log('line y');
                } else {

                }
               
            }
            if(checkReactX(newState, row1, col1, row2, col2)) {
                console.log('React x');
                debugger;
                changeStatusEnable(newState, element1, element2);
            }
            if(checkReactY(newState, row1, col1, row2, col2)) {
                console.log('React y');
                debugger;
                changeStatusEnable(newState, element1, element2);
            }
            if(checkTwoLineX(newState, row1, col1, row2, col2)) {
                console.log('React two line x');
                debugger;
                changeStatusEnable(newState, element1, element2);
            }
            if(checkTwoLineY(newState, row1, col1, row2, col2)) {
                console.log('React tow line y');
                debugger;
                changeStatusEnable(newState, element1, element2);
            }
            if(checkMoreLineX(newState, row1, col1, row2, col2)) {
                console.log('React more line x');
                debugger;
                changeStatusEnable(newState, element1, element2);
            }
            if(checkMoreLineY(newState, row1, col1, row2, col2)) {
                console.log('React more line y');
                debugger;
                changeStatusEnable(newState, element1, element2);
            }
            // thay doi state
            return [...newState];
        default:
            return state;
    }
}

export default PikachuReducer;

