import * as t from "../types";

let initialState = {
  dishes: [],
  selected_dish: null,
  loading: false,
  error: null
};

const mainReducer = (state = initialState, action) => {

  switch (action.type) {
    case t.SET_DISH:
      return {
        ...state,
        selected_dish: action.payload,
      };
      case t.LOAD_DISHES:
        return {
          ...state,
          dishes: action.payload,
          loading: false,
          error: null
        };
    default:
      return state;
  }
};

export default mainReducer
