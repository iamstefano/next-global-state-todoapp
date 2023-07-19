import { React, useContext } from "react";

import { TodoContext } from "@/state";

import styles from "./index.module.scss";

const Navbar = () => {
  const { state, dispatch } = useContext(TodoContext);

  const onHandleLogout = () => dispatch({ type: "SET_LOGOUT" });

  return (
    <div className={styles.Navbar}>
      <h1>TO DO LIST</h1>
      <div className={styles.__nav__right}>
        <p>{state.username}</p>
        {state.username && <p onClick={onHandleLogout}>🚪</p>}
      </div>
    </div>
  );
};

export default Navbar;
