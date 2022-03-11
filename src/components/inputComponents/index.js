import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import Input from "../../common/components/input";
import NumberValidationCard from "../validationCard.js/number";
import StringValidationCard from "../validationCard.js/string";
import {
  defaultForm,
  defaultNumberValidation,
  defaultStringValidation,
} from "./const";

const InputComponent = () => {
  const [form, setForm] = useState(defaultForm);
  const [strValidation, setStrValidation] = useState(defaultStringValidation);
  const [numValidation, setNumValidation] = useState(defaultNumberValidation);
  console.log("temp", {
    strValidation,
    numValidation,
  });

  const updateForm = (name, value) => {
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container className="py-5">
      <h3 className="mb-5 border-bottom py-2 text-center">Input Components</h3>
      <Row>
        <Col sm="8">
          <div className="border bg-light p-4 h-100">
            <Input
              label="Name (Simple Text)"
              name="text"
              value={form.text}
              prepend="@"
              changeHandler={updateForm}
              validation={strValidation}
            />
            <Input
              label="Number"
              name="number"
              type="number"
              value={form.number}
              changeHandler={updateForm}
              validation={numValidation}
            />
            {/* <Input
              label="Check Box"
              name="checkbox"
              type="checkbox"
              isChecked={form.checkbox}
              changeHandler={updateForm}
            />
            <Input
              label="Text Area"
              name="textarea"
              type="textarea"
              value={form.textarea}
              isError
              errorMsg="Minimum 50 letters required!"
              changeHandler={updateForm}
            />
            <Input
              label="Select"
              name="select"
              type="select"
              options={[
                { label: "Black", value: "black" },
                { label: "Green", value: "green" },
                { label: "Red", value: "red" },
                { label: "Yellow", value: "yellow" },
              ]}
              value={form.select}
              changeHandler={updateForm}
            />
            <Input
              label="Male"
              name="gender"
              type="radio"
              value="male"
              isChecked={form.gender === "male"}
              changeHandler={updateForm}
            />
            <Input
              label="Female"
              name="gender"
              type="radio"
              value="female"
              isChecked={form.gender === "female"}
              changeHandler={updateForm}
            /> */}
          </div>
        </Col>
        <Col sm="4">
          <div className="border-start ps-4 h-100">
            <StringValidationCard
              defaultValidation={strValidation}
              handleValidationChange={(validation) =>
                setStrValidation(validation)
              }
            />
            <NumberValidationCard
              defaultValidation={numValidation}
              handleValidationChange={(validation) =>
                setNumValidation(validation)
              }
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InputComponent;
