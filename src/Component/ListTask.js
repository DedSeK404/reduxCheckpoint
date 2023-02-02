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
import { Task } from "./Task";

export const ListTask = ({  id,  isDone }) => {
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



  const handleChecker = () => dispatch(checktodo(isDone));
  
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
          
          <Task key={id} id={id}  description={description} isDone={isDone}/>
        ))}
    </div>
  );
};
