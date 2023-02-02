import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckToSlot,
  faEdit,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checktodo, deletetodo, edittodo } from "../JS/actions/Actions";


export const Task = ({ id, description, isDone }) => {
  const list = useSelector(state => state.list);
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

const handleClick = (value) => {
  setDone(value);
};
const handleDelete = () => dispatch(deletetodo(id));
  const handleChecks = () => dispatch(check(isDone));


  const handleChecker = () => dispatch(checktodo(id, isDone));
  return (
    <div>
      <motion.li
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
        whileHover={{ scale: 1.07 }}
        
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
    </div>
  );
};
