import * as constants from "../common/constants";

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}

class AmazonApi {
	
	static fetchProducts() {
		return fetch(constants.BASE_URL+'products').then(response => {
			return handleErrors(response);
		}).catch(error => {
			throw error;
		});	
	}

	static fetchProduct(asin){
		return fetch(constants.BASE_URL+'products/'+asin).then(response => {
			return handleErrors(response)
		}).catch(error => {
			throw error;
		});
	}

	static updateProductDetails(asin){
		const headers = Object.assign({'Content-Type': 'application/json'});
		const request = new Request(constants.BASE_URL+'products', {
			method: 'POST',
			headers: headers, 
			body: JSON.stringify({asin: asin})
		});

		return fetch(request).then(response => {
			return handleErrors(response);
		}).catch(error => {
			throw error;
		});
	}

}

export default AmazonApi;