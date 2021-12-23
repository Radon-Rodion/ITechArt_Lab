import { IUserInfo } from "@/data/users";

function findUserInfo(login: string, usersList: Array<IUserInfo>) {
  return usersList.find(((user) => user.login === login) ?? undefined);
}

export default findUserInfo;
