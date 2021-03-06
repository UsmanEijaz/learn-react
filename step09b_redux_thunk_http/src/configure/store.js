import * as Redux from "redux";
import { applyMiddleware } from "redux";
import { getRepoReducer } from "../reducer/index.js";
import thunk from "redux-thunk";
import logger from "redux-logger";

export var storeConfig = function () {
    var reducer = Redux.combineReducers({
        getRepoReducer
    });

    const middleWare = applyMiddleware(thunk, logger())
    var store = Redux.createStore(reducer, middleWare);

    return store;
}