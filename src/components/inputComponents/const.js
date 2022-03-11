export const defaultForm = {
  text: "simple text",
  number: 600,
  checkbox: true,
  textarea: "This is a long text.",
  select: "black",
  gender: "male",
};

export const defaultStringValidation = {
  fieldName: "Name",
  required: false,
  trimInput: false,
  whiteSpace: false,
  minLength: 5,
  maxLength: 10,
  specialChar: ["@", "("],
};

export const defaultNumberValidation = {
  fieldName: "Age",
  required: false,
  positive: false,
  float: false,
  range: null,
  fixDigit: false,
};
