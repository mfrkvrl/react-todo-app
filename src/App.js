import "./App.css";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css"
function App() {
  const [newItem, setnewItem] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangeTodo = (e) => {
    setnewItem(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    console.log("a")
  };

  const toggleTodo=(id,completed)=>{
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id===id){
          return {...todo,completed}
        }
        return todo;
      })
    })

  }

  return (
    <div className="container">
      <form onSubmit={onSubmitForm} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={onChangeTodo}
          ></input>
        </div>
        <button className="btn">Add</button>
      </form>

      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map(todo => {
            return (
              <li key={todo.id}>
                <label>
                  <input type="checkbox" checked={todo.completed} 
                  onChange={e=>toggleTodo(todo.id,e.target.checked)} />
                  {todo.title}
                </label>
                <button className="btn btn-danger">Delete</button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default App;
