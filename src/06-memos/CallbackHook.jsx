import { useState, useCallback } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value);
  }, []); // esta es la funcion que se llama en ShowIncrement, por eso aca van los argumentos y todo.

  //   const incrementFather = () => {
  //     setCounter(counter + 1);
  //   };
  return (
    <div>
      <h1 className="titulo">useCallback hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </div>
  );
};

export default CallbackHook;
