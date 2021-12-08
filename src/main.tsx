import "./styles/main.css";
import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
// start-path is 'images' because we have an alias 'images' in webpack.common.js
import { Component, StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "@/pages/home/home";
import Products from "@/pages/products/products";
import ProductsPageWrapper from "@/pages/products/productsPageWrapper";
import About from "@/pages/about";
import SignIn from "@/pages/users/signIn";
import SignUp from "@/pages/users/signUp";

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

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.error(error);
    console.error(info.componentStack);
    AppContainer.getDerivedStateFromError(error);
  }

  /* renderRoutes = () =>
    navLinks.map((link: NavLinkInfo) => <Route key={link.id} path={link.url} element={getPageByID(link.id)} />);*/
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
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route index element={<Products category={undefined} />} />
          <Route path=":category" element={<ProductsPageWrapper />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
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

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
