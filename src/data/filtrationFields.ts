import { categoryInfos } from "./categoriesInfo";

export interface FieldValue {
  text: string;
  value: string;
}

export function categoryFieldValues() {
  const result = new Array<FieldValue>(categoryInfos.length);
  for (let i = 0; i < categoryInfos.length; i++) {
    result[i] = {
      text: categoryInfos[i].name,
      value: categoryInfos[i].shortName,
    };
  }
  return result;
}

export interface Filters {
  category: string;
  name: string;
  criteria: string;
  order: string;
  genres: string;
  age: number;
}

export const defaultFilters: Filters = {
  category: "",
  name: "",
  criteria: "name",
  order: "asc",
  genres: "",
  age: 0,
};

const fieldsValues = {
  criteria: Array<FieldValue>(
    { text: "Name", value: "name" },
    { text: "Publication date", value: "date" },
    { text: "Rating", value: "mark" },
    { text: "Price", value: "price" }
  ),
  order: Array<FieldValue>({ text: "Ascending", value: "asc" }, { text: "Descending", value: "desc" }),
  genre: Array<FieldValue>(
    { text: "All genres", value: "" },
    { text: "Shooter", value: "shooter" },
    { text: "Action", value: "action" },
    { text: "Survival", value: "survival" }
  ),
  age: Array<FieldValue>(
    { text: "All ages", value: "0" },
    { text: "3+", value: "3" },
    { text: "6+", value: "6" },
    { text: "12+", value: "12" },
    { text: "18+", value: "18" }
  ),
};

export default fieldsValues;
