import amazonApi from "../api/amazonApi";
import * as actionTypes from "../common/actionTypes";

/*
	Fetch all products in the database without hiting Amazon
*/

export function fetchProductsSuccess(products){
	return { type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: products }
}

export function fetchProductsError(error){
	return { type: actionTypes.FETCH_PRODUCTS_ERROR, error: error }
}

export function fetchProducts(){
	return function(dispatch){
		return amazonApi.fetchProducts().then(products => {
			dispatch(fetchProductsSuccess(products));
		}).catch(error => {
			dispatch(fetchProductsError(error));
		});
	}
}

/*
	Fetch a single product without hiting Amazon
*/
export function fetchProductSuccess(product){
	return { type: actionTypes.FETCH_PRODUCT_SUCCESS, payload: product }
}

export function fetchProductError(error){
	return { type: actionTypes.FETCH_PRODUCT_ERROR, error: error }
}

export function fetchProduct(asin){
	return function(dispatch){
		return amazonApi.fetchProduct(asin).then(product => {
			dispatch(fetchProductSuccess(product));
		}).catch(error => {
			dispatch(fetchProductError(error));
		});
	}
}

/*
	Updates product details from Amazon
*/
export function updateProductSuccess(product){
	return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product }
}

export function updateProductError(error){
	return { type: actionTypes.UPDATE_PRODUCT_ERROR, error: error }
}

export function updateProductDetails(asin){
	return function(dispatch){
		return amazonApi.updateProductDetails(asin).then(product => {
			dispatch(updateProductSuccess(product));
		}).catch(error => {
			dispatch(updateProductError(error));
		});
	}
}


