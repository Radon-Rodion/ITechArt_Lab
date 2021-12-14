import axios from "axios";

interface ISignInfo {
  login: string;
  password: string;
}

function postUserInfo(info: ISignInfo, callBack: (param: string) => void) {
  axios
    .post("/api/auth/signIn/", info)
    .then((response) => {
      console.log(response);
      callBack(response.data.body.userName);
    })
    .catch((error) => {
      console.error(error);
      alert("Incorrect login or password!");
    });
}

export function putUserInfo(info: ISignInfo, callBack: (param: string) => void, setFlag: (param: boolean) => void) {
  axios
    .put("/api/auth/signUp/", info)
    .then((response) => {
      console.log(response);
      if (response.data.success) {
        setFlag(true);
        callBack(info.login);
      }
    })
    .catch((error) => {
      console.error(error);
      alert("User with this login already exists!");
    });
}

export default postUserInfo;
