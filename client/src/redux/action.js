import axios from "axios";

export const GET_ALL = "GET ALL";
export const GET_BY_NAME = "GET BY NAME";
export const GET_DETAIL_ID = "GET DETAIL ID";
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

export function getdogsByName(nameDogs) {
  return async function (dispatch) {
    let aux = await axios.get(`http://localhost:3001/dogs?name=${nameDogs}`);
    return dispatch({
      type: GET_BY_NAME,
      payload: aux.data,
    });
  };
}

export const getDetail = (id) => {
  return async function (dispatch) {
      try {
          const res = await axios.get('http://localhost:3001/dogs/' + id);
          return dispatch({ type: GET_DETAIL_ID, payload: res.data });
      } catch(error) {
          console.error(error);
      }
  }
}