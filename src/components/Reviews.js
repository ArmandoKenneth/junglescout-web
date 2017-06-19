import React from 'react';
import Review from '../components/Review';

const Reviews = ({reviews, onCloseReview}) => {
	return (
		<div>
		<button type="button" className="close" aria-label="Close" onClick={onCloseReview}><span aria-hidden="true">&times;</span></button>
			{reviews.map((review) => {
				return (
						
						<Review review={review} key={review.id}/>
					// <div key={product.asin} className='col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xs-12'>
						// <Product product={product} selected={selectedProduct && product.asin == selectedProduct.asin} />
					// </div>	
				)
			})}
		</div>
		
	);
};

export default Reviews;