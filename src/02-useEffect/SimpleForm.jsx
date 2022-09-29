import { Message } from "./Message";
import { useState, useEffect } from "react";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const { username, email } = formState;

  const onInputChange = ({target}) =>{
// console.log(e.target);// primero logiamos el e para ver el evento , luego entramos en .target y accedemos al input del onChange y al .value para el valor
const {name, value} = target
// console.log({name, value});
setFormState({
    ...formState,[name]: value
})
  }

  useEffect(() => {
//    console.log('use efect called');
  },[])

  useEffect(() => {
    // console.log('formState change');
   },[formState])
  



  return (
    <>
      <h1>simple form</h1>
      <hr />
      <input type="text" placeholder="Username" name="username"  value={username} onChange={onInputChange}/>
      <input type="email" placeholder="pato@gmail.com" name="email"  value={email} onChange={onInputChange}/>
{
    (username === 'pato') && <Message/>
}    </>
  );
};

export default SimpleForm;

// const onInputChange: desestructuramos el e -> {target} y tmb desestructuramos el {name, value} del target
//   ...formState,[name]: value -> propiedades computadas de los objetos. aca decis que la propiedad name es la que estableces en el objeto con valor value.
// el useEffect se va a mandar a llamar cada vez que el componente se renderiza