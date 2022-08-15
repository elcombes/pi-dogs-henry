import axios from "axios";

export const GET_ALL = "GET ALL";
export const GET_BY_NAME = "GET BY NAME";
export const GET_DETAIL_ID = "GET DETAIL ID";
export const GET_TEMPERAMENTS = "GET TEMPERAMENTS";
export const FILTER_BY_VALUE = "FILTER_BY_VALUE";
export const POST_DOGS = "POST DOGS";
export const ORDER_BY_NAME = "ORDER BY NAME"
export const ORDER_BY_WEIGHT = "ORDER BY WEIGHT"
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
      const res = await axios.get("http://localhost:3001/dogs/" + id);
      return dispatch({ type: GET_DETAIL_ID, payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export function filterTemperaments(payload){
  console.log(payload);
  return{
      type: FILTER_BY_VALUE,
      payload
  }
}

export function getTemperaments() {
  return async function (dispatch) {
    var info = await axios("http://localhost:3001/temperaments", {});
    return dispatch({
      type: GET_TEMPERAMENTS,
      payload: info.data,
    });
  };
}

/// POST

export function postDog(payload) {
  return async function (dispatch) {
    const response = await axios.post("http://localhost:3001/dogs", payload);
    return response;
  };
}

// ORDER ACTIONS

export function orderByName(payload){
  return{
    type: ORDER_BY_NAME,
    payload
  }
}



export function orderByWeight(payload){
  return{
    type: ORDER_BY_WEIGHT,
    payload
  }
}
