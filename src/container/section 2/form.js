import React from "react";

import "./form.css";

const validEmailRegex = RegExp(
  /^(([^<>()\],;:\s@]+([^<>()\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i
);
const validPasswordRegex = RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*].{6,20}$/
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: "",
        email: "",
        password: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password = validPasswordRegex.test(value)
          ? ""
          : "Password is not valid!";

        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      validateForm(this.state.errors) &&
      this.state.email !== null &&
      this.state.password !== null
    ) {
      document.getElementById("result").innerHTML = "SUBMITED";
    } else {
      document.getElementById("result").innerHTML = "Please Fill Form Properly";
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Create Account</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="fullName">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                onChange={this.handleChange}
                noValidate
              />
              {errors.fullName.length > 0 && (
                <span className="error">{errors.fullName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                noValidate
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                minLength="8"
                noValidate
              />
              {errors.password.length > 0 && (
                <span className="error">
                  {errors.password}
                  <br /> Password Must Containat least one numeric digit, one
                  uppercase, one lowercase letter and a special character.
                </span>
              )}
            </div>
            <div className="info">
              <small>
                Password must be more than eight characters in length.
              </small>
            </div>
            <div className="submit">
              <button>JOIN</button>
              <p id="result" style={{ color: "green" }}></p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
