import React from 'react';
import Review from '../components/Review';

const Reviews = ({reviews}) => {
	return (
		<div>
			{reviews.map((review) => {
				return (
					<Review review={review} />
					// <div key={product.asin} className='col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xs-12'>
						// <Product product={product} selected={selectedProduct && product.asin == selectedProduct.asin} />
					// </div>	
				)
			})}
		</div>
		
	);
};

export default Reviews;