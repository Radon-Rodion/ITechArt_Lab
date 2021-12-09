import vironITLogo from "images/vironIT.png";
import playgendary from "images/playgendary.png";
import herocraft from "images/herocraft.png";
import Home from "@/pages/home/home";
import Products from "@/pages/products/products";
import About from "@/pages/about";
import SignIn from "@/pages/users/signIn";
import SignUp from "@/pages/users/signUp";

export interface FooterNavLink {
  name: string;
  url: string;
  image: string;
  id: number;
}

const footerNavLinks = [
  {
    name: "VironIT",
    url: "https://vironit.com/",
    image: vironITLogo,
    id: 0,
  },
  {
    name: "PlayGendary",
    url: "https://playgendary.com/ru",
    image: playgendary,
    id: 1,
  },
  {
    name: "HeroCraft",
    url: "http://www.herocraft.com/",
    image: herocraft,
    id: 2,
  },
];

export { footerNavLinks };

export interface NavLinkInfo {
  name: string;
  url: string;
  id: number;
}

const navLinks = [
  {
    name: "Home",
    url: "/",
    id: 0,
  },
  {
    name: "Products",
    url: "/products",
    id: 1,
  },
  {
    name: "About",
    url: "/about",
    id: 2,
  },
  {
    name: "Sign In",
    url: "/sign-in",
    id: 3,
  },
  {
    name: "Sign Up",
    url: "/sign-up",
    id: 4,
  },
];

export { navLinks };

export function getPageByID(id: number) {
  switch (id) {
    case 1:
      return <Products category={undefined} />;
    case 2:
      return <About />;
    case 3:
      return <SignIn />;
    case 4:
      return <SignUp />;
    default:
      return <Home />;
  }
}
