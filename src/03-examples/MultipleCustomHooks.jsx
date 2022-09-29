import useFetch from "../hooks/useFetch";
import useCounter from "../hooks/useCounter";

const MultipleCustomHooks = () => {
  const value = 1
  
  const {counter, increment} = useCounter(value)
  const { data, isLoading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  // data es un array


  // console.log({ data, isLoading, hasError });

  // const {author, quote} = data -> aca como data viene primero null, no la puedo desestructurar. pero si podemos desestructurar algo que tenga valor, como un false, un obj vacio.
  // const {author, quote} = false -> aca author y quote es undefined. entonces la sintaxis correcta es:
  const { author, quote } = !!data && data[0];
  // console.log(author, quote);
  // Aca decimos si la data tiene un valor etonces toma el valor [0]. !data me da false y !!data me da true entonces toma data[0]


  return (
    <>
      <h1 className="titulo">BrakingBad Quotes con un useFetch custom hoook llamada a una API </h1>
      <hr />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <blockquote> {quote}</blockquote>
          <p>{author}</p>
        </div>
      )}
      <button 
      disabled={isLoading}
      onClick={()=>increment()}>Next quote</button>
    </>
  );
};

export default MultipleCustomHooks;
// onClick={increment} => si vos lo pasas asi solamente, estas pasando el event del click y no te va a ejecutar la funcion, tenes que pasarlo como callback