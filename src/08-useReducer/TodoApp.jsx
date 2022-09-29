import React from "react";
import TodoList from "./TodoList";
import "../index.css";
import TodoAdd from "./TodoAdd";
import useTodo from "../hooks/useTodo";

const TodoApp = () => {

 const {handleDeleteTodo,todosCount, pendingTodosCount, handleNewTodo, handleToggleTodo, todos} = useTodo()

  return (
    <div>
      <h1 className="titulo">Todo App {todosCount}, pendientes {pendingTodosCount} con localStorage y useReducer hook</h1>
      <hr />
      <div className="appDiv">
        <div className="taskList">
          <ul className="list">
            <TodoList
              todos={todos}
              onDeleteTodo={handleDeleteTodo}
              onToggleTodo={handleToggleTodo}
            />
            {/* enviamos la funcion handleDeleteTodo atraves del argumento  onDeleteTodo*/}
          </ul>
        </div>
        <div className="formDiv">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
