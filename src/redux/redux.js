import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
 import ProductPage_reducer from "./ProductPage_reducer";
import moneyPage_reducer from "./Money.reducer";


const rootReducer = combineReducers({

    mainPage:ProductPage_reducer,
    moneyPage:moneyPage_reducer,

})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)) )