import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "remote-redux-devtools";
import cartReducer from "./reducers/cartReducer";
import productsReducer from "./reducers/productsReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
