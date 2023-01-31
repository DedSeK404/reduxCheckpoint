import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckToSlot,
  faEdit,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React, { useState } from "react";

export const ListTask = ({ todo, setTodo, setEditTodo }) => {

  
  const handleEdit = ({ id }) => {
    const findTodo = todo.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  const handleComplete = (todos) => {
    setTodo(
      todo.map((item) => {
        if (item.id === todos.id) {
          return { ...item, isDone: !item.isDone };
        }

        return item;
      })
    );
  };
  const handleDelete = ({ id }) => { 
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const [done, setDone] = useState(true);
  const handleClick = (e) => {
    
    setDone((current) => !current);
    
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <div style={{ display: "flex" }}>
        <button onClick={handleClick} className="done">
          Done
        </button>
        <button className="done">NotDone</button>
      </div>
      {done &&
        todo.map((todo) => (
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
            whileHover={{ scale: 1.07 }}
            key={todo.id}
          >
            <input
              className={`list${todo.isDone ? "isDone" : "input"}`}
              type="text"
              value={todo.description}
              onChange={(event) => event.preventDefault()}
            />
            <FontAwesomeIcon
              className={`btn${todo.isDone ? "isDone" : ""}`}
              onClick={() => handleComplete(todo)}
              icon={faCheckToSlot}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="btn"
              onClick={() => handleEdit(todo)}
              icon={faEdit}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="btn"
              onClick={() => handleDelete(todo)}
              icon={faTrashCan}
            ></FontAwesomeIcon>
          </motion.li>
        ))}
    </div>
  );
};
