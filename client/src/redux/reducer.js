import { GET_ALL } from "./action";
import { GET_BY_NAME } from "./action";
import { GET_DETAIL_ID } from "./action";
import { GET_TEMPERAMENTS } from "./action";
import { POST_DOGS } from "./action";

const initialState = {
  dogs: [],
  detail: [],
  temperaments: [],
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
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case GET_DETAIL_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case POST_DOGS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
