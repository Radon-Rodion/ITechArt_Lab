import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
