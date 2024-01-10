import { Component } from "react";
import { toast } from "react-toastify";

class HobbiesFiller extends Component {
  state = {
    newHobby: "",
    hobbies: ["music", "travel"],
  };

  onNewHobbyChange = (e) => {
    this.setState({ newHobby: e.target.value });
  };

  onAddNewHobby = () => {
    const { newHobby, hobbies } = this.state;
    const newHobbyLC = newHobby.toLowerCase();
    if (!newHobby) {
      toast("Please enter a valid hobby!");
      return;
    }

    if (hobbies.includes(newHobbyLC)) {
      toast("This hobby already exists!");
      return;
    }

    this.setState({ hobbies: [newHobbyLC, ...hobbies], newHobby: "" });
    toast(`${newHobby} added successfully!`);
    console.log(this.state.hobbies);
  };
  delete = (id) => {
    this.setState({
      hobbies: this.state.hobbies.filter((_, index) => index !== id),
      newHobby: "",
    });
  };
  render() {
    const { newHobby, hobbies } = this.state;
    // console.log("Re-Render: ", { newHobby, hobbies });
    return (
      <>
        <div>
          <div className="form-element">
            <p>New Hobby</p>
            <input
              type="text"
              placeholder="Enter a hobby"
              value={newHobby}
              onChange={this.onNewHobbyChange}
            />
            <button onClick={this.onAddNewHobby}>Add Hobby</button>
          </div>
        </div>
        {hobbies.map((item, index) => (
          <div key={index} onClick={() => this.delete(index)}>
            <h2>{item}</h2>
          </div>
        ))}
      </>
    );
  }
}

export default HobbiesFiller;
