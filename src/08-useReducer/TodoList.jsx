import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  // Recibimos la funcion onDeleteTodo y hay que llamarla, como? lo pasamos con la props onDeleteTodo. el paso de las ids no es obligatorio.

  return (
    <>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={(id) => onDeleteTodo(id)}
            onToggleTodo={onToggleTodo}
          />
        );
      })}
    </>
  );
};

export default TodoList;
