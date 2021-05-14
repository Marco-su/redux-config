//---IMPORTS
import axios from "axios";

//---CONSTANT
const data = {
  array: [],
  string: "",
};

const OBTENER_USUARIOS = "OBTENER_USUARIOS";

//---REDUCER
export default function userReducer(state = data, action) {
  switch (action.type) {
    case OBTENER_USUARIOS:
      return {
        ...state,
        array: action.payload.array,
        string: action.payload.string,
      };

    default:
      return state;
  }
}

//---ACTIONS
//...Call users
export const obtenerUsuarios = () => async (dispatch, getState) => {
  await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
  })
    .then((res) => {
      dispatch({
        type: OBTENER_USUARIOS,
        payload: {
          array: res.data,
          string: "Un string",
        },
      });
    })
    .catch((err) => console.log(err));
};
