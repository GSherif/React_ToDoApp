import { Component } from "react";

class ToDoItem extends Component {
  render() {
      const {text , completed} = this.props.toDo;
    return (
      <>
        <li className="item">{text}  <input type="Checkbox" defaultChecked={completed}/></li>
      </>
    );
  }
}

export default ToDoItem;
