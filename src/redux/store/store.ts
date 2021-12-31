import { combineReducers, createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
