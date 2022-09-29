import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || []; // Esto significa que intenta parsear todo lo que hay en el storage, pero al ppio va a ser nulo entonces devolve un array vacio. || []
};

const useTodo = (initialState = []) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  return {
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todosCount: todos.length,
    todos,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };
};

export default useTodo;
