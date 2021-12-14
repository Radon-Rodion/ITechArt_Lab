import vironITLogo from "images/vironIT.png";
import playgendary from "images/playgendary.png";
import herocraft from "images/herocraft.png";

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
  shownAfterLogIn: boolean | undefined;
}

const navLinks = [
  {
    name: "Home",
    url: "/",
    id: 0,
    shownAfterLogIn: undefined,
  },
  {
    name: "Products",
    url: "/products",
    id: 1,
    shownAfterLogIn: undefined,
  },
  {
    name: "About",
    url: "/about",
    id: 2,
    shownAfterLogIn: undefined,
  },
  {
    name: "Sign In",
    url: "",
    id: 3,
    shownAfterLogIn: false,
  },
  {
    name: "Sign Up",
    url: "",
    id: 4,
    shownAfterLogIn: false,
  },
  {
    name: "Profile",
    url: "/profile",
    id: 5,
    shownAfterLogIn: true,
  },
  {
    name: "Buscket",
    url: "/buscket",
    id: 6,
    shownAfterLogIn: true,
  },
  {
    name: "Log Out",
    url: "",
    id: 7,
    shownAfterLogIn: true,
  },
];

export { navLinks };
