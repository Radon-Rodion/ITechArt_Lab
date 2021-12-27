import windows from "images/windows.png";
import playstation from "images/playstation.png";
import xbox from "images/xbox.png";

export interface CategoryInfo {
  name: string;
  shortName: string;
  url: string;
  image: string;
  key: number;
}

const categoryInfos = [
  {
    name: "PC",
    shortName: "pc",
    url: "/products/pc",
    image: windows,
    key: 1,
  },
  {
    name: "Playstation",
    shortName: "ps",
    url: "/products/ps",
    image: playstation,
    key: 2,
  },
  {
    name: "Xbox",
    shortName: "xb",
    url: "/products/xb",
    image: xbox,
    key: 3,
  },
];

export function getFullCategoryName(shortName: string): string {
  return categoryInfos.find((info) => info.shortName === shortName)?.name ?? "All games";
}

export { categoryInfos };
