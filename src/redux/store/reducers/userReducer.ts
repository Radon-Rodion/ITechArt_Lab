/* eslint-disable default-param-last */
import User from "@/redux/types/user";
import UserAction from "@/redux/types/userAction";

const SET_USERNAME = "SET_USERNAME";
const RESET_USERNAME = "RESET_USERNAME";

const defaultState: User = {
  userName: undefined,
};

const userReducer = (state = defaultState, action: UserAction): User => {
  switch (action.type) {
    case SET_USERNAME:
      return { userName: action.payload };
    case RESET_USERNAME:
      return { userName: undefined };
    default:
      return state;
  }
};

export const setUserNameAction = (payload: string) => ({ type: SET_USERNAME, payload });
export const resetUserNameAction = () => ({ type: RESET_USERNAME });

export default userReducer;
