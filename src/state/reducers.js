export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "SET_COMPLETED": // ACTIONS
      return {
        //nuovo stato di ritorno
        ...state,
        completed: true,
      };
    case "SET_UNCOMPLETED":
      return {
        ...state,
        completed: false,
      };
    default:
      console.log(state);
      return state;
  }
};
