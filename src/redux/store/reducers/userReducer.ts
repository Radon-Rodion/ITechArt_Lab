/* eslint-disable default-param-last */
import { RESET_USERNAME, SET_USERNAME } from "@/redux/actions/userActions";
import User from "@/redux/types/user";
import UserAction from "@/redux/types/userAction";

const USERNAME = "userName";

const defaultState: User = {
  userName: localStorage.getItem(USERNAME) ?? undefined,
};

const userReducer = (state = defaultState, action: UserAction): User => {
  switch (action.type) {
    case SET_USERNAME:
      localStorage.setItem(USERNAME, action.payload as string);
      return { userName: action.payload };
    case RESET_USERNAME:
      localStorage.clear();
      return { userName: undefined };
    default:
      return state;
  }
};

export default userReducer;
