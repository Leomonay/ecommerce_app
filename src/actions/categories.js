import { types } from "../types/types";
import { finishLoading, startLoading } from "./loading";

export function showCategories() {
    return async function(dispatch) {
        dispatch(startLoading());
        try {
            const response = await fetch("https://leomonay-tequiero.herokuapp.com//categories/allCategories");
            const jsonData = await response.json();
            // console.log(jsonData);
            dispatch(setCategories(jsonData));
            dispatch(finishLoading());
        } catch (error) {
            console.log(error);
            dispatch(finishLoading());
        }
    };
}

export const setCategories = (categories) => {
    return {
        type: types.loadingCat,
        payload: categories,
    };
};

export const deleteCategoryByName = (name) => {
    return async() => {
        try {
            const res = await fetch(`https://leomonay-tequiero.herokuapp.com//categories/deletedCategory/${name}`, {
                method: "DELETE",
            });
        } catch (err) {
            console.log(err)
        }
    }
}

export const newCategory = (category) => {
    return async(dispatch) => {
        try {
            
            const rawResponse = await fetch('https://leomonay-tequiero.herokuapp.com//categories/addCategory', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(category)
            });
            
            dispatch(showCategories());

        } catch (err) {
            

            console.log(err)
        }
    }
};

export const modifyCategory = (endPointArgs) => {
    return async(dispatch) => {
        try {
            // console.log('modifyCategory(63):: endPointArgs: ', endPointArgs)
            const rawResponse = await fetch('https://leomonay-tequiero.herokuapp.com//categories/modifyCategory', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(endPointArgs)
            });
            // console.log('modifyCategory (72):: returned from fetch')
            dispatch(showCategories());

        } catch (err) {
            console.log(err)
        }
    }
};