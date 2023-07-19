import { createContext } from "react";

export const TodoContext = createContext({});

export const initialState = {
  todos: [],
  username: "",
};
