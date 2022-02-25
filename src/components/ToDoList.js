import React from "react";
import Todo from "./ToDo";

export default function TodoList({ todos, toggleTodo }) {
  return todos.map((todo) => {
    return (
      <Todo
        className="ToDoList"
        key={todo.id}
        toggleTodo={toggleTodo}
        todo={todo}
      />
    );
  });
}
