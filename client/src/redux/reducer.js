import { GET_ALL, GET_BY_NAME, GET_DETAIL_ID, GET_TEMPERAMENTS, FILTER_BY_VALUE, POST_DOGS } from "./action";

const initialState = {
  dogs: [],
  totaldogs: [],
  detail: [],
  temperaments: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        dogs: action.payload,
        totaldogs: action.payload,
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
    case FILTER_BY_VALUE:
      const alldogs = state.totaldogs
      const statusFiltered =
        action.payload === "All"
          ? alldogs
          : alldogs.filter((d) => {
              if (d.temperament.length) {
                if (d.temperaments.find((t) => t.name === action.payload))
                  return d;
                if (d.temperaments.find((te) => te === action.payload))
                  return d;
              }
              return null;
            });
      return {
        ...state,
        dogs: statusFiltered,
      };
    case POST_DOGS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
