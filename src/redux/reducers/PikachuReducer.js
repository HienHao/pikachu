import { v4 as uuidv4 } from 'uuid';
import * as ActionTypes from "../actions/ActionTypes";

const elements = [
    {id: uuidv4(), image: '../assets/images/pikachu-1.png', type: 'pikachu1', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/pikachu-2.png', type: 'pikachu2', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/pikachu-3.png', type: 'pikachu3', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/pikachu-4.png', type: 'pikachu4', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/pikachu-5.png', type: 'pikachu5', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/pikachu-6.png', type: 'pikachu6', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/pikachu-7.png', type: 'pikachu7', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/pikachu-8.png', type: 'pikachu8', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/pikachu-9.png', type: 'pikachu9', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/pikachu-10.png', type: 'pikachu10', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/pikachu-11.png', type: 'pikachu11', statusEnable: false, barrier: false},
    {id: uuidv4(), image: '../assets/images/pikachu-12.png', type: 'pikachu12', statusEnable: false, barrier: false},
]

const initialState = matrixArray16x9(randomElements(elements));

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

function checkLineX(matrix, y1, y2, x) {
    //check point min max
    const min = Math.min(y1, y2);
    const max = Math.max(y1, y2);
    //run col
    for(let y = min; y <= max; y++) {
        if(matrix[x][y].barrier === true) {
            return false;
        }
    } 
    return true;
}

function checkLineY(matrix, x1, x2, y) {
    //check point min, max
    const min = Math.min(x1, x2);
    const max = Math.max(x1, x2);
    //run row
    for(let x = min; x <= max; x++) {
        if(matrix[x][y].barrier === true) {
            return false;
        }
    }
    return true;
}

