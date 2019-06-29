import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

// reducers
import user from "../modules/user/reducer";
import post from "../modules/post/reducer";

const reducers = combineReducers({
    user,
    post
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)

export default store;