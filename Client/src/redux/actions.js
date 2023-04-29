import { FILTER, ORDER } from "./action-types";
import axios from "axios";

export const AGREGAR_FAV = "AGREGAR_FAV";
export const ELIMINAR_FAV = "ELIMINAR_FAV";

export const agregarFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);

      if (!data.length) throw Error("No hay favoritos");

      return dispatch({
        type: AGREGAR_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const eliminarFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);

      //  if (!data.length) throw Error("No hay favoritos");

      return dispatch({
        type: ELIMINAR_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
