import * as actionTypes from "./cartConstants";
import axios from "axios";

export const addToCart = (item, itemAantal) => async (dispatch, getState) => {
  const response = await axios({
    url: `http://localhost:4000/product/${item.Id}`,
    method: "GET",
    responseType: "json",
  });

  const aantal = parseInt(itemAantal);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: response.data[0].Id,
      naam: response.data[0].naam,
      merk: response.data[0].merk,
      imageUrl: response.data[0].imageLink,
      prijs: response.data[0].prijs,
      aantal: aantal,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
