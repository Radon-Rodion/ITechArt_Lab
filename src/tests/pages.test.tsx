/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Home from "@/pages/home/home";
import store from "@/redux/store/store";
import Profile from "@/pages/profile/profile";
import Products from "@/pages/products/products";
import Cart from "@/pages/cart/cart";
import About from "@/pages/about/about";

describe("Pages snapshots", () => {
  test("Home page", () => {
    const page = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(page).toMatchSnapshot("HomePageSnapshot");
  });

  test("Profile page", () => {
    const page = render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
    expect(page).toMatchSnapshot("ProfilePageSnapshot");
  });

  test("Products page", () => {
    const page = render(
      <Provider store={store}>
        <Products category={undefined} />
      </Provider>
    );
    expect(page).toMatchSnapshot("ProductsPageSnapshot");
  });

  test("Cart page", () => {
    const page = render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    expect(page).toMatchSnapshot("CartPageSnapshot");
  });

  test("About page", () => {
    const page = render(
      <Provider store={store}>
        <About />
      </Provider>
    );
    expect(page).toMatchSnapshot("AboutPageSnapshot");
  });
});
