import { types } from "../types/types";

const axios = require("axios");

export function addProd(data) {
    return function (dispatch) {
      return axios
        .post(`https://leomonay-tequiero.herokuapp.com//products/addProduct`, data)
        .then((res) => {
          dispatch({ type: types.prodImgClear });
          return res.data.json();
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }