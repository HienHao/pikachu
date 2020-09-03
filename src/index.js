import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import RootReducer from "./redux/reducers/rootReducers";
import rootSaga from "./sagas/rootSagas";

import './index.css';

//khoi tao saga
const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
));;

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)




