import { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        email: "",
        password: "",
        selectedOption: "",
        age: "0",
        interest: {
          sports: false,
          music: false,
        },
      },
      error: {},
      submit: false,
    };
  }
  handlerInputChnage = (e) => {
    const { value, name } = e.preventDefault();
    this.setState((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      },
    }));
  };
  namefieldHandler = (e) => {
    const { value, name } = e.target;
    this.setState({
      data: {
        name: value,
      },
    });
  };
  emailfieldHandler = (e) => {
    const { value } = e.target;
    this.setState({
      data: {
        name: this.state.data.name,
        email: value,
      },
    });
  };

  passwordfieldHandler = (e) => {
    const { value } = e.target;
    this.setState({
      data: {
        name: this.state.data.name,
        email: this.state.data.email,
        password: value,
      },
    });
  };
  genderHandler = (e) => {
    const { value } = e.target;
    this.setState({
      data: {
        name: this.state.data.name,
        email: this.state.data.email,
        password: this.state.data.password,
        selectedOption: value,
      },
    });
  };
  handleCheckboxChange1 = (e) => {
    this.setState({
      data: {
        name: this.state.data.name,
        email: this.state.data.email,
        password: this.state.data.password,
        selectedOption: this.state.data.selectedOption,
        interest: {
          sports: e.target.checked,
        },
      },
    });
  };
  handleCheckboxChange2 = (e) => {
    const { checked } = e.target;
    this.setState({
      data: {
        name: this.state.data.name,
        email: this.state.data.email,
        password: this.state.data.password,
        selectedOption: this.state.data.selectedOption,
        interest: {
          sports: this.state.data.interest.sports,
          music: checked,
        },
      },
    });
  };
  handleSliderChange = (e) => {
    const { value } = e.target;
    this.setState({
      data: {
        name: this.state.data.name,
        email: this.state.data.email,
        password: this.state.data.password,
        selectedOption: this.state.data.selectedOption,
        interest: {
          sports: this.state.data.interest.sports,
          music: this.state.data.interest.music,
        },
        age: value,
      },
    });
  };
  submitForm = (e) => {
    e.preventDefault();
    const errors = {};
    let isError = false;
    Object.keys(this.state.data).forEach((item) => {
      if (typeof this.state.data[item] !== "object") {
        if (this.state.data[item].trim() === "") {
          errors[item] = "Please fill out this field";
          isError = true;
        }
      }
    });
    if (isError) {
      this.setState({ error: errors });
    } else {
      this.setState({
        // data: {
        //   name: "",
        //   email: "",
        //   password: "",
        // },
        // error: {},
        submit: true,
      });
    }
  };
  render() {
    const { data, error, submit } = this.state;
    return (
      <div className="form-container">
        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              // onChange={this.namefieldHandler}
              onChange={this.handlerInputChnage}
            />
            <span>{this.state.data.name}</span>
            {error.name && <span>{error.name}</span>}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              // onChange={this.emailfieldHandler}
              onChange={this.handlerInputChnage}
            />
            {error.email && <span>{error.email}</span>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              // onChange={this.passwordfieldHandler}
              onChange={this.handlerInputChnage}
            />
            {error.password && <span>{error.password}</span>}
          </div>
          <div>
            <label>Gender</label>
            <input
              type="radio"
              value="Male"
              onChange={this.genderHandler}
            />{" "}
            Male
            <input
              type="radio"
              value="Female"
              // onChange={this.genderHandler}
              onChange={this.handlerInputChnage}
            />
            Female
            {error.gender && <span>{error.gender}</span>}
          </div>
          <div>
            <label>Interest</label>
            <input
              type="checkbox"
              name="reading"
              onChange={this.handleCheckboxChange1}
            />{" "}
            Sports
            <input
              type="checkbox"
              name="reading"
              onChange={this.handleCheckboxChange2}
            />{" "}
            Music
          </div>
          <div>
            <label>Age</label>
            <input
              type="range"
              min={0}
              max={100}
              value={this.state.data.age}
              onChange={this.handleSliderChange}
            />
            <p>Value: {this.state.data.age}</p>
          </div>
          <button type="submit">Submit</button>
        </form>
        {submit && (
          <div>
            <h2>Name: {this.state.data.name}</h2>
            <h2>password: {this.state.data.password}</h2>
            <h2>email: {this.state.data.email}</h2>
            <h2>Gender:{this.state.data.selectedOption}</h2>
            <h2>age: {this.state.data.age}</h2>
          </div>
        )}
      </div>
    );
  }
}
