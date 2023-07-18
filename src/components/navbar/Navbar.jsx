import React, { useContext } from "react";

import { TodoContext } from "@/state";

import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <h1>TO DO LIST</h1>
    </div>
  );
};

export default Navbar;
