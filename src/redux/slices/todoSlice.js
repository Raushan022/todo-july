import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
   todos: [],
};

const todoSlice = createSlice({
   name: "todos",
   initialState,
   reducers: {
      addTodo: (state, action) => {
         const newTodo = {
            id: nanoid(),            //auto generates unique id
            title: action.payload.title,
            description: action.payload.description,
            isCompleted: false,
            tag: action.payload.tag
         }
         state.todos.push(newTodo)  // Immer lets us mutate state directly
      }
   }
})

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;