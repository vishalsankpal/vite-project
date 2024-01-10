import React, { Component } from "react";

export default class CorrectedForm extends Component {
  state = {
    uName: "",
    uPass: "",
    uEmail: "",
    utc: false,
  };
  changeHandler = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    this.setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  changeHandler2 = (e) => {
    const { name, value, checked, type } = e.target;
    // console.log({ name, value });
    // this.setState((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
    // console.log({ name, value, checked, type });
    // if (type === "checkbox") {
    //   this.setState({ [name]: checked });
    // } else {
    //   this.setState({ [name]: value });
    // }
    // or optimised
    const newState = { [name]: value };
    if (type === "checkbox") {
      newState[name] = checked;
    }
    this.setState(newState);
  };
  render() {
    return (
      <div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="uName"
            onChange={this.changeHandler}
            value={this.state.uName}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="uPass"
            onChange={this.changeHandler}
            value={this.state.uPass}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="uEmail"
            onChange={this.changeHandler}
            value={this.state.uEmail}
          />
        </div>
        <div>
          <label>Terms and conditions apply</label>
          <input
            type="checkbox"
            name="utc"
            onChange={this.changeHandler2}
            value={this.state.utc}
          />
        </div>
      </div>
    );
  }
}
