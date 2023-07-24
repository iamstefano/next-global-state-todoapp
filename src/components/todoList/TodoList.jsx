import Todo from "../todo";
import { React, useContext, useState } from "react";
import { TodoContext } from "@/state";
import styles from "./index.module.scss";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [input, setInput] = useState("");

  const onHandleInput = (e) => setInput(e.target.value);
  const onSetNewInput = async (e) => {
    e.preventDefault();

    const payload = {
      id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
      content: input,
      completed: false,
    };

    dispatch({
      type: "ADD_NEW_TODO",
      payload,
    });

    await addDoc(collection(db, "todos-list"), payload);

    setInput("");
  };

  return (
    <div className={styles.TodoList}>
      <div className={styles.heading}>
        <h1>All Todos</h1>
        <form className={styles.input} onSubmit={onSetNewInput}>
          <input
            type="text"
            name="content"
            value={input}
            onChange={onHandleInput}
            placeholder="Add a new todo..."
          />
          <input className={styles.addBtn} type="submit" value="+" />
        </form>
      </div>
      {state?.todos?.map((todo, i) => (
        <Todo data={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
