export interface FormField {
  name: string;
  inputType: React.HTMLInputTypeAttribute;
  required: boolean;
  minLength: number | undefined;
  maxLength: number | undefined;
  pattern: string | undefined;
  title: string | undefined;
}

const formFields: Array<FormField> = [
  {
    name: "Login",
    inputType: "text",
    required: true,
    minLength: 6,
    maxLength: 30,
    pattern: undefined,
    title: undefined,
  },
  {
    name: "Password",
    inputType: "password",
    required: true,
    minLength: undefined,
    maxLength: undefined,
    pattern: "[A-Za-z0-9]{8,}",
    title: "Must contain numbes, uppercase and lowercase letters, and at least 8 or more characters",
  },
  {
    name: "Repeat password",
    inputType: "password",
    required: true,
    minLength: undefined,
    maxLength: undefined,
    pattern: "[A-Za-z0-9]{8,}",
    title: "Must contain numbes, uppercase and lowercase letters, and at least 8 or more characters",
  },
];

export function formFieldByName(name: string): FormField {
  return (
    formFields.find((field) => field.name === name) ?? {
      name: "",
      inputType: "text",
      required: false,
      minLength: undefined,
      maxLength: undefined,
      pattern: undefined,
      title: undefined,
    }
  );
}

export { formFields };
