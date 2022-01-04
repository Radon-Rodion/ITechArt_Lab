/* eslint-disable default-param-last */
import { SET_USER, RESET } from "@/redux/actions/userActions";
import serialize from "@/redux/supportFunctions/serialize";
import User from "@/redux/types/user";
import UserAction from "@/redux/types/userAction";

const USER = "userInfo";

const defaultState: User = JSON.parse(localStorage.getItem(USER) ?? '{"isAdmin":false}');

const userReducer = (state = defaultState, action: UserAction): User => {
  switch (action.type) {
    case SET_USER:
      serialize<User>(action.payload as User, USER);
      return action.payload as User;
    case RESET:
      localStorage.clear();
      return { userName: undefined, isAdmin: false };
    default:
      return state;
  }
};

export default userReducer;
