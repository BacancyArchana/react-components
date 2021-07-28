import React from "react";
import PropTypes from "prop-types";
import {
  FormGroup,
  FormText,
  InputGroup,
  InputGroupAddon,
  Input as CustomInput,
  Label,
} from "reactstrap";

const Input = ({
  type,
  name,
  value,
  label,
  placeholder,
  isChecked,
  options,
  changeHandler,
  blurHandler,
  validate,
  isError,
  append,
  prepend,
  errorMsg,
  infoMsg,
  rows,
  className,
  labelClassName,
  inputClassName,
}) => {
  const onBlurInput = (e) => {
    blurHandler(name, type === "checkbox" ? e.target.checked : e.target.value);
    validate(name, type === "checkbox" ? e.target.checked : e.target.value);
  };
  const onChangeInput = (e) => {
    changeHandler(
      name,
      type === "checkbox" ? e.target.checked : e.target.value
    );
  };

  let inputEle = (
    <CustomInput
      className={`${inputClassName}${type === "radio" ? " mx-1" : ""}`}
      type={type}
      name={name}
      placeholder={placeholder || label}
      value={value}
      checked={isChecked}
      rows={type === "textarea" ? rows || 2 : 0}
      onChange={onChangeInput}
      onBlur={onBlurInput}
    >
      {type === "select"
        ? options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))
        : null}
    </CustomInput>
  );

  if (prepend || append) {
    inputEle = (
      <InputGroup>
        {prepend && (
          <InputGroupAddon addonType="prepend">{prepend}</InputGroupAddon>
        )}
        {inputEle}
        {append && (
          <InputGroupAddon addonType="append">{append}</InputGroupAddon>
        )}
      </InputGroup>
    );
  }

  const isCheckInput = type === "checkbox" || type === "radio";
  return (
    <div className="m-2 mb-3">
      <FormGroup className={className} check={type === "checkbox"}>
        <Label
          className={`mb-1 px-1 text-secondary ${labelClassName}`}
          check={type === "checkbox"}
        >
          {isCheckInput ? inputEle : null}
          {label}
        </Label>
        {!isCheckInput ? inputEle : null}

        {infoMsg && <FormText color="muted">{infoMsg}</FormText>}
        {isError && (
          <FormText color="danger">
            {errorMsg || `Invalid value for ${name}.`}
          </FormText>
        )}
      </FormGroup>
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  label: null,
  value: "",
  placeholder: null,
  isChecked: false,
  options: [],
  changeHandler: () => {},
  blurHandler: () => {},
  validate: () => {},
  isError: false,
  append: null,
  prepend: null,
  errorMsg: null,
  infoMsg: null,
  rows: null,
  className: "",
  labelClassName: "",
  inputClassName: "",
};

Input.propTypes = {
  type: PropTypes.oneOf([
    "checkbox",
    "date",
    "dateTime",
    "radio",
    "select",
    "text",
    "textarea",
  ]),
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  placeholder: PropTypes.string,
  isChecked: PropTypes.bool,
  changeHandler: PropTypes.func,
  blurHandler: PropTypes.func,
  validate: PropTypes.func,
  isError: PropTypes.bool,
  append: PropTypes.any,
  prepend: PropTypes.any,
  errorMsg: PropTypes.string,
  infoMsg: PropTypes.string,
  rows: PropTypes.number,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};

export default Input;
