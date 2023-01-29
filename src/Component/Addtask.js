import { v4 as uuidv4 } from "uuid";
import React, { useEffect } from "react";

export const Addtask = ({
  todo,
  setTodo,
  input,
  setInput,
  editTodo,
  setEditTodo,
}) => {
  const updateTodo = (description, id, isDone) => {
    const newTodo = todo.map((todo) =>
      todo.id === id ? { description, id, isDone } : todo
    );
    setTodo(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.description);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);
  const onINputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodo([...todo, { id: uuidv4(), description: input, isDone: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.isDone);
    }
    
  };
  return (
    <>
    <form onSubmit={onFormSubmit}>
      <input
      className="add_input"
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        required
        onChange={onINputChange}
      />
      <button className="add" type="submit">{editTodo ? "Save" : "Add"}</button>
    </form>
    <div style={{display:"flex"}}>
    <button className="done">Done</button>
    <button className="done">NotDone</button>
    </div>
    </>
  );
};
