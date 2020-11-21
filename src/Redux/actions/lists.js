import axios from "axios";
import { LIST_LOAD_REQUEST, LIST_LOADED, LIST_LOAD_ERROR } from "../types";

// to Load all the List
export const loadList = () => async (dispatch) => {
  dispatch({
    type: LIST_LOAD_REQUEST,
  });
  try {
    const res = await axios.get(`/assets/data/apartmentData.json`);
    dispatch({
      type: LIST_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LIST_LOAD_ERROR,
      message: "Something went wrong",
    });
  }
};
