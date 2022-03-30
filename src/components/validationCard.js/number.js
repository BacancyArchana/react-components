import React, { useState } from "react";
import { Card, CardTitle, CardBody } from "reactstrap";

import Input from "../../common/components/input";

const NumberValidationCard = ({
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
      <CardTitle tag="h5">Number Validation</CardTitle>
      <CardBody>
        <Input
          label="Required"
          name="required"
          type="checkbox"
          isChecked={validationObj.required}
          changeHandler={changeHandler}
        />
        <Input
          label="Positive"
          name="positive"
          type="checkbox"
          isChecked={validationObj.positive}
          changeHandler={changeHandler}
        />
        <Input
          label="Float"
          name="float"
          type="checkbox"
          isChecked={validationObj.float}
          changeHandler={changeHandler}
        />
        <Input
          label="Start Range"
          name="range[0]"
          type="number"
          value={(validationObj.range && validationObj.range[0]) || ""}
          changeHandler={(name, value) =>
            changeHandler("range", [
              value,
              validationObj.range ? validationObj.range[1] : "",
            ])
          }
        />
        <Input
          label="End Range"
          name="range[1]"
          type="number"
          value={(validationObj.range && validationObj.range[1]) || ""}
          changeHandler={(name, value) =>
            changeHandler("range", [
              validationObj.range ? validationObj.range[0] : "",
              value,
            ])
          }
        />
        <Input
          label="Fix Digits"
          name="fixDigit"
          type="number"
          value={validationObj.fixDigit}
          changeHandler={changeHandler}
        />
      </CardBody>
    </Card>
  );
};

export default NumberValidationCard;
