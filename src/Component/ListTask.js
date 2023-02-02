import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Task } from "./Task";

export const ListTask = () => {
  const list = useSelector((state) => state.list);
  const status = useSelector((state) => state.status);
  const [done, setDone] = useState(status);

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
          <Task key={id} id={id} description={description} isDone={isDone} />
        ))}
    </div>
  );
};
