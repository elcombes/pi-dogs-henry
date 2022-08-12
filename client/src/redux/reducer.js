import { GET_ALL } from './action'

const initialState = {
  dogs: [],
  details: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        dogs: action.payload,
      };
    default:
      return state;
  }
}
