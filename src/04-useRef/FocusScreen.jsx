import { useRef } from "react";

const FocusScreen = () => {

    const inputRef = useRef()
    console.log(inputRef);

    const buton = () =>{
        inputRef.current.select()
        console.log(inputRef);
    }


  return (
    <div>
      <h1 className="titulo">useRef hook </h1>
      <input type="text"
      ref={inputRef}
      placeholder="Ingrese su nombre" />
      <button onClick={buton}>SEt focus</button>
    </div>
  )
}

export default FocusScreen
