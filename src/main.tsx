import "./styles/main.css";
import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
// start-path is 'images' because we have an alias 'images' in webpack.common.js
import { Component, StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer";
import { navLinks, getPageByID, NavLinkInfo } from "@/links";

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

  redirectToHome() {
    window.location.pathname = "/";
  }

  renderRoutes = () =>
    navLinks.map((link: NavLinkInfo) => <Route key={link.id} path={link.url} element={getPageByID(link.id)} />);

  render() {
    if (this.state.hasError && window.location.pathname !== "/") {
      this.state.hasError = false;
      this.redirectToHome();
    }
    if (!navLinks.some((link: NavLinkInfo) => link.url === window.location.pathname)) {
      this.redirectToHome();
    }
    return (
      <StrictMode>
        <Router>
          <Header />
          <Routes>{this.renderRoutes()}</Routes>
        </Router>
        <Footer />
      </StrictMode>
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
