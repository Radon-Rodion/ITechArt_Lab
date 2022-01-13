/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "@/redux/store/store";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

describe("Header and footer snapshots", () => {
  test("Header", () => {
    const header = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    expect(header).toMatchSnapshot("HeaderSnapshoot");
  });

  test("Footer", () => {
    const footer = render(<Footer />);
    expect(footer).toMatchSnapshot("FooterSnapshoot");
  });
});
