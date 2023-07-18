import Todo from "../todo";
import { useContext } from "react";
import { TodoContext } from "@/state";

const TodoList = () => {
  const { state } = useContext(TodoContext);

  console.log(state);
  return (
    <div>
      {state.map((todo) => (
        <Todo data={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
