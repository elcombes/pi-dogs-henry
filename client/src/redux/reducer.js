import { GET_ALL } from "./action";
import { GET_BY_NAME } from "./action";
import { GET_DETAIL_ID } from "./action";

const initialState = {
  dogs: [],
  detail: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_DETAIL_ID:
      return {
        ...state,
        detail: action.payload, 
      };
    default:
      return state;
  }
}
