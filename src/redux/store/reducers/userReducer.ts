import User from "@/redux/types/user";
import UserAction from "@/redux/types/userAction";

const SET_USERNAME = "SET_USERNAME";
const RESET_USERNAME = "RESET_USERNAME";

const initialState: User = {
  userName: undefined,
};

const userReducer = (state: User | undefined, action: UserAction): User => {
  switch (action.type) {
    case SET_USERNAME:
      return { userName: action.value };
    case RESET_USERNAME:
      return { userName: undefined };
    default:
      return initialState;
  }
};

export default userReducer;
