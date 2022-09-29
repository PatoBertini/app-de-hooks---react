import { Message } from "./Message";
// import { useEffect } from "react";
import useForm from "../hooks/useForm";

const FormWithCustomHook = () => {
  const { formState, onResetForm, onInputChange, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });



  // const { username, email, password } = formState; // desestructuramos formState para utilizarlos debajo. si no desestructuramos arriba esta es otra opcion (opcion 1 arriba 2, traer con ...formState)

  return (
    <>
      <h1 className="titulo">Form With Custom HOOK useForm manipulando inputs</h1>
      <hr />
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        placeholder="pato@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      {username === "pato" && <Message />}{" "}

      <button onClick={onResetForm}> Borrar</button>
    </>
  );
};

export default FormWithCustomHook;

// const onInputChange: desestructuramos el e -> {target} y tmb desestructuramos el {name, value} del target
//   ...formState,[name]: value -> propiedades computadas de los objetos. aca decis que la propiedad name es la que estableces en el objeto con valor value.
// el useEffect se va a mandar a llamar cada vez que el componente se renderiza

//! const { formState, onInputChange }= useForm({}) -> aca traemos de nuestro hook como argumento el formState y el onInputChange para utilizar en este componente. ademas nosotros creamos el objeto del formulario para adaptarlo mejor a nuestro componente.
