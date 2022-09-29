import Button from "react-bootstrap/Button";
import useCounter from "../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(); // Aca desestructuramos el objeto devuelto

  return (
    <div>
    <h1 className="titulo">Creamos un custom hook useCounter para tener el codigo mas ordenado</h1>
      <h1> Coounter with hook: {counter}</h1>
      <hr />
      <Button variant="info" onClick={() => increment()}>
        +1
      </Button>
      <Button variant="info" onClick={reset}>
        Reset
      </Button>
      <Button variant="info" onClick={() => decrement(2)}>
        -1
      </Button>
    </div>
  );
};

export default CounterWithCustomHook;

// ! cuando vos haces el onClick, pasas el evento total. si vos queres ponerle un value a eso, tenes que como que eliminarlo al evento y asi te cuenta el value.
//! si vos no 'eliminas' ese evento , y le queres pasar un value, te tira NAN.
