import * as api from "../api";

export const getPEM = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPEM();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPEM = (pem) => async (dispatch) => {
  try {
    const { data } = await api.createPEM(pem);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePEM = (id, pem) => async (dispatch) => {
  try {
    const { data } = await api.updatePEM(id, pem);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePEM = (id) => async (dispatch) => {
  try {
    await api.deletePEM(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
