import React from 'react';
import { Route, Redirect } from 'react-router'

const ProductDetails = ({product}) => {
	if (!product){
		return <Redirect to='/'/>;
	}
	return (

			<div className="row">
				AEOOOO
			</div>
			
		);
	};

export default ProductDetails;