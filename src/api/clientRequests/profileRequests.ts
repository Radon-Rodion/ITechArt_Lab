import axios from "axios";
import { IUserInfo } from "@/data/users";

let requestSent = false;

export function getProfile(
  userName: string,
  responseSetMethod: (response: IUserInfo) => void,
  setSpinner: (spinnerState: boolean) => void
) {
  if (!requestSent) {
    requestSent = true;
    axios
      .get(`api/getProfile?user=${userName}`)
      .then((response) => {
        setSpinner(false);
        requestSent = false;
        responseSetMethod(response.data);
      })
      .catch((error) => {
        requestSent = false;
        console.error(error);
      });
  }
}

function postRequest(request: string, params: unknown, callBack: ((param: string) => void) | undefined) {
  if (!requestSent) {
    requestSent = true;
    axios
      .post(request, params)
      .then((response) => {
        requestSent = false;
        if (callBack !== undefined) callBack(response.data.body.userName);
      })
      .catch((error) => {
        console.error(error);
        requestSent = false;
        alert("Error during changing profile info!");
      });
  }
}

export function postProfile(info: IUserInfo, callBack: (param: string) => void) {
  postRequest("api/saveProfile", info, callBack);
}

export function postPassword(id: number, password: string) {
  postRequest("api/changePassword", { id, password }, undefined);
}
