import useCounter from "../hooks/useCounter";
import { useState, useMemo } from "react";

const heavyStuff = (iterationNumer = 100) => {
  for (let i = 0; i < iterationNumer; i++) {
    console.log("ahi vamos");
  }
  return `${iterationNumer} de iteracciones hechas`;
};

const MemoHook = () => {
  const { counter, increment } = useCounter(4000);

  const valorSave = useMemo(() => heavyStuff(counter), [counter]);

  const [show, setShow] = useState(true);

  return (
    <div>
      <h1 className="titulo">useMemo hook </h1>
      <h2>Counter: {counter}</h2>

      <h4>{valorSave}</h4>
      <button onClick={() => increment()}> +1</button>

      <button onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default MemoHook;
