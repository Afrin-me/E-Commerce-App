export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const FETCH_PRODUCTS_LOADING = "FETCH_PRODUCTS_LOADING";

export const ADD_TO_CAR = "ADD_TO_CAR";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const PLACE_ORDER = "PLACE_ORDER";

export const fetchProducts = ()=> async(dispatch)=>{
    const response = await axios.get("https://fakestoreapi.com/products", {
      type: FETCH_PRODUCTS_SUCCESS,
      payload:response.data
    });
}
export const successProducts = () => async (dispatch) => {};
export const failureProducts = () => async (dispatch) => {};