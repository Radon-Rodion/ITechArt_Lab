import windows from "images/windows.png";
import playstation from "images/playstation.png";
import xbox from "images/xbox.png";

export interface CategoryInfo {
  name: string;
  url: string;
  image: string;
  key: number;
}

const categoryInfos = [
  {
    name: "PC",
    url: "/PC",
    image: windows,
    key: 1,
  },
  {
    name: "Playstation",
    url: "/PS",
    image: playstation,
    key: 2,
  },
  {
    name: "Xbox",
    url: "/XB",
    image: xbox,
    key: 3,
  },
];

export { categoryInfos };
