import users from "@/data/users";

function findUserInfo(login: string) {
  return users.find(((user) => user.login === login) ?? undefined);
}

export default findUserInfo;
