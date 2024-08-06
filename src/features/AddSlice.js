import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      text: "do your homework",
      status: "complete",
    },
    {
      id: 2,
      text: "complete your task",
      status: "complete",
    },
  ],
  reducers: {
    addtodo: (state, action) => {
      const newTodo = {
        id: state.length + 1,
        text: action.payload,
        status: "Incomplete",
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const temp = state.map((todo) => {
        if (todo.id === action.payload.todo.id) {
          return {
            id: todo.id,
            status: todo.status === "complete" ? "incomplete" : "complete",
            text: todo.text,
          };
        }
        return {...todo};
      });
    //   state = [...temp];
    // state.push({})
    return [
         ...temp
    ]
    },

    deletetodo: (state, action) => {
      const index = state.filter((todo) => todo.id !== action.payload);
      if (index) {
        state.splice(index, 1);
      }
    },
    edittodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) return action.payload;
        else return todo;
      });
      console.log(action.payload);
    },
  },
});

export const { addtodo, toggleComplete, deletetodo, edittodo } =
  addSlice.actions;
export default addSlice.reducer;
