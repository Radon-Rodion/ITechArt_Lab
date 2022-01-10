import filter from "../api/serverOperations/filterProductInfo";
import { checkNameExists, defineNewItemKey, findIndexByKey } from "../api/serverOperations/editProductsList";
import select, { sort } from "../api/serverOperations/selectProductInfo";
import {
  findIndexById,
  findIndexByName,
  findUserInfoByLogin,
  findUserInfoByName,
} from "../api/serverOperations/findUserInfo";

const fakeProductInfos = [
  {
    name: "Overwatch2",
    price: 34.99,
    mark: 4,
    image: "images/Overwatch2.jpg",
    description: "Action, shooter, siquel, by Blizzard Entertainment",
    ageCategory: 12,
    isPC: true,
    isXBox: true,
    isPS: true,
    additionDate: new Date("2023-10-22"),
    key: 1,
  },
  {
    name: "Cyberpunk",
    price: 29.99,
    mark: 3,
    image: "images/Cyberpunk.jpg",
    description: "Action, RPG, open-world, by CD project red",
    ageCategory: 18,
    isPC: true,
    isXBox: true,
    isPS: true,
    additionDate: new Date("2020-11-05"),
    key: 2,
  },
  {
    name: "Bladerunner",
    price: 9.99,
    mark: 4,
    image: "images/Bladerunner.jpeg",
    description: "Action, shooter, stels, by my imagination",
    ageCategory: 0,
    isPC: true,
    isXBox: true,
    isPS: true,
    additionDate: new Date("2019-05-15"),
    key: 3,
  },
  {
    name: "Field of arms",
    price: 24.99,
    mark: 5,
    image: "images/FieldOfArms.jpg",
    description: "Tactic, strategy, real-time, by BALANDRA S.A.S",
    ageCategory: 12,
    isPC: true,
    isXBox: false,
    isPS: false,
    additionDate: new Date("2022-09-04"),
    key: 4,
  },
  {
    name: "Virtual hunter",
    price: 9.99,
    mark: 3,
    image: "images/VirtualHunter.jpg",
    description: "Simulator, survival, by Virtual Hunter",
    ageCategory: 6,
    isPC: true,
    isXBox: false,
    isPS: false,
    additionDate: new Date("2022-05-18"),
    key: 5,
  },
  {
    name: "Hytale",
    price: 14.99,
    mark: 4,
    image: "images/Hytale.jpg",
    description: "Action, roleplay, adventure, fighting, by Hypixel Studios",
    ageCategory: 12,
    isPC: true,
    isXBox: true,
    isPS: false,
    additionDate: new Date("2023-08-20"),
    key: 6,
  },
];

describe("editProductsList", () => {
  test("find index by existing key", () => {
    for (let i = 0; i < fakeProductInfos.length; i++) {
      const foundIndex = findIndexByKey(fakeProductInfos[i].key, fakeProductInfos);
      expect(foundIndex).toBe(i);
    }
  });

  test("find index by non-existing key", () => {
    let foundIndex = findIndexByKey(fakeProductInfos[0].key - 1, fakeProductInfos); // less than min key
    expect(foundIndex).toBe(-1);

    foundIndex = findIndexByKey(fakeProductInfos[fakeProductInfos.length - 1].key + 1, fakeProductInfos); // more than max key
    expect(foundIndex).toBe(-1);
  });

  test("check real name exists", () => {
    for (let i = 0; i < fakeProductInfos.length; i++) {
      const exists = checkNameExists(fakeProductInfos[i].name, fakeProductInfos);
      expect(exists).toBe(true);
    }
  });

  test("check unreal name exists", () => {
    let exists = checkNameExists("", fakeProductInfos);
    expect(exists).toBe(false);

    exists = checkNameExists("hytale", fakeProductInfos);
    expect(exists).toBe(false);
  });

  test("define new item key", () => {
    let definedNewItemLey = defineNewItemKey([]);
    expect(definedNewItemLey).toBe(0);

    definedNewItemLey = defineNewItemKey(fakeProductInfos);
    expect(definedNewItemLey).toBe(7); // change if testingArray is changed
  });
});

describe("filterProductInfo", () => {
  // change values if testingArray is changed
  test("without filters", () => {
    const fittingArr = filter("", "", "", 0, fakeProductInfos);
    expect(fittingArr).toHaveLength(fakeProductInfos.length);
  });

  test("filter by name", () => {
    let fittingArr = filter("er", "", "", 0, fakeProductInfos);
    expect(fittingArr).toHaveLength(4);

    fittingArr = filter("cyberpunk", "", "", 0, fakeProductInfos);
    expect(fittingArr).toHaveLength(1);

    fittingArr = filter("qwerty", "", "", 0, fakeProductInfos);
    expect(fittingArr).toHaveLength(0);
  });

  test("filter by category", () => {
    let fittingArr = filter("", "pc", "", 0, fakeProductInfos);
    expect(fittingArr).toHaveLength(6);

    fittingArr = filter("", "ps", "", 0, fakeProductInfos);
    expect(fittingArr).toHaveLength(3);

    fittingArr = filter("", "xb", "", 0, fakeProductInfos);
    expect(fittingArr).toHaveLength(4);

    fittingArr = filter("", "Invalid category", "", 0, fakeProductInfos);
    expect(fittingArr).toHaveLength(0);
  });

  test("filter by genre", () => {
    let fittingArr = filter("", "", "shooter", 0, fakeProductInfos);
    expect(fittingArr).toHaveLength(2);

    fittingArr = filter("", "", "action", 0, fakeProductInfos);
    expect(fittingArr).toHaveLength(4);

    fittingArr = filter("", "", "simulator", 0, fakeProductInfos);
    expect(fittingArr).toHaveLength(1);

    fittingArr = filter("", "", "invalid genre", 0, fakeProductInfos);
    expect(fittingArr).toHaveLength(0);
  });

  test("filter by age", () => {
    let fittingArr = filter("", "", "", 6, fakeProductInfos);
    expect(fittingArr).toHaveLength(5);

    fittingArr = filter("", "", "", 12, fakeProductInfos);
    expect(fittingArr).toHaveLength(4);

    fittingArr = filter("", "", "", 18, fakeProductInfos);
    expect(fittingArr).toHaveLength(1);

    fittingArr = filter("", "", "", 99, fakeProductInfos);
    expect(fittingArr).toHaveLength(0);
  });

  test("filter by multiple filters", () => {
    let fittingArr = filter("er", "xb", "", 6, fakeProductInfos);
    expect(fittingArr).toHaveLength(2);

    fittingArr = filter("al", "pc", "action", 0, fakeProductInfos);
    expect(fittingArr).toHaveLength(1);

    fittingArr = filter("", "ps", "", 12, fakeProductInfos);
    expect(fittingArr).toHaveLength(2);

    fittingArr = filter("", "ps", "shooter", 18, fakeProductInfos);
    expect(fittingArr).toHaveLength(0);
  });
});

