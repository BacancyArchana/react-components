import React, { useState } from "react";
import Input from "../../common/components/input";

const InputComponent = () => {
  const [form, setForm] = useState({
    text: "simple text",
    checkbox: true,
    textarea: "This is a long text.",
    select: "black",
    gender: "male",
  });

  const updateForm = (name, value) => {
    console.log("name, value", name, value);
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Input
        label="Simple Text"
        name="text"
        value={form.text}
        prepend="@"
        changeHandler={updateForm}
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
  );
};

export default InputComponent;
