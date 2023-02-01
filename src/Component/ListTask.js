import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckToSlot,
  faEdit,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletetodo, edittodo } from "../JS/actions/Actions";

export const ListTask = ({ todo, setTodo, setEditTodo, id, description, isDone }) => {
  const list = useSelector(state => state.list);
  
  // const handleEdit = ({ id }) => {
  //   const findTodo = todo.find((todo) => todo.id === id);
  //   setEditTodo(findTodo);
  // };

  // const handleDelete = ({ id }) => {
  //   setTodo(todo.filter((todo) => todo.id !== id));
  // };

 
  const [todotitle, setTodoTitle] = useState("");
  const handleChange = (e) => setTodoTitle(e.target.value);
  const dispatch = useDispatch();
  const status = useSelector(state => state.status);
  
  const handleEdit = () => {
    dispatch(edittodo());
  }

 const [check, setCheck] = useState(false)
 const handleCheck = (isDone) => {
  setCheck(isDone = true)
 }
const [done, setDone] = useState(status);
console.log(status)
const handleClick = (value) => {
  setDone(value);
};

  const handleDelete = () => dispatch(deletetodo(id));
  const handleChecks = () => dispatch(check(isDone));
  console.log(isDone)
  const handleComplete = (todos) => {
    setTodo(
      list.map((item) => {
        if (item.id === todos.id) {
          return { ...item, isDone: !item.isDone };
        }

        return item;
      })
    );
  };


  const handleChecker = () => dispatch(check(isDone));
  
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <div style={{ display: "flex" }}>
        <button onClick={() => handleClick("done")} className="done">
          Done
        </button>
        <button className="done" onClick={() => handleClick("undone")}>
          NotDone
        </button>
        <button className="done" onClick={() => handleClick("all")}>
          all
        </button>
      </div>
      {list
        .filter((e) =>
          done == "done" ? e.isDone : done == "undone" ? !e.isDone : e
        )
        .map(({ id, description, isDone }) => (
          
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
            whileHover={{ scale: 1.07 }}
            key={id}
          >
            <input
              className={`list${isDone ? "isDone" : "input"}`}
              type="text"
              value={description}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              className={`btn${isDone ? "isDone" : ""}`}
               onClick={handleChecker}
              icon={faCheckToSlot}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="btn"
              onClick={() => handleEdit(list)}
              icon={faEdit}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="btn"
              onClick={handleDelete}
              icon={faTrashCan}
            ></FontAwesomeIcon>
          </motion.li>
        ))}
    </div>
  );
};
