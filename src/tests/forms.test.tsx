/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "@/redux/store/store";
import SignIn from "@/components/forms/signIn";
import SignUp from "@/components/forms/signUp";
import ChangePassword from "@/components/forms/changePassword";
import ErrorForm from "@/components/forms/errorForm";
import AdminForm from "@/components/forms/adminForm";
import { newProductInfo } from "@/data/productInfos";
import { formByName } from "@/data/adminFormsParams";

describe("Forms snapshots", () => {
  test("sign in form", () => {
    const form = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn onExit={undefined} redirectAfterSign="/" />
        </BrowserRouter>
      </Provider>
    );
    expect(form).toMatchSnapshot("SignInFormSnapshot");
  });

  test("sign up form", () => {
    const form = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp onExit={undefined} redirectAfterSign="/" />
        </BrowserRouter>
      </Provider>
    );
    expect(form).toMatchSnapshot("SignUpFormSnapshot");
  });

  test("change password form", () => {
    const form = render(
      <Provider store={store}>
        <BrowserRouter>
          <ChangePassword curPassword="12345678" userId={0} />
        </BrowserRouter>
      </Provider>
    );
    expect(form).toMatchSnapshot("ChangePasswordFormSnapshot");
  });

  test("error form", () => {
    const form = render(
      <Provider store={store}>
        <BrowserRouter>
          <ErrorForm onExit={undefined} message="fake message" />
        </BrowserRouter>
      </Provider>
    );
    expect(form).toMatchSnapshot("ErrorFormSnapshot");
  });

  test("admin creating form", () => {
    const form = render(
      <Provider store={store}>
        <BrowserRouter>
          <AdminForm gameInfo={newProductInfo} formInfo={formByName("Create card")} />
        </BrowserRouter>
      </Provider>
    );
    expect(form).toMatchSnapshot("AdminCreatingFormSnapshot");
  });

  test("admin editing form", () => {
    const form = render(
      <Provider store={store}>
        <BrowserRouter>
          <AdminForm gameInfo={newProductInfo} formInfo={formByName("Edit card")} />
        </BrowserRouter>
      </Provider>
    );
    expect(form).toMatchSnapshot("AdminEditingFormSnapshot");
  });
});