const matrix = [[
        {id: "1c9a90b9-4763-402f-8b80-5c7266a18ec7", image: "../assets/images/pikachu-3.png", type: "pikachu3", statusEnable: false, barrier: false},
        {id: "91fd6e28-f9ec-4403-a6b1-419b4b28b0fd", image: "../assets/images/pikachu-4.png", type: "pikachu4", statusEnable: false, barrier: false},
        {id: "d68d7a38-de93-4386-b948-b2e36fdb20ca", image: "../assets/images/pikachu-10.png", type: "pikachu10", statusEnable: false, barrier: false},
        {id: "edf7b901-6e86-430f-8402-071762825bcf", image: "../assets/images/pikachu-4.png", type: "pikachu4", statusEnable: false, barrier: false},
        {id: "69b1dc1d-27ae-4e43-90ea-4cdb957e1f8f", image: "../assets/images/pikachu-11.png", type: "pikachu11", statusEnable: true, barrier: false},
        {id: "dedd31a6-d755-40d2-888f-bc17cc66a6e1", image: "../assets/images/pikachu-1.png", type: "pikachu1", statusEnable: false, barrier: false},
        {id: "05fa9c38-427b-4b9b-9637-1ec4782b8b35", image: "../assets/images/pikachu-11.png", type: "pikachu11", statusEnable: true, barrier: false},
        {id: "4f1d0279-7714-40d6-917b-44014c04a87d", image: "../assets/images/pikachu-9.png", type: "pikachu9", statusEnable: false, barrier: false},
        {id: "7719258f-a40b-4a30-959a-870b37955340", image: "../assets/images/pikachu-5.png", type: "pikachu5", statusEnable: false, barrier: false},
        {id: "3153e4b5-f69f-428d-af9c-e9ab18eda254", image: "../assets/images/pikachu-9.png", type: "pikachu9", statusEnable: false, barrier: false},
        {id: "ce7f5f4d-c209-49d5-b0c7-16228e97c05b", image: "../assets/images/pikachu-5.png", type: "pikachu5", statusEnable: false, barrier: false},
        {id: "a5838fb2-b178-449b-acbe-b2cc5549b6ca", image: "../assets/images/pikachu-8.png", type: "pikachu8", statusEnable: false, barrier: false},
        {id: "9d960db1-0af5-488c-82fb-216fc7e4ab20", image: "../assets/images/pikachu-11.png", type: "pikachu11", statusEnable: false, barrier: false},
        {id: "41a7a2d8-7db5-489d-9699-1517abf0164b", image: "../assets/images/pikachu-11.png", type: "pikachu11", statusEnable: false, barrier: false},
        {id: "1a27f39c-7ce8-48b8-b079-44471ca3dcc6", image: "../assets/images/pikachu-2.png", type: "pikachu2", statusEnable: false, barrier: false},
        {id: "ce176b54-15af-493c-bee3-bf04e93aba43", image: "../assets/images/pikachu-1.png", type: "pikachu1", statusEnable: false, barrier: false}
    ],
    [
        {id: "3f01ceb9-505a-4720-8458-6e2afaf71772", image: "../assets/images/pikachu-12.png", type: "pikachu12", statusEnable: false, barrier: false},
        {id: "fe518dc3-c2ca-4fa0-978e-e7ed4446a26b", image: "../assets/images/pikachu-12.png", type: "pikachu12", statusEnable: false, barrier: false},
        {id: "c8f8d7c9-9ff5-42ec-9618-40bc56780e04", image: "../assets/images/pikachu-1.png", type: "pikachu1", statusEnable: false, barrier: false},
        {id: "b593d4af-d390-493e-abd8-61c0ca1f2df1", image: "../assets/images/pikachu-3.png", type: "pikachu3", statusEnable: false, barrier: false},
        {id: "6e5dbdbf-d02c-47a1-9279-b87027935522", image: "../assets/images/pikachu-10.png", type: "pikachu10", statusEnable: false, barrier: false},
        {id: "09d43a74-ddca-49a6-b469-96dfd8d527ff", image: "../assets/images/pikachu-7.png", type: "pikachu7", statusEnable: false, barrier: false},
        {id: "402a5c68-6301-4a8a-ab16-a96d0d6dec37", image: "../assets/images/pikachu-6.png", type: "pikachu6", statusEnable: false, barrier: false},
        {id: "b62d16e5-a9b6-4b20-bdcd-3fe08da0d6ce", image: "../assets/images/pikachu-7.png", type: "pikachu7", statusEnable: false, barrier: false},
        {id: "c0f43233-2cec-4df0-b5b0-8d6ec959b995", image: "../assets/images/pikachu-6.png", type: "pikachu6", statusEnable: false, barrier: false},
        {id: "7f8a0299-f079-4ca5-90d3-86f0079bccc2", image: "../assets/images/pikachu-3.png", type: "pikachu3", statusEnable: false, barrier: false},
        {id: "377253be-7d23-4969-8131-d79d80a54887", image: "../assets/images/pikachu-2.png", type: "pikachu2", statusEnable: false, barrier: false},
        {id: "eb525ea9-9aa9-45c0-884d-d57ebf8a91f6", image: "../assets/images/pikachu-5.png", type: "pikachu5", statusEnable: false, barrier: false},
        {id: "3bdd0f1a-6803-452c-9a9f-430fe9d6ab92", image: "../assets/images/pikachu-7.png", type: "pikachu7", statusEnable: false, barrier: false},
        {id: "5f3324a0-1472-43bc-9509-e9ed3c20d0a8", image: "../assets/images/pikachu-2.png", type: "pikachu2", statusEnable: false, barrier: false},
        {id: "e5c8c390-29e2-42f8-8084-958fe7355e7b", image: "../assets/images/pikachu-2.png", type: "pikachu2", statusEnable: false, barrier: false},
        {id: "30aa32a1-e20c-418f-8e6a-80cc7338a1d5", image: "../assets/images/pikachu-3.png", type: "pikachu3", statusEnable: false, barrier: false},
    ],
    [
        {id: "8c35f314-843a-4549-af93-cf028eae51c1", image: "../assets/images/pikachu-1.png", type: "pikachu1", statusEnable: false, barrier: false},
        {id: "521d28cb-47c7-4181-ab5c-4d6144cb0705", image: "../assets/images/pikachu-10.png", type: "pikachu10", statusEnable: false, barrier: false},
        {id: "81748b9a-739b-42ce-9ffc-bb9bba5f4c34", image: "../assets/images/pikachu-12.png", type: "pikachu12", statusEnable: false, barrier: false},
        {id: "57189d4a-33a8-4331-a350-6b1946d34db0", image: "../assets/images/pikachu-6.png", type: "pikachu6", statusEnable: false, barrier: false},
        {id: "6c3982f8-227d-496e-a747-a98a4b9ac07c", image: "../assets/images/pikachu-7.png", type: "pikachu7", statusEnable: false, barrier: false},
        {id: "8573739b-df81-4b5e-9c0c-ce3fa1cbf59f", image: "../assets/images/pikachu-11.png", type: "pikachu11", statusEnable: false, barrier: false},
        {id: "9885ddd6-8923-4260-a338-8a7cce59d687", image: "../assets/images/pikachu-4.png", type: "pikachu4", statusEnable: false, barrier: false},
        {id: "468b04ca-b17a-43ab-a365-1223bd9c4060", image: "../assets/images/pikachu-12.png", type: "pikachu12", statusEnable: false, barrier: false},
        {id: "d9465db3-27c1-4e29-bf21-6f7b07e558ae", image: "../assets/images/pikachu-11.png", type: "pikachu11", statusEnable: false, barrier: false},
        {id: "455185ec-f201-416d-a045-67ae9865bcb8", image: "../assets/images/pikachu-1.png", type: "pikachu1", statusEnable: false, barrier: false},
        {id: "794952f6-9e11-4fda-a185-e7c6c3614c80", image: "../assets/images/pikachu-2.png", type: "pikachu2", statusEnable: false, barrier: false},
        {id: "a9651ec1-29ee-4347-b4c6-9ee689e3e08d", image: "../assets/images/pikachu-8.png", type: "pikachu8", statusEnable: false, barrier: false},
        {id: "54574faa-719c-4673-ac73-1b1436bf34ef", image: "../assets/images/pikachu-10.png", type: "pikachu10", statusEnable: false, barrier: false},
        {id: "e9f9709f-38f4-4b1a-90c6-d372583044df", image: "../assets/images/pikachu-1.png", type: "pikachu1", statusEnable: false, barrier: false},
        {id: "54f2359d-63bb-4f17-9cd2-fcff081945b6", image: "../assets/images/pikachu-1.png", type: "pikachu1", statusEnable: false, barrier: false},
        {id: "808ebb21-0d22-4971-899a-519c18e5e623", image: "../assets/images/pikachu-6.png", type: "pikachu6", statusEnable: false, barrier: false},
    ],
    [
        {id: "3169520e-493d-4e9d-96c1-cfbfa048a6b1", image: "../assets/images/pikachu-5.png", type: "pikachu5", statusEnable: false, barrier: false},
        {id: "ddb8665a-69ee-444d-9119-73dc9802262d", image: "../assets/images/pikachu-2.png", type: "pikachu2", statusEnable: false, barrier: false},
        {id: "1f927aef-dd77-4069-99da-e3354843c58b", image: "../assets/images/pikachu-10.png", type: "pikachu10", statusEnable: false, barrier: false},
        {id: "32eb463d-c80d-4544-8640-95ea98fc5d26", image: "../assets/images/pikachu-3.png", type: "pikachu3", statusEnable: false, barrier: false},
        {id: "e7ff475b-50c6-470e-9b2d-36658e4e874f", image: "../assets/images/pikachu-8.png", type: "pikachu8", statusEnable: false, barrier: false},
        {id: "f63b362f-1b32-4538-b8d8-51393e4d8bf4", image: "../assets/images/pikachu-3.png", type: "pikachu3", statusEnable: false, barrier: false},
        {id: "9ae3b542-73c5-4e71-900d-501cc5671b04", image: "../assets/images/pikachu-5.png", type: "pikachu5", statusEnable: false, barrier: false},
        {id: "cf62ac41-87cc-4431-a1fd-4c8fe3aa77bf", image: "../assets/images/pikachu-3.png", type: "pikachu3", statusEnable: false, barrier: false},
        {id: "9dd58fbf-beb1-4af3-9a59-b24f224c51fb", image: "../assets/images/pikachu-3.png", type: "pikachu3", statusEnable: false, barrier: false},
        {id: "2dd01dbc-e7ec-424b-941e-309e034f4911", image: "../assets/images/pikachu-1.png", type: "pikachu1", statusEnable: false, barrier: false},
        {id: "fe789e4f-2771-44c6-abf0-72f1a61faf16", image: "../assets/images/pikachu-4.png", type: "pikachu4", statusEnable: false, barrier: false},
        {id: "401c04b4-e615-4226-b4d1-7c36db1c55e1", image: "../assets/images/pikachu-12.png", type: "pikachu12", statusEnable: false, barrier: false},
        {id: "a5e61426-4dbc-4af7-b0d1-e14f0e4d0f88", image: "../assets/images/pikachu-10.png", type: "pikachu10", statusEnable: false, barrier: false},
        {id: "8d2555ad-af7f-4644-a262-5ac8c59c7048", image: "../assets/images/pikachu-5.png", type: "pikachu5", statusEnable: false, barrier: false},
        {id: "28abbb6c-ac6b-406f-99fa-88b02ce98994", image: "../assets/images/pikachu-9.png", type: "pikachu9", statusEnable: false, barrier: false},
        {id: "33e02bbd-8bc7-4e2d-a899-4512b701924d", image: "../assets/images/pikachu-5.png", type: "pikachu5", statusEnable: false, barrier: false},
    ],
    [
        {id: "45edac11-833b-4424-8bd2-b24cb36710d8", image: "../assets/images/pikachu-10.png", type: "pikachu10", statusEnable: false, barrier: false},
        {id: "c9e7d2e9-b023-43d7-9fac-1d5d9c555f77", image: "../assets/images/pikachu-5.png", type: "pikachu5", statusEnable: false, barrier: false},
        {id: "3a079e9f-4b07-476e-b894-9b3fa919adc0", image: "../assets/images/pikachu-10.png", type: "pikachu10", statusEnable: false, barrier: false},
        {id: "dafd74ad-4377-456c-a705-6689c6886f3d", image: "../assets/images/pikachu-10.png", type: "pikachu10", statusEnable: false, barrier: false},
        {id: "7dd273be-5859-4140-bd18-0697a20ee08a", image: "../assets/images/pikachu-10.png", type: "pikachu10", statusEnable: false, barrier: false},
        {id: "35fbb04c-a0d8-4f26-ac93-4c525a42b836", image: "../assets/images/pikachu-1.png", type: "pikachu1", statusEnable: false, barrier: false},
        {id: "16268894-d8ba-433a-87e5-d7b58e00161b", image: "../assets/images/pikachu-7.png", type: "pikachu7", statusEnable: false, barrier: false},
        {id: "75086b41-db75-4894-9dee-5857e2240d74", image: "../assets/images/pikachu-11.png", type: "pikachu11", statusEnable: false, barrier: false},
        {id: "b0bf3ec1-cea4-4269-b27c-36846995d08d", image: "../assets/images/pikachu-11.png", type: "pikachu11", statusEnable: false, barrier: false},
        {id: "f74f4a33-0ea5-4bb0-8a1a-b8c29dd5f935", image: "../assets/images/pikachu-7.png", type: "pikachu7", statusEnable: false, barrier: false},
        {id: "32ffd96c-5f49-4497-8137-d2084c62472b", image: "../assets/images/pikachu-2.png", type: "pikachu2", statusEnable: false, barrier: false},
        {id: "9f5a199b-002e-486d-9f3a-4c619a10319a", image: "../assets/images/pikachu-9.png", type: "pikachu9", statusEnable: false, barrier: false},
        {id: "c07f7a62-6f43-45e7-af4a-1b3f05f3ee64", image: "../assets/images/pikachu-4.png", type: "pikachu4", statusEnable: false, barrier: false},
        {id: "2845b563-8fad-41e0-a9a5-19a208630974", image: "../assets/images/pikachu-2.png", type: "pikachu2", statusEnable: false, barrier: false},
        {id: "ca3161b2-0717-4c4d-8765-e2fd64717900", image: "../assets/images/pikachu-1.png", type: "pikachu1", statusEnable: false, barrier: false},
        {id: "902025e9-56fe-4206-8564-6517ea7ba1c8", image: "../assets/images/pikachu-12.png", type: "pikachu12", statusEnable: false, barrier: false},
    ],
    [
        {id: "7926c7d4-bdf3-4b64-bb97-feab40aa866f", image: "../assets/images/pikachu-7.png", type: "pikachu7", statusEnable: false, barrier: false},
        {id: "b358c768-2965-4984-a16b-8bbe16f5de21", image: "../assets/images/pikachu-6.png", type: "pikachu6", statusEnable: false, barrier: false},
        {id: "ecb2d617-761b-4b05-b247-b4e26a970a90", image: "../assets/images/pikachu-3.png", type: "pikachu3", statusEnable: false, barrier: false},
        {id: "d084d559-63e6-4506-aff2-74d339b3b620", image: "../assets/images/pikachu-1.png", type: "pikachu1", statusEnable: false, barrier: false},
        {id: "2169fc66-b576-4cbd-b60e-6c66bc1e71ca", image: "../assets/images/pikachu-1.png", type: "pikachu1", statusEnable: false, barrier: false},
        {id: "c50addb0-7b3c-4b81-8ed1-52a2b9713bbf", image: "../assets/images/pikachu-6.png", type: "pikachu6", statusEnable: false, barrier: false},
        {id: "9f45da8c-22e7-4027-b3de-03a9e1d2a5d3", image: "../assets/images/pikachu-4.png", type: "pikachu4", statusEnable: false, barrier: false},
        {id: "2cda48ab-49eb-49fa-b589-ee59aed606e2", image: "../assets/images/pikachu-3.png", type: "pikachu3", statusEnable: false, barrier: false},
        {id: "4ea5c765-c229-467c-bdef-ced28e40ebf6", image: "../assets/images/pikachu-5.png", type: "pikachu5", statusEnable: false, barrier: false},
        {id: "35d54499-42cd-49b5-b777-a62c3f8e85de", image: "../assets/images/pikachu-8.png", type: "pikachu8", statusEnable: false, barrier: false},
        {id: "c84fee4e-0229-426c-bf97-9046205fdd44", image: "../assets/images/pikachu-6.png", type: "pikachu6", statusEnable: false, barrier: false},
        {id: "70da2ca7-7245-4fdf-a1a3-9bce38f7101f", image: "../assets/images/pikachu-5.png", type: "pikachu5", statusEnable: false, barrier: false},
        {id: "cb061821-f8f4-4636-a2ad-3f1047e51e21", image: "../assets/images/pikachu-1.png", type: "pikachu1", statusEnable: false, barrier: false},
        {id: "5f813ad3-72e3-4e5e-9151-b6392d502097", image: "../assets/images/pikachu-7.png", type: "pikachu7", statusEnable: false, barrier: false},
        {id: "4769f871-3687-49ee-941d-696cd71c1274", image: "../assets/images/pikachu-9.png", type: "pikachu9", statusEnable: false, barrier: false},
        {id: "d922113d-ac91-41d0-918e-a58860ea4fce", image: "../assets/images/pikachu-11.png", type: "pikachu11", statusEnable: false, barrier: false},
    ],
    [
        {id: "176f6bb7-48a3-428f-82fe-8ec40f7d44a2", image: "../assets/images/pikachu-7.png", type: "pikachu7", statusEnable: false, barrier: false},
        {id: "67187f86-68ee-45c0-9ad0-d60aa85df273", image: "../assets/images/pikachu-12.png", type: "pikachu12", statusEnable: false, barrier: false},
        {id: "0ee1bd79-b840-49d4-ab11-2d42dbb748d3", image: "../assets/images/pikachu-3.png", type: "pikachu3", statusEnable: false, barrier: false},
        {id: "5ed8b14c-7b11-44c6-b02b-adc9ddbbdfc8", image: "../assets/images/pikachu-1.png", type: "pikachu1", statusEnable: false, barrier: false},
        {id: "ae6fc36f-9127-43f4-a199-729251b82d22", image: "../assets/images/pikachu-11.png", type: "pikachu11", statusEnable: false, barrier: false},
        {id: "79015b53-0d89-47a4-98b4-33437541e34d", image: "../assets/images/pikachu-5.png", type: "pikachu5", statusEnable: false, barrier: false},
        {id: "b30aa576-c765-486e-b7e3-d0512eaa02ac", image: "../assets/images/pikachu-4.png", type: "pikachu4", statusEnable: false, barrier: false},
        {id: "2b006195-cefa-476c-bfa9-a4cf697026a5", image: "../assets/images/pikachu-1.png", type: "pikachu1", statusEnable: false, barrier: false},
        {id: "a5a1661d-45cd-411d-880e-3ac9a65f3783", image: "../assets/images/pikachu-5.png", type: "pikachu5", statusEnable: false, barrier: false},
        {id: "6f8b3421-013f-4ecb-b2bb-a6b6ddceceeb", image: "../assets/images/pikachu-7.png", type: "pikachu7", statusEnable: false, barrier: false},
        {id: "c85e9dbc-0987-406b-ad84-bf712efb289b", image: "../assets/images/pikachu-12.png", type: "pikachu12", statusEnable: false, barrier: false},
        {id: "d08d25b5-d2b4-41eb-a39c-c75911d6005e", image: "../assets/images/pikachu-8.png", type: "pikachu8", statusEnable: false, barrier: false},
        {id: "14ca1db8-c6cf-41ba-bff7-2ad1fbb56ba4", image: "../assets/images/pikachu-9.png", type: "pikachu9", statusEnable: false, barrier: false},
        {id: "7d1d1ae2-6780-4e7d-a7a6-cfa2392d64af", image: "../assets/images/pikachu-6.png", type: "pikachu6", statusEnable: false, barrier: false},
        {id: "817ad5c3-aaef-4baa-9512-ab3f354bac4e", image: "../assets/images/pikachu-10.png", type: "pikachu10", statusEnable: false, barrier: false},
        {id: "8123fd73-d9c7-442f-a8b8-a1a2bd4392f1", image: "../assets/images/pikachu-11.png", type: "pikachu11", statusEnable: false, barrier: false},
    ],
    [
        {id: "86ac5eed-af8d-4d68-9562-712305dd5e0e", image: "../assets/images/pikachu-11.png", type: "pikachu11", statusEnable: false, barrier: false},
        {id: "ab300167-e698-48c5-b86e-742d549c024d", image: "../assets/images/pikachu-7.png", type: "pikachu7", statusEnable: false, barrier: false},
        {id: "9216a14d-b8d7-49eb-b0b9-2b3c3ee1f092", image: "../assets/images/pikachu-11.png", type: "pikachu11", statusEnable: false, barrier: false},
        {id: "cb3e4f7a-d7d2-4d47-a36c-6a5ab089face", image: "../assets/images/pikachu-12.png", type: "pikachu12", statusEnable: false, barrier: false},
        {id: "152200b0-7e6c-4d04-868d-1af6b02ca272", image: "../assets/images/pikachu-3.png", type: "pikachu3", statusEnable: false, barrier: false},
        {id: "8ce3eafd-e872-402d-97af-b82509d196a9", image: "../assets/images/pikachu-9.png", type: "pikachu9", statusEnable: false, barrier: false},
        {id: "de9d96f1-f240-4ca4-8673-2055d8fa1fd4", image: "../assets/images/pikachu-6.png", type: "pikachu6", statusEnable: false, barrier: false},
        {id: "92923a4e-9a5f-4b65-ac45-b6731a9186f7", image: "../assets/images/pikachu-1.png", type: "pikachu1", statusEnable: false, barrier: false},
        {id: "abacfdd7-7a54-4460-a009-2282a1567239", image: "../assets/images/pikachu-12.png", type: "pikachu12", statusEnable: false, barrier: false},
        {id: "6f55b129-15cc-4ff6-9eeb-66b8c764c47b", image: "../assets/images/pikachu-7.png", type: "pikachu7", statusEnable: false, barrier: false},
        {id: "02290e03-7b1f-4792-9a21-4f1a6c2c987a", image: "../assets/images/pikachu-7.png", type: "pikachu7", statusEnable: false, barrier: false},
        {id: "0a7e4f2d-5b9b-461d-a104-79b91720ad39", image: "../assets/images/pikachu-3.png", type: "pikachu3", statusEnable: false, barrier: false},
        {id: "8912af37-1fe1-42a4-9c26-6068e25701fe", image: "../assets/images/pikachu-8.png", type: "pikachu8", statusEnable: false, barrier: false},
        {id: "5f0f5ae7-bc41-4ae2-9553-0f4da0f0848c", image: "../assets/images/pikachu-12.png", type: "pikachu12", statusEnable: false, barrier: false},
        {id: "ef3826d9-2167-4fa5-81da-8fce910457a3", image: "../assets/images/pikachu-5.png", type: "pikachu5", statusEnable: false, barrier: false},
        {id: "e73c1f85-e4ee-4bb7-8d21-92cda75d23c0", image: "../assets/images/pikachu-3.png", type: "pikachu3", statusEnable: false, barrier: false},
    ],
    [
        {id: "f388a8e6-69f5-4782-970e-425c834a26c9", image: "../assets/images/pikachu-10.png", type: "pikachu10", statusEnable: false, barrier: false},
        {id: "69a1fd3d-599b-4b07-96cd-b28057bc4cd2", image: "../assets/images/pikachu-7.png", type: "pikachu7", statusEnable: false, barrier: false},
        {id: "8fca6f41-1315-4b93-b6cb-9c331ce659e1", image: "../assets/images/pikachu-12.png", type: "pikachu12", statusEnable: false, barrier: false},
        {id: "7707fbfb-70f3-4600-9a16-16b762b35c0b", image: "../assets/images/pikachu-3.png", type: "pikachu3", statusEnable: false, barrier: false},
        {id: "cb39120b-0236-45a8-b080-38a9f36dcefd", image: "../assets/images/pikachu-8.png", type: "pikachu8", statusEnable: false, barrier: false},
        {id: "8d579cb7-4ce7-4b3c-8061-c3cb144ff658", image: "../assets/images/pikachu-7.png", type: "pikachu7", statusEnable: false, barrier: false},
        {id: "d1241474-9014-4a09-80e1-fa1ccf8e8e9d", image: "../assets/images/pikachu-2.png", type: "pikachu2", statusEnable: false, barrier: false},
        {id: "435aac8d-2815-48d9-89d5-632e8a46f7b6", image: "../assets/images/pikachu-4.png", type: "pikachu4", statusEnable: false, barrier: false},
        {id: "273db4d1-dda6-47d1-8404-a6a03daa515b", image: "../assets/images/pikachu-6.png", type: "pikachu6", statusEnable: false, barrier: false},
        {id: "f8b2bae2-6f99-43ba-8f29-f696596c8c05", image: "../assets/images/pikachu-9.png", type: "pikachu9", statusEnable: false, barrier: false},
        {id: "a5ba966f-a85f-4179-82dd-dd96181e408e", image: "../assets/images/pikachu-8.png", type: "pikachu8", statusEnable: false, barrier: false},
        {id: "53204312-2e7d-43c4-9e71-ef7ed685737b", image: "../assets/images/pikachu-5.png", type: "pikachu5", statusEnable: false, barrier: false},
        {id: "125c37eb-f8a0-42cc-9b2f-15fefa873450", image: "../assets/images/pikachu-10.png", type: "pikachu10", statusEnable: false, barrier: false},
        {id: "ecf032bb-c423-46c3-ab13-4e8c2e8cfea9", image: "../assets/images/pikachu-2.png", type: "pikachu2", statusEnable: false, barrier: false},
        {id: "7d313a5e-092e-45e1-969e-55d49b89843e", image: "../assets/images/pikachu-4.png", type: "pikachu4", statusEnable: false, barrier: false},
        {id: "a5680364-ddf6-425f-98df-4c5026bfe5cc", image: "../assets/images/pikachu-5.png", type: "pikachu5", statusEnable: false, barrier: false},
    ]
]
// kiem tra ham checkLineY
console.log(checkLineX(matrix,1, 4, 1));


function PikachuReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_MAP_PIKACHU:
            return [...state];
        case ActionTypes.CLICK_ELEMENT_SUCCESS:
            const {element1, element2} = action;
            console.log('Click reducers', element1, element2);
            // thay doi state
            const newState = [...state];
            console.log(newState);
            debugger;
            const item1 = newState[element1.index].find(el1 => el1.id === element1.element.id);
            const item2 = newState[element2.index].find(el2 => el2.id === element2.element.id);
            item1.statusEnable = !item1.statusEnable;
            item2.statusEnable = !item2.statusEnable;
            return [...newState];
        default:
            return state;
    }
}

export default PikachuReducer;

