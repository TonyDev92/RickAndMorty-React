import { legacy_createStore as createStore , applyMiddleware , combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import fetchReducer from "./reducer/fetch.reducer";


const reducer = combineReducers({
    data: fetchReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
