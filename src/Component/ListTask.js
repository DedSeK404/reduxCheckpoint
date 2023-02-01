import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckToSlot,
  faEdit,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export const ListTask = ({ todo, setTodo, setEditTodo }) => {
  const list = useSelector(state => state.list);
  console.log(list)
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

  const [done, setDone] = useState("all");
  const handleClick = (value) => {
    setDone(value);
  };

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
              onChange={(event) => event.preventDefault()}
            />
            <FontAwesomeIcon
              className={`btn${isDone ? "isDone" : ""}`}
              onClick={() => handleComplete(list)}
              icon={faCheckToSlot}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="btn"
              onClick={() => handleEdit(list)}
              icon={faEdit}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="btn"
              onClick={() => handleDelete(list)}
              icon={faTrashCan}
            ></FontAwesomeIcon>
          </motion.li>
        ))}
    </div>
  );
};
