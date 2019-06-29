import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

// Friends reducer
import user from "../modules/user/reducer";

const reducers = combineReducers({
    user
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)

export default store;