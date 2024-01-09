import { Component } from "react";

export default class ClassBased extends Component {
  //   vishal = "abc";
  constructor(props) {
    super(props);
    this.state = {
      text: "abc",
    };
  }
  handler = () => {
    this.setState({
      text: "changed",
    });
  };
  render() {
    return (
      <div>
        <h2>
          This data is coming from parent compenent parent component name is{" "}
          {this.props.name}
        </h2>
        <h1>Hello it is class component{this.state.text}</h1>
        <button onClick={() => this.handler()}>Change data</button>
      </div>
    );
  }
}
