import { React, useState, useContext } from "react";
import { useRouter } from "next/router";
import { TodoContext } from "@/state";
import styles from "@/styles/Login.module.scss";

export default function Login() {
  const router = useRouter();
  const { state, dispatch } = useContext(TodoContext);
  const [input, setInput] = useState("");

  const onHandleInput = (e) => setInput(e.target.value);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_USERNAME", payload: input });
    router.push("/");
  };

  return (
    <form className={styles.Login} onSubmit={onHandleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        value={input}
        onChange={onHandleInput}
        placeholder="Insert Username"
      />
      <input type="submit" value="Login" />
    </form>
  );
}
