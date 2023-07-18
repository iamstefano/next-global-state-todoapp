import { useContext } from "react";

import { TodoContext } from "@/state";

import styles from "./index.module.scss";

const Todo = ({ data }) => {
  const dispatch = useContext(TodoContext);

  return (
    <div className={styles.Todo}>
      {data.todo} {data.completed ? "✅" : "❌"}
    </div>
  );
};

export default Todo;
