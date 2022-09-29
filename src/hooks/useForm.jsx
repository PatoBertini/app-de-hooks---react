import { useState } from "react";

const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    // console.log(e.target);// primero logiamos el e para ver el evento , luego entramos en .target y accedemos al input del onChange y al .value para el valor
    const { name, value } = target;
    // console.log({name, value});
    setFormState({
      ...formState,
      [name]: value,
    });
  };

const onResetForm = ( )=>{
    setFormState(initialForm)
}

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  };
};

export default useForm;

//! en return ponemos ...formState, para enviar por argumentos username, email y password y que puedan ser desestructurados con el formState y onInputChange.