import React from 'react';

const Review = ({review}) => {

	let reviewStyle = {
		textAlign: 'justify'
	}

	let subtitleStyle = {
		fontSize: '12px',
		marginTop: '-8px'
	}


	return (
		<div className="row" key={review.id}>
			<div className='col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xs-12'>
				<p><b>{review.title}</b></p>
				<p className='text-muted' style={subtitleStyle}>{review.rating} out of 5.0</p>
				<p className='text-muted' style={subtitleStyle}>By <b>{review.reviewer}</b> on {review.date}</p>
				<p style={reviewStyle}>
					{review.review}
				</p>

			</div>
			
		</div>
		
	);
};

export default Review;