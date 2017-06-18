import * as actionTypes from "../common/actionTypes";
import defaultState from "../common/defaultState";

export default function productReducer(state = defaultState, action){
	switch(action.type){
		case actionTypes.FETCH_PRODUCTS_SUCCESS:
			return Object.assign({}, state, { products: action.payload, filteredProducts: action.payload, selectedProduct: {}});
		
		case actionTypes.FETCH_PRODUCT_SUCCESS:	
			return Object.assign({}, state, { selectedProduct: action.payload})
		// case actionTypes.FETCH_PRODUCT_ERROR:
			// return Object.assign({}, state, { error: action.error})
		case actionTypes.UPDATE_PRODUCT_SUCCESS:		
			// return Object.assign({}, state, { selectedProduct: action.payload})
			return {
				...state,
        		products: [...state.products, action.payload],
        		selectedProduct: action.payload	
			}
		// case actionTypes.UPDATE_PRODUCT_ERROR:
			// return Object.assign({}, state, { error: action.error})
		case actionTypes.FETCH_PRODUCTS_ERROR || actionTypes.FETCH_PRODUCT_ERROR || actionTypes.UPDATE_PRODUCT_ERROR:
			return Object.assign({}, state, { error: action.error});
		default:
			return state;
	}
}