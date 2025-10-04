import { createContext, use, useContext, useState } from "react";
//object of Context
export const TodoContext = createContext({
  todos: [{}],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

//use context by wrapping it in a function
export const useTodo = () => {
  return useContext(TodoContext);
};

//provider to wrap to accesss
export const TodoProvider = TodoContext.Provider;
