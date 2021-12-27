// eslint-disable-next-line import/no-extraneous-dependencies
import webpackMockServer from "webpack-mock-server";
import { productInfos } from "@/data/productInfos";
import filter from "@/api/serverOperations/filterProductInfo";
import select, { sort } from "@/api/serverOperations/selectProductInfo";
import { findUserInfoByLogin, findUserInfoByName, findIndexById } from "@/api/serverOperations/findUserInfo";
import users from "@/data/users";

const usersList = users;

export default webpackMockServer.add((app, helper) => {
  // products requests
  app.get("/api/products", (_req, res) => {
    const nameFilter = (_req?.query?.name as string) ?? "";
    const categoryFilter = (_req?.query?.category as string) ?? "";
    const genreFilter = (_req?.query?.genre as string) ?? "";
    const ageFilter = +(_req?.query?.age as string) ?? 0;
    const sortCriteria = (_req?.query?.criteria as string) ?? "";
    const sortAscOrder = (_req?.query?.order as string) === "asc";

    const response = {
      products: sort(
        sortCriteria,
        sortAscOrder,
        filter(nameFilter, categoryFilter, genreFilter, ageFilter, productInfos)
      ),
    };
    return res.json(response);
  });

  app.get("/api/topProducts", (_req, res) => {
    const fieldName = (_req?.query?.category as string) ?? "name";
    const amount = +(_req?.query?.amount as string) ?? 1;
    const response = {
      products: select(fieldName, amount, productInfos),
    };
    return res.json(response);
  });

  // sign requests
  app.post("/api/auth/signIn", (req, res) => {
    const response = findUserInfoByLogin(req.body.login, usersList);
    if (response !== undefined && response.password === req.body.password)
      res.status(201).json({ body: response || null, success: true });
    else res.status(400).json({ body: undefined || null, success: false });
  });

  app.put("/api/auth/signUp", (req, res) => {
    const existingInfo = findUserInfoByLogin(req.body.login, usersList);
    if (existingInfo === undefined) {
      usersList.push({
        id: usersList.length,
        login: req.body.login,
        password: req.body.password,
        userName: req.body.login,
      });
      res.json({ body: req.body || null, success: true });
    } else res.status(400).json({ body: undefined || null, success: false });
  });

  // profile requests
  app.get("/api/getProfile", (_req, res) => {
    const userName = (_req?.query?.user as string) ?? "";
    const userInfo = findUserInfoByName(userName, usersList);
    if (userInfo === undefined) res.status(400).json(undefined || null);
    return res.json(userInfo);
  });

  app.post("/api/saveProfile", (req, res) => {
    const index = findIndexById(req.body.id, usersList);
    if (index >= 0 && index < usersList.length) {
      usersList[index] = req.body;
      res.json({ body: usersList[index] || null, success: true });
    } else res.status(400).json({ body: undefined || null, success: false });
  });

  app.post("/api/changePassword", (req, res) => {
    const index = findIndexById(req.body.id, usersList);
    if (index >= 0 && index < usersList.length) {
      usersList[index].password = req.body.password;
      res.json({ body: usersList[index].password || null, success: true });
    } else res.status(400).json({ body: undefined || null, success: false });
  });
});