describe("selectProductInfo", () => {
  test("sort by date", () => {
    const datesInAscOrder = [
      new Date("2019-05-15"),
      new Date("2020-11-05"),
      new Date("2022-05-18"),
      new Date("2022-09-04"),
      new Date("2023-08-20"),
      new Date("2023-10-22"),
    ];

    let sortedArr = sort("date", true, fakeProductInfos);
    for (let i = 0; i < datesInAscOrder.length; i++)
      expect(sortedArr[i].additionDate).toStrictEqual(datesInAscOrder[i]);

    const datesInDescOrder = datesInAscOrder.reverse();
    sortedArr = sort("date", false, fakeProductInfos);
    for (let i = 0; i < datesInAscOrder.length; i++)
      expect(sortedArr[i].additionDate).toStrictEqual(datesInDescOrder[i]);
  });

  test("sort by price", () => {
    const pricesInAscOrder = [9.99, 9.99, 14.99, 24.99, 29.99, 34.99];

    let sortedArr = sort("price", true, fakeProductInfos);
    for (let i = 0; i < pricesInAscOrder.length; i++) expect(sortedArr[i].price).toBe(pricesInAscOrder[i]);

    const pricesInDescOrder = pricesInAscOrder.reverse();
    sortedArr = sort("price", false, fakeProductInfos);
    for (let i = 0; i < pricesInDescOrder.length; i++) expect(sortedArr[i].price).toBe(pricesInDescOrder[i]);
  });

  test("sort by mark", () => {
    const marksInAscOrder = [3, 3, 4, 4, 4, 5];

    let sortedArr = sort("mark", true, fakeProductInfos);
    for (let i = 0; i < marksInAscOrder.length; i++) expect(sortedArr[i].mark).toBe(marksInAscOrder[i]);

    const marksInDescOrder = marksInAscOrder.reverse();
    sortedArr = sort("mark", false, fakeProductInfos);
    for (let i = 0; i < marksInDescOrder.length; i++) expect(sortedArr[i].mark).toBe(marksInDescOrder[i]);
  });

  test("sort by name", () => {
    const namesInAscOrder = ["Bladerunner", "Cyberpunk", "Field of arms", "Hytale", "Overwatch2", "Virtual hunter"];

    let sortedArr = sort("name", true, fakeProductInfos);
    for (let i = 0; i < namesInAscOrder.length; i++) expect(sortedArr[i].name).toBe(namesInAscOrder[i]);

    const namesInDescOrder = namesInAscOrder.reverse();
    sortedArr = sort("name", false, fakeProductInfos);
    for (let i = 0; i < namesInDescOrder.length; i++) expect(sortedArr[i].name).toBe(namesInDescOrder[i]);
  });

  test("select from empty arr", () => {
    const selected = select("name", 3, []);
    expect(selected).toHaveLength(0);
  });

  test("select from fake arr", () => {
    let selected = select("date", 4, fakeProductInfos);
    expect(selected).toHaveLength(4);

    selected = select("date", 99, fakeProductInfos);
    expect(selected).toHaveLength(fakeProductInfos.length);

    selected = select("date", 3, fakeProductInfos);
    expect(selected).toHaveLength(3);

    selected = select("date", 0, fakeProductInfos);
    expect(selected).toHaveLength(0);
  });
});

const fakeUsers = [
  {
    id: 0,
    login: "qwerty123",
    password: "QQQqqq111",
    userName: "TestUser",
    balance: 5500,
    isAdmin: true,
  },
  {
    id: 1,
    login: "radon-rodion221",
    password: "77735Sql",
    userName: "Pavel",
    balance: 2300,
    isAdmin: true,
  },
  {
    id: 2,
    login: "cyberPop333",
    password: "Godgod333",
    userName: "Protoijerej",
    balance: 5700,
    isAdmin: false,
  },
];

describe("findUserInfo", () => {
  test("find info by login", () => {
    let foundInfo = findUserInfoByLogin("radon-rodion221", fakeUsers);
    expect(foundInfo).toBeDefined();
    expect(foundInfo?.id).toBe(1);

    foundInfo = findUserInfoByLogin("Incorrect login", fakeUsers);
    expect(foundInfo).toBeUndefined();

    foundInfo = findUserInfoByLogin("qwerty123", []);
    expect(foundInfo).toBeUndefined();
  });

  test("find info by name", () => {
    let foundInfo = findUserInfoByName("Pavel", fakeUsers);
    expect(foundInfo).toBeDefined();
    expect(foundInfo?.id).toBe(1);

    foundInfo = findUserInfoByName("Incorrect name", fakeUsers);
    expect(foundInfo).toBeUndefined();

    foundInfo = findUserInfoByName("TestUser", []);
    expect(foundInfo).toBeUndefined();
  });

  test("find index by name", () => {
    let foundIndex = findIndexByName("Pavel", fakeUsers);
    expect(foundIndex).toBe(1);

    foundIndex = findIndexByName("Incorrect name", fakeUsers);
    expect(foundIndex).toBe(-1);

    foundIndex = findIndexByName("TestUser", []);
    expect(foundIndex).toBe(-1);
  });

  test("find index by id", () => {
    let foundIndex = findIndexById(1, fakeUsers);
    expect(foundIndex).toBe(1);

    foundIndex = findIndexById(0, []);
    expect(foundIndex).toBe(-1);
  });
});
