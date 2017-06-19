import React from 'react';
import Product from '../components/Product';

const ProductsList = ({products, selectedProduct, onSelectProduct, onCloseReview}) => {

	let productContainerStyle = {

	}

	return (
		<div>
			{products = products.map((product) => {
			return (
				<div key={product.asin} className='col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xs-12'>
					<Product product={product} selectedProduct={selectedProduct} onSelectProduct={onSelectProduct} onCloseReview={onCloseReview} />
				</div>	
			)
		})}
		</div>
		
	);
};

export default ProductsList;