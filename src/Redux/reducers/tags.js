import {
  TAGS_LOAD_REQUEST,
  TAGS_LOADED,
  TAGS_LOAD_ERROR,
} from "../types";

const initialState = {
  list: [],
  loading: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TAGS_LOAD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case TAGS_LOADED:
      return {
        ...state,
        loading: false,
        tagList: [...payload.tags],
        count: payload.found,
      };
    case TAGS_LOAD_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
