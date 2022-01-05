import { IUserInfo } from "@/data/users";

export function findUserInfoByLogin(login: string, usersList: Array<IUserInfo>): IUserInfo | undefined {
  return usersList.find(((user) => user.login === login) ?? undefined);
}

export function findUserInfoByName(userName: string, usersList: Array<IUserInfo>): IUserInfo | undefined {
  return usersList.find(((user) => user.userName === userName) ?? undefined);
}

export function findIndexByName(name: string, usersList: Array<IUserInfo>): number {
  return usersList.findIndex((user) => user.userName === name);
}

export function findIndexById(id: number, usersList: Array<IUserInfo>): number {
  // binary search with a specific
  if (!usersList.length) return -1;
  let minIndex = 0;
  let index = id < usersList.length ? id : usersList.length - 1;
  let maxIndex = index;

  while (usersList[index].id !== id) {
    if (usersList[index].id > id) {
      maxIndex = index;
      index = (maxIndex + minIndex) / 2;
    } else {
      minIndex = index;
      index = (maxIndex + minIndex) / 2;
    }
  }
  return index;
}
