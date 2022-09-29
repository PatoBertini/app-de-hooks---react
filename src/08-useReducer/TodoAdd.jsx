import React from "react";
import useForm from "../hooks/useForm";

const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.lenght <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Que hay que hacer?"
          value={description}
          onChange={onInputChange}
          name="description"
        />
        <button type="submit"> Agregar TODO</button>
      </form>
    </>
  );
};

export default TodoAdd;
