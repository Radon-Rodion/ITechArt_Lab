export interface IUserInfo {
  id: number;
  login: string;
  password: string;
  userName: string;
  description?: string;
  picture?: string;
  phone?: string;
  balance: number;
}

export const defaultUser: IUserInfo = {
  id: -1,
  login: "",
  password: "",
  userName: "",
  description: "",
  balance: 500,
};

export interface IUserNameControl {
  userName: string | undefined;
  setUserName: (arg: string | undefined) => void;
}

const users: Array<IUserInfo> = [
  {
    id: 0,
    login: "qwerty123",
    password: "QQQqqq111",
    userName: "TestUser",
    balance: 5500,
  },
  {
    id: 1,
    login: "radon-rodion221",
    password: "77735Sql",
    userName: "Pavel",
    balance: 2300,
  },
  {
    id: 2,
    login: "cyberPop333",
    password: "Godgod333",
    userName: "Protoijerej",
    balance: 5700,
  },
];

export default users;
