import * as actionTypes from "../common/actionTypes";
import defaultState from "../common/defaultState";

export default function productReducer(state = defaultState, action){
	switch(action.type){
		case actionTypes.FETCH_PRODUCTS_SUCCESS:
			return Object.assign({}, state, { products: action.payload, filteredProducts: action.payload, selectedProduct: {}, error: ""});
		
		case actionTypes.FETCH_PRODUCT_SUCCESS:	
			// debugger
			let filteredProducts = state.products.find(product => product.asin == action.payload.asin)
			return Object.assign({}, state, { selectedProduct: action.payload, filteredProducts: [filteredProducts], error: ""})
		// case actionTypes.FETCH_PRODUCT_ERROR:
			// return Object.assign({}, state, { error: action.error})
		case actionTypes.UPDATE_PRODUCT_SUCCESS:		
			// return Object.assign({}, state, { selectedProduct: action.payload})
			return {
				...state,
        		products: [action.payload, ...state.products],
        		filteredProducts: [action.payload],
        		selectedProduct: action.payload,
        		error: ""
			}
		// case actionTypes.UPDATE_PRODUCT_ERROR:
			// return Object.assign({}, state, { error: action.error})
		case actionTypes.FETCH_PRODUCTS_ERROR, actionTypes.FETCH_PRODUCT_ERROR, actionTypes.UPDATE_PRODUCT_ERROR:
			debugger
			return Object.assign({}, state, { error: action.error.message});
		default:
			return state;
	}
}