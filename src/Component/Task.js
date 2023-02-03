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
  let audio = new Audio("/Check.mp3");
  const start = () => {
    audio.play();
  };

  let delete_audio = new Audio("/Whoosh.mp3");
  const audio_delete = () => {
    delete_audio.play();
  };

  let edit_audio = new Audio("/Beep.mp3");
  const audio_edit = () => {
    edit_audio.play();
  };

  // const list = useSelector((state) => state.list);
  const [todotitle, setTodoTitle] = useState(description);
  const handleChange = (e) => setTodoTitle(e.target.value);

  const [readinput, setreadinput] = useState(true);
  const dispatch = useDispatch();
  const handleEdit = (event) => {
    if (readinput) {
      setreadinput(false);
    } else {
      dispatch(edittodo(id, todotitle), audio_edit());
      setreadinput(true);
    }
  };

  const handleDelete = () => dispatch(deletetodo(id), audio_delete());

  const handleChecker = () => dispatch(checktodo(id, isDone), start());

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
          value={todotitle}
          onChange={handleChange}
          readOnly={readinput}
        />
        <FontAwesomeIcon
          className={`btn${isDone ? "isDone" : ""}`}
          onClick={handleChecker}
          icon={faCheckToSlot}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
        className={`btn${readinput ? "btn" : "on"}`}
          // className="btn"
          onClick={handleEdit}
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
