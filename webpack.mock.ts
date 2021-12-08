// eslint-disable-next-line import/no-extraneous-dependencies
import webpackMockServer from "webpack-mock-server";
import { productInfos } from "@/productInfos";
import filter from "@/api/serverOperations/filterProductInfo";
import select from "@/api/serverOperations/selectProductInfo";

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

  app.post("/testPostMock", (req, res) => {
    res.json({ body: req.body || null, success: true });
  });
});
