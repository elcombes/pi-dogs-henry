import axios from "axios";

export const GET_ALL = "GET ALL";
export const GET_BY_NAME = "GET BY NAME";
export const RUTA_GET = "http://localhost:3001/dogs";

export function obtener() {
  return async function pedido(dispatch) {
    let aux = await axios.get(RUTA_GET);
    return dispatch({
      type: GET_ALL,
      payload: aux.data,
    });
  };
}

export function obtenerpornombre(name) {
  return async function (dispatch) {
    try {
      let aux = await axios.get(RUTA_GET + name);
      return dispatch({
        type: GET_BY_NAME,
        payload: aux.data,
      });
    } catch (error) {
      alert("Try another dog's name");
    }
  };
}
