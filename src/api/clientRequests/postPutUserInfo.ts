import axios from "axios";
import { Dispatch } from "redux";
import UserAction from "@/redux/types/userAction";
import { setUserAction } from "@/redux/actionCreators/userActionsCreator";

interface ISignInfo {
  login: string;
  password: string;
}

function postUserInfo(info: ISignInfo, dispatch: Dispatch<UserAction>, setFlag: (param: boolean) => void) {
  axios
    .post("/api/auth/signIn/", info)
    .then((response) => {
      console.log(response);
      setFlag(true);
      dispatch(setUserAction({ userName: response.data.body.userName, isAdmin: response.data.body.isAdmin }));
    })
    .catch((error) => {
      console.error(error);
      alert("Incorrect login or password!");
    });
}

export function putUserInfo(info: ISignInfo, dispatch: Dispatch<UserAction>, setFlag: (param: boolean) => void) {
  axios
    .put("/api/auth/signUp/", info)
    .then((response) => {
      console.log(response);
      if (response.data.success) {
        setFlag(true);
        dispatch(setUserAction({ userName: info.login, isAdmin: false }));
      }
    })
    .catch((error) => {
      console.error(error);
      alert("User with this login already exists!");
    });
}

export default postUserInfo;
