// eslint-disable-next-line import/no-extraneous-dependencies
import webpackMockServer from "webpack-mock-server";
import { productInfos } from "@/data/productInfos";
import filter from "@/api/serverOperations/filterProductInfo";
import select from "@/api/serverOperations/selectProductInfo";
import findUserInfo from "@/api/serverOperations/findUserInfo";
import users from "@/data/users";

const usersList = users;

export default webpackMockServer.add((app, helper) => {
  app.get("/api/search", (_req, res) => {
    // processing products request
    const nameFilter = (_req?.query?.name as string) ?? "";
    const categoryFilter = (_req?.query?.category as string) ?? "";
    const response = {
      products: filter(nameFilter, categoryFilter, productInfos),
    };
    return res.json(response);
  });

  app.get("/api/getTopProducts", (_req, res) => {
    // processing products request
    const fieldName = (_req?.query?.category as string) ?? "name";
    const amount = +(_req?.query?.amount as string) ?? 1;
    const response = {
      products: select(fieldName, amount, productInfos),
    };
    return res.json(response);
  });

  app.post("/api/auth/signIn", (req, res) => {
    const response = findUserInfo(req.body.login, usersList);
    if (response !== undefined && response.password === req.body.password)
      res.status(201).json({ body: response || null, success: true });
    else res.status(400).json({ body: undefined || null, success: false });
  });

  app.put("/api/auth/signUp", (req, res) => {
    const existingInfo = findUserInfo(req.body.login, usersList);
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
});
