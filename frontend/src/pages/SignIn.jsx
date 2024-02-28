import React, { useState } from "react";
import FormInput from "../components/FormInput";
import "../css/signin.css";

const SignIn = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email adress",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 9-20 characters and include at leas 1 letter 1 number and 1 special character",
      label: "Password",
      pattern: "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{9,20}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="Signup">
      <form onSubmit={handleSubmit}>
        <h1 className="login-h1">Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          ></FormInput>
        ))}

        <button className="button-signin">Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
