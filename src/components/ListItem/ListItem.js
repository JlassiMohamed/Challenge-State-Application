import React from 'react'
import './ListItem.css'
import { InputGroup, FormControl, Button } from "react-bootstrap";

const ListItem = ({ lisItems, handleDelete,}) => {
    return (
      <div>
        <h3 className="HeadingTasks">List of tasks:</h3>
        {lisItems.map((item, i) => (
          <ul className="ListOfTasks" key={i}>
            <li className="Task">{item}</li>
            <button className="deleteBtn"  onClick={() => handleDelete(i)}>
              Delete
            </button>
          </ul>
        ))}
      </div>
    );
};


export default ListItem
