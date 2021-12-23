export interface IUserInfo {
  id: number;
  login: string;
  password: string;
  userName: string;
  description?: string;
  picture?: string;
  phone?: string;
}

// eslint-disable-next-line no-shadow
export enum FieldNames {
  NAME,
  DESCRIPTION,
  PICTURE,
  PHONE,
}

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
  },
  {
    id: 1,
    login: "radon-rodion221",
    password: "77735Sql",
    userName: "Pavel",
  },
  {
    id: 2,
    login: "cyberPop333",
    password: "Godgod333",
    userName: "Protoijerej",
  },
];

export default users;
