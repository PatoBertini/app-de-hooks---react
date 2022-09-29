export const todoReducer = (initialState = [], action) => {
  // Como nuestro initialState es un array debo devolver un array pero puedo devolver un booleano o un objeto y recordar que no hay QUE MUTAR LOS ARREGLOS, si no generar uno nuevo basado en el anterior
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];

    case "[TODO] Toggle Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    case "[TODO] Remove Todo":
      return initialState.filter((todo) => todo.id !== action.payload);
    default:
  }
};

// Para agregar todo's data aca, hay que ir a la app donde esta el useReducer y crear nuestra funcion donde se va a manipular el estado (handeNewTodo)
