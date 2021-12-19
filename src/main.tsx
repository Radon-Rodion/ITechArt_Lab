import "./styles/main.css";
import "./styles/main.scss";
import { Component, ErrorInfo, StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "@/pages/home/home";
import Products from "@/pages/products/products";
import About from "@/pages/about";
import Profile from "@/pages/profile";
import Buscket from "@/pages/buscket";
import RouteGuard from "@/elements/routeGuard";
import store from "@/redux/store/store";

interface AppProps {
  nothing: boolean;
}
interface AppState {
  hasError: boolean;
}

class AppContainer extends Component<AppProps, AppState> {
  ["constructor"]: typeof AppContainer;

  constructor(props: AppProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error);
    console.error(info.componentStack);
    AppContainer.getDerivedStateFromError();
  }

  rerender() {
    this.forceUpdate();
    return <Home />;
  }

  errorRouting() {
    return (
      <Routes>
        <Route path="/" element={this.rerender()} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  normalRouting() {
    // You mentioned that it's better not to map routing, but due to RouteGuard size this function becomes too large. Maybe it's better to to use mapping in this case?
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route
            index
            element={
              <RouteGuard redirectTo="/">
                <Products category={undefined} />
              </RouteGuard>
            }
          />
          <Route
            path="pc"
            element={
              <RouteGuard redirectTo="/">
                <Products category="pc" />
              </RouteGuard>
            }
          />
          <Route
            path="ps"
            element={
              <RouteGuard redirectTo="/">
                <Products category="ps" />
              </RouteGuard>
            }
          />
          <Route
            path="xb"
            element={
              <RouteGuard redirectTo="/">
                <Products category="xb" />
              </RouteGuard>
            }
          />
        </Route>
        <Route
          path="/about"
          element={
            <RouteGuard redirectTo="/">
              <About />
            </RouteGuard>
          }
        />
        <Route
          path="/profile"
          element={
            <RouteGuard redirectTo="/">
              <Profile />
            </RouteGuard>
          }
        />
        <Route
          path="/buscket"
          element={
            <RouteGuard redirectTo="/">
              <Buscket />
            </RouteGuard>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  checkErrors() {
    if (this.state.hasError && window.location.pathname !== "/") {
      this.state = {
        hasError: false,
      };
      return this.errorRouting();
    }
    return this.normalRouting();
  }

  render() {
    return (
      <StrictMode>
        <Router>
          <Header />
          {this.checkErrors()}
        </Router>
        <Footer />
      </StrictMode>
    );
  }
}

ReactDom.render(
  <Provider store={store}>
    <AppContainer nothing={false} />
  </Provider>,
  document.getElementById("app")
);
