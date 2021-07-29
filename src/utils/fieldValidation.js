import PropTypes from "prop-types";

const textValidation = (
  value,
  { fieldName, message, required, whiteSpace = true, trimInput }
) => {
  const regEx = /^[a-zA-Z0-9\s]+$/;
  let string = value;
  if (trimInput) {
    string = typeof string === "string" ? string.trim() : string;
  }
  if (required && !string) {
    return typeof required === "string"
      ? required
      : `${fieldName ? fieldName : "Value"} is required.`;
  }
  if (!whiteSpace && string && /[\s]/.test(string)) {
    return typeof whiteSpace === "string"
      ? whiteSpace
      : `Whitespace not allowed for ${fieldName ? fieldName : "text"}.`;
  }
  if (string && !regEx.test(string)) {
    return typeof message === "string"
      ? message
      : `Invalid string value for ${fieldName ? fieldName : "text"}.`;
  }
  return null;
};

textValidation.defaultProps = {
  value: "",
  options: {
    fieldName: null,
    message: null,
    required: false,
    whiteSpace: false,
    trimInput: false,
  },
};

textValidation.propTypes = {
  value: PropTypes.number,
  options: PropTypes.shape({
    fieldName: PropTypes.string,
    message: PropTypes.string,
    whiteSpace: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    trimInput: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  }),
};

const numberValidation = (
  value,
  { fieldName, message, required, positive, float, range, fixDigit }
) => {
  let number = Number(value);
  if (Number.isNaN(Number(value))) {
    return typeof message === "string"
      ? message
      : `Invalid value for ${fieldName ? fieldName : "number"}.`;
  }

  if (required && !`${number}`) {
    return typeof required === "string"
      ? required
      : `${fieldName ? fieldName : "Value"} is required.`;
  }

  const positiveNumRegEx = /^(?:[1-9]\d*|0)?(?:\.\d+)?$/;
  if (number && positive && !positiveNumRegEx.test(number)) {
    return typeof positive === "string"
      ? positive
      : `${fieldName ? fieldName : "number"} must be positive.`;
  }

  const floatRegEx = /^[-]*[0-9]*[.]*[0-9]*$/;
  if (number && float && !floatRegEx.test(number)) {
    return typeof float === "string"
      ? float
      : `Invalid for ${fieldName ? fieldName : "number"}.`;
  }

  if (fixDigit) {
    const digits =
      typeof (fixDigit?.value || fixDigit) === "number"
        ? fixDigit?.value || fixDigit
        : 2;
    const fixDigitRegEx = new RegExp(`^\\d+(\\.\\d{,${digits}})$`);
    if (fixDigit.value && !fixDigitRegEx.test(number)) {
      return typeof fixDigit.message === "string"
        ? fixDigit.message
        : `${
            fieldName ? fieldName : "number"
          } must have ${digits} digit after point.`;
    } else if (!fixDigitRegEx.test(number)) {
      return `${
        fieldName ? fieldName : "number"
      } must have ${digits} digit after point.`;
    }
  }

  if (range) {
    if (range.value && range.value.length > 0) {
      if (range.value.length !== 2)
        return `Range must have array of two numbers.`;
      else if (Number(range.value[0]) > Number(range.value[1]))
        return `Invalid range.`;
      else if (
        Number(range.value[0]) > number ||
        Number(range.value[1]) < number
      )
        return typeof range.message === "string"
          ? range.message
          : `${
              fieldName ? fieldName : "number"
            } is must be in range of ${range.value.join(" to ")}.`;
    } else {
      if (range.length > 0 && range.length !== 2)
        return `Range must have array of two numbers.`;
      else if (Number(range[0]) > Number(range[1])) return `Invalid range.`;
      else if (Number(range[0]) > number || Number(range[1] < number))
        return `${
          fieldName ? fieldName : "number"
        } is must be in range of ${range.join(" to ")}.`;
    }
  }
  return null;
};

numberValidation.defaultProps = {
  value: "",
  options: {
    fieldName: null,
    message: null,
    required: false,
    positive: false,
    float: false,
    range: null,
    fixDigit: null,
  },
};

numberValidation.propTypes = {
  value: PropTypes.number,
  options: PropTypes.shape({
    fieldName: PropTypes.string,
    message: PropTypes.string,
    required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    positive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    float: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    range: PropTypes.oneOfType([
      PropTypes.arrayOf([PropTypes.number, PropTypes.number]),
      PropTypes.shape({
        value: PropTypes.arrayOf([PropTypes.number, PropTypes.number]),
        message: PropTypes.string,
      }),
    ]),
    fixDigit: PropTypes.oneOfType([
      PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
        message: PropTypes.string,
      }),
    ]),
  }),
};

export { textValidation, numberValidation };
