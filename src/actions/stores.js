import { types } from "../types/types";
import { finishLoading, startLoading } from "./loading";

export function showStores() {
    return async function(dispatch) {
        dispatch(startLoading());
        try {
            const response = await fetch("https://leomonay-tequiero.herokuapp.com/stores/getStores");
            const jsonData = await response.json();
            // console.log(jsonData);
            dispatch(setStores(jsonData));
            dispatch(finishLoading());
        } catch (error) {
            console.log(error);
            dispatch(finishLoading());
        }
    };
}

export const setStores = (stores) => {
    return {
        type: types.loadStores,
        payload: stores,
    };
};

export const deleteStoreById = (id) => {
    return async () => {
        try {
            const res = await fetch(`https://leomonay-tequiero.herokuapp.com/stores/deleteStore/${id}`, {
                method: "DELETE",
            });
        }
        catch(err){
            console.log(err)
        }
    }
}