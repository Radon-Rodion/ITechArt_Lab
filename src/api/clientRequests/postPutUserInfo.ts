import axios from "axios";
import { Dispatch } from "redux";
import UserAction from "@/redux/types/userAction";
import { setUserAction } from "@/redux/actionCreators/userActionsCreator";

interface ISignInfo {
  login: string;
  password: string;
}

export const SUCCESS = "success";

function postUserInfo(info: ISignInfo, dispatch: Dispatch<UserAction>, setResponseMessage: (m: string) => void) {
  axios
    .post("/api/auth/signIn/", info)
    .then((response) => {
      setResponseMessage(SUCCESS);
      dispatch(setUserAction({ userName: response.data.body.userName, isAdmin: response.data.body.isAdmin }));
    })
    .catch((error) => {
      console.error(error);
      setResponseMessage("Incorrect login or password!");
    });
}

export function putUserInfo(info: ISignInfo, dispatch: Dispatch<UserAction>, setResponseMessage: (m: string) => void) {
  axios
    .put("/api/auth/signUp/", info)
    .then((response) => {
      if (response.data.success) {
        setResponseMessage(SUCCESS);
        dispatch(setUserAction({ userName: info.login, isAdmin: false }));
      }
    })
    .catch((error) => {
      console.error(error);
      setResponseMessage("User with this login already exists!");
    });
}

export default postUserInfo;
