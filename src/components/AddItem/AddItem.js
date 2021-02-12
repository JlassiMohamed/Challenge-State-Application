import React, { Component } from 'react'

class AddItem extends Component {
  state = {
    inputText:"",
  };
  handleChange =(e)=>{
    this.setState({inputText: e.target.value});
  }
  render() {
    return (
      <div className="Add">
        <input
          style={{ width: "80%" }}
          onChange={this.handleChange}
          value={this.state.inputText}
          placeholder="Add a to do ..."
        />
        <button
          style={{ width: "100px" }}
            onClick={() => {
            this.state.inputText && this.props.handleItem(this.state.inputText);
            this.setState({ inputText: "" });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
export default AddItem;
