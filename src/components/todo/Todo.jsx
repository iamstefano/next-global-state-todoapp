import { React, useContext } from "react";

import { TodoContext } from "@/state";

import styles from "./index.module.scss";

const Todo = ({ data }) => {
  const { state, dispatch } = useContext(TodoContext);

  const onHandleClick = () => {
    confirm("Sei sicuro di voler cambiare stato?") &&
      dispatch({ type: "SET_TODO_COMPLETED", payload: data.id });
  };

  const onHandleDelete = (e) => {
    if (e.pageX >= 0) {
      dispatch({ type: "REMOVE_TODO", payload: data.id });
    }
  };

  const onHandleDrag = (e) => {
    e.target.style.display = "none";
  };

  return (
    <div
      className={`${styles.Todo} ${data.completed && styles.completed}`}
      onClick={onHandleClick}
      onDragEnd={onHandleDelete}
      onDrag={onHandleDrag}
      draggable="true"
    >
      <div className={styles.content}>
        <p>{data.id}</p>
        <h3>{data.content}</h3>
      </div>
      <p>{data.completed ? "Ottimo lavoro" : "Nuova sfida?"}</p>
    </div>
  );
};

export default Todo;
