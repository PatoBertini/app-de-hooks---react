import React from "react";

const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  // Aca recibis la funcion onDeleteTodo y le pasas el ID del todo a eliminar
  return (
    <>
      <li className="lista">
        <span className={`${todo.done ? 'text-decoration' : ''}`} onClick={() => onToggleTodo(todo.id)}>{todo.description}</span>
        <button onClick={() => onDeleteTodo(todo.id)} className="deleteTask">
          Eliminar Task
        </button>
      </li>
    </>
  );
};

export default TodoItem;
