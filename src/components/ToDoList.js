import ToDoItem from "./ToDoItem";

const { Component } = require("react");

class ToDoList extends Component {
  render() {
    const TodoListItems = [
      {
        id: 1,
        text: "Learn React",
        completed: false,
      },
      {
        id: 2,
        text: "Learn JS",
        completed: false,
      },
      {
        id: 3,
        text: "Learn Anything",
        completed: true,
      },
    ];

    return (
      <div className="container">
        <ul className="list">
          {TodoListItems.map((item) => (
            <ToDoItem toDo={item} key={item.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
