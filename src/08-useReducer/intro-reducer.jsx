// Este es el estado inicial de mi reducer
const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del alma",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {

    if (action.type === '[TODO] add todo') {
        return [...state, action.payload ]
    }

  return state;
};
// el todoReducer SIEMPRE tiene que regresar un NUEVO estado.
// Tampoco se usa el PUSH por que muta el estado, vos aca tenes que retornar un nuevo estado

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del thanos",
  done: false,
};

// todos.push(  {
//     id: 2,
//     todo: "Recolectar la piedra del thanos",
//     done: false,
//   })
// Esto funciona pero es una mala practica mutar asi el estado de un reducer. Cuando queres cambiar el estado se hace a traves del argumento action

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo, //El payload es la carga a la app, si vos borras no pones nada por que no cargas nada.
}

todos = todoReducer(todos, addTodoAction)

console.log({state: todos});
