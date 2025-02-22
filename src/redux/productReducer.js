import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS } from "./action";

const initialProductState = { products: [], loading: false, error: null };

export const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: state.products };
    case FETCH_PRODUCTS_LOADING: 
    return {...state}  ;
    case FETCH_PRODUCTS_FAILURE:
        return {}

    default:
      return state;
  }
};