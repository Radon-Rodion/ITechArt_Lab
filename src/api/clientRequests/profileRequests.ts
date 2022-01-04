import axios from "axios";
import { Dispatch } from "redux";
import { IUserInfo } from "@/data/users";
import UserAction from "@/redux/types/userAction";
import { setUserAction } from "@/redux/actionCreators/userActionsCreator";

let requestSent = false;

function getRequest(request: string, callBack: (responseData: IUserInfo) => void) {
  if (!requestSent) {
    requestSent = true;
    axios
      .get(request)
      .then((response) => {
        requestSent = false;
        callBack(response.data);
      })
      .catch((error) => {
        requestSent = false;
        console.error(error);
      });
  }
}

export function getProfile(
  userName: string,
  responseSetMethod: (response: IUserInfo) => void,
  setSpinner: (spinnerState: boolean) => void
) {
  const callBack = (responseData: IUserInfo) => {
    setSpinner(false);
    responseSetMethod(responseData);
  };
  getRequest(`api/getProfile?user=${userName}`, callBack);
}

export function getBalance(userName: string, responseSetMethod: (response: number) => void) {
  const callBack = (responseData: IUserInfo) => {
    responseSetMethod(responseData.balance);
  };
  getRequest(`api/getProfile?user=${userName}`, callBack);
}

function postRequest(request: string, params: unknown, dispatch: Dispatch<UserAction> | undefined = undefined) {
  if (!requestSent) {
    requestSent = true;
    axios
      .post(request, params)
      .then((response) => {
        requestSent = false;
        if (dispatch)
          dispatch(setUserAction({ userName: response.data.body.userName, isAdmin: response.data.body.isAdmin }));
      })
      .catch((error) => {
        console.error(error);
        requestSent = false;
        alert("Error during changing profile info!");
      });
  }
}

export function postProfile(info: IUserInfo, dispatch: Dispatch<UserAction>) {
  postRequest("api/saveProfile", info, dispatch);
}

export function postPassword(id: number, password: string) {
  postRequest("api/changePassword", { id, password }, undefined);
}

export function postBalance(userName: string, balance: number) {
  postRequest("api/changeBalance", { userName, balance }, undefined);
}
