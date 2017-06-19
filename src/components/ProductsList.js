import React from 'react';
import Product from '../components/Product';

const ProductsList = ({products, selectedProduct}) => {
	

	return (
		
		<div>
			{products = products.map((product) => {
			return (
				<div key={product.asin} className='col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xs-12'>
					<Product product={product} />
				</div>	
			)
		})}
		</div>
		
	);
};

export default ProductsList;