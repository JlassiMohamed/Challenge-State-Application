import './App.css';
import React, { Component } from 'react'
import ListItem from "./components/ListItem/ListItem";
import AddItem from "./components/AddItem/AddItem";

class App extends Component {
  state = {
    lisItems: [],
  };
  handleDelete = (i) => {
    this.setState({
      lisItems: this.state.lisItems.filter((item, n) => n != i),
    });
  };

  handleItem = (item) => {
    this.setState({ lisItems: [...this.state.lisItems, item] });
  }

  render() {
    return (
      <div>
        <div className="Todo">
          <h1 className='Title'>My To Do List</h1>
          <AddItem handleItem={this.handleItem} />
        </div>
        <ListItem
          lisItems={this.state.lisItems}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
export default App;
