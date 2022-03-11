import React, { useState } from "react";
import { Card, CardTitle, CardBody } from "reactstrap";

import Input from "../../common/components/input";

const StringValidationCard = ({
  defaultValidation,
  handleValidationChange,
}) => {
  const [validationObj, setValidation] = useState({
    ...defaultValidation,
  });

  const changeHandler = (name, value) => {
    setValidation((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    handleValidationChange({ ...validationObj, [name]: value });
  };

  return (
    <Card color="light" body className="mb-3">
      <CardTitle tag="h5">String Validation</CardTitle>
      <CardBody>
        <Input
          label="Required"
          name="required"
          type="checkbox"
          isChecked={validationObj.required}
          changeHandler={changeHandler}
        />
        <Input
          label="Allow White Space"
          name="whiteSpace"
          type="checkbox"
          isChecked={validationObj.whiteSpace}
          changeHandler={changeHandler}
        />
        <Input
          label="Trim Text Value"
          name="trimInput"
          type="checkbox"
          isChecked={validationObj.trimInput}
          changeHandler={changeHandler}
        />
        <Input
          label="Min Length"
          name="minLength"
          type="number"
          value={validationObj.minLength}
          changeHandler={changeHandler}
        />
        <Input
          label="Max Length"
          name="maxLength"
          type="number"
          value={validationObj.maxLength}
          changeHandler={changeHandler}
        />
      </CardBody>
    </Card>
  );
};

export default StringValidationCard;
