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
      },

      toggleCompleted: (state, action) => {
         const todoId = action.payload;
         const todo = state.todos.find((t) => t.id === todoId);
         if (todo) {
            todo.isCompleted = !todo.isCompleted
         }
      },

      deleteTodo: (state, action) => {
         const todoId = action.payload;
         state.todos = state.todos.filter((t) => t.id !== todoId)
      },

      editTodo: (state, action) => {
         const { editId, updatedTitle, updatedDescription, updatedTag } = action.payload;
         const todoFound = state.todos.find((t) => t.id === editId);
         if (todoFound) {
            todoFound.title = updatedTitle;
            todoFound.description = updatedDescription
            todoFound.tag = updatedTag
         }
      }
   }
})

export const { addTodo, toggleCompleted, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;