import * as api from "../api";

export const getShop = () => async (dispatch) => {
  try {
    const { data } = await api.fetchShop();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createShop = (shop) => async (dispatch) => {
  try {
    const { data } = await api.createShop(shop);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateShop = (id, shop) => async (dispatch) => {
  try {
    const { data } = await api.updateShop(id, shop);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteShop = (id) => async (dispatch) => {
  try {
    await api.deleteShop(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
