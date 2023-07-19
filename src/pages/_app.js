import { useReducer } from "react";
import { TodoContext } from "@/state";
import { TodoReducer } from "@/state/reducers";
import { initialState } from "@/state";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </TodoContext.Provider>
  );
}
