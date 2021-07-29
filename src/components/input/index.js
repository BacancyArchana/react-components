import React, { useState } from "react";
import { Container, Row, Col, Card, CardTitle, CardBody } from "reactstrap";

import Input from "../../common/components/input";

const InputComponent = () => {
  const [form, setForm] = useState({
    text: "simple text",
    number: 600,
    checkbox: true,
    textarea: "This is a long text.",
    select: "black",
    gender: "male",
  });
  const [stringValidation, setStringValidation] = useState({
    fieldName: "Name",
    required: false,
    trimInput: false,
    whiteSpace: false,
  });

  const [numberValidation, setNumberValidation] = useState({
    fieldName: "Age",
    required: false,
    positive: false,
    float: false,
    range: null,
    fixDigit: false,
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
              validation={{
                ...stringValidation,
              }}
            />
            <Input
              label="Number"
              name="number"
              type="number"
              value={form.number}
              changeHandler={updateForm}
              validation={{
                ...numberValidation,
              }}
            />
            <Input
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
            />
          </div>
        </Col>
        <Col sm="4">
          <div className="border-start ps-4 h-100">
            <Card color="light" body className="mb-3">
              <CardTitle tag="h5">String Validation</CardTitle>
              <CardBody>
                <Input
                  label="Required"
                  name="required"
                  type="checkbox"
                  isChecked={stringValidation.required}
                  changeHandler={(name, value) =>
                    setStringValidation((prevData) => ({
                      ...prevData,
                      [name]: value,
                    }))
                  }
                />
                <Input
                  label="Allow White Space"
                  name="whiteSpace"
                  type="checkbox"
                  isChecked={stringValidation.whiteSpace}
                  changeHandler={(name, value) =>
                    setStringValidation((prevData) => ({
                      ...prevData,
                      [name]: value,
                    }))
                  }
                />
                <Input
                  label="Trim Text Value"
                  name="trimInput"
                  type="checkbox"
                  isChecked={stringValidation.trimInput}
                  changeHandler={(name, value) =>
                    setStringValidation((prevData) => ({
                      ...prevData,
                      [name]: value,
                    }))
                  }
                />
              </CardBody>
            </Card>
            <Card color="light" body className="mb-3">
              <CardTitle tag="h5">Number Validation</CardTitle>
              <CardBody>
                <Input
                  label="Required"
                  name="required"
                  type="checkbox"
                  isChecked={numberValidation.required}
                  changeHandler={(name, value) =>
                    setNumberValidation((prevData) => ({
                      ...prevData,
                      [name]: value,
                    }))
                  }
                />
                <Input
                  label="Positive"
                  name="positive"
                  type="checkbox"
                  isChecked={numberValidation.positive}
                  changeHandler={(name, value) =>
                    setNumberValidation((prevData) => ({
                      ...prevData,
                      [name]: value,
                    }))
                  }
                />
                <Input
                  label="Float"
                  name="float"
                  type="checkbox"
                  isChecked={numberValidation.float}
                  changeHandler={(name, value) =>
                    setNumberValidation((prevData) => ({
                      ...prevData,
                      [name]: value,
                    }))
                  }
                />
                <Input
                  label="Start Range"
                  name="range[0]"
                  type="number"
                  value={
                    (numberValidation.range && numberValidation.range[0]) || ""
                  }
                  changeHandler={(name, value) =>
                    setNumberValidation((prevData) => ({
                      ...prevData,
                      range: [
                        value,
                        numberValidation.range ? prevData.range[1] : "",
                      ],
                    }))
                  }
                />
                <Input
                  label="End Range"
                  name="range[1]"
                  type="number"
                  value={
                    (numberValidation.range && numberValidation.range[1]) || ""
                  }
                  changeHandler={(name, value) =>
                    setNumberValidation((prevData) => ({
                      ...prevData,
                      range: [
                        numberValidation.range ? prevData.range[0] : "",
                        value,
                      ],
                    }))
                  }
                />
                <Input
                  label="Fix Digits"
                  name="fixDigit"
                  type="number"
                  value={numberValidation.fixDigit}
                  changeHandler={(name, value) =>
                    setNumberValidation((prevData) => ({
                      ...prevData,
                      [name]: value,
                    }))
                  }
                />
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InputComponent;
