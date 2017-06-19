import React from 'react';

const Product = ({product}) => {
	return (
		<div className="row">
			<h3>{product.title}</h3>
			<h4>{product.rating} out of 5.0</h4>
			<p>
				{product.reviews.length} reviews
			</p>
		</div>
		
	);
};

export default Product;