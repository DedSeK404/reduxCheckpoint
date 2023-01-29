import "./App.css";
import { Task } from "./Component/Task";
import { Addtask } from "./Component/Addtask";
import { useState } from "react";
import { ListTask } from "./Component/ListTask";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  console.log(todo)
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className="bkg">
      <br></br> <br></br>
    <div className="Container">
      <Task />
      <Addtask input={input} setInput={setInput} todo={todo} setTodo={setTodo} editTodo={editTodo} setEditTodo={setEditTodo}/>
      <ListTask todo={todo} setTodo={setTodo}  setEditTodo={setEditTodo}/>
    </div>
    </div>
  );
}

export default App;
