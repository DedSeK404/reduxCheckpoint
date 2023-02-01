import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../JS/actions/Actions";

export const Addtask = ({
  todo,
  setTodo,
  input,
  setInput,
  editTodo,
  setEditTodo,
}) => {
  const dispatch = useDispatch();
  // const updateTodo = (description, id, isDone) => {
  //   const newTodo = todo.map((todo) =>
  //     todo.id === id ? { description, id, isDone } : todo
  //   );
  //   setTodo(newTodo);
  //   setEditTodo("");
  // };
  // useEffect(() => {
  //   if (editTodo) {
  //     setInput(editTodo.description);
  //   } else {
  //     setInput("");
  //   }
  // }, [setInput, editTodo]);
  // const onINputChange = (event) => {
  //   setInput(event.target.value);
  // };
  // const onFormSubmit = (event) => {
  //   event.preventDefault();
    // if (!editTodo) {
    //   setTodo([...todo, { id: uuidv4(), description: input, isDone: false }]);
    //   setInput("");
    // } else {
    //   updateTodo(input, editTodo.id, editTodo.isDone);
    // }
    
  // };

  const [description, setDescription] = useState('');
  const handleAddTask = () => {
    dispatch(addtodo(description));
    setDescription('');
    
  };
  return (
    <>
    <form >
      {/* onSubmit={onFormSubmit} */}
      <input
      className="add_input"
        type="text"
        placeholder="Enter a Todo..."
        // value={input}
        value={description}
        required
        // onChange={onINputChange}
        onChange={e => setDescription(e.target.value)}
      />
      {/* <button className="add" type="submit">{editTodo ? "Save" : "Add"}</button> */}
      <button className="add" onClick={handleAddTask}>Add</button>
    </form>
   
    </>
  );
};
