import { LIST_LOAD_REQUEST, LIST_LOADED, LIST_LOAD_ERROR } from "../types";

const initialState = {
  list: [],
  loading: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_LOAD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LIST_LOADED:
      return {
        ...state,
        loading: false,
        list: payload
      };
    case LIST_LOAD_ERROR:
      return {
        ...state,
        isSorting: false,
        loading: false,
      };
    default:
      return state;
  }
};
