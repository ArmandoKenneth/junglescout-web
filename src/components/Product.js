import React from 'react';
import Reviews from '../components/Reviews';


const Product = ({product, selectedProduct}) => {
	
	let productImageStyle = {
		width: '100px',
		height: '100px',
		paddingTop: '1.4em'
	}

	let productDetailsStyle = {
		padding: '1em 0 0 1em',
	}

	let subtitleStyle = {
		fontSize: '12px',
		marginTop: '-8px'
	}

	// let reviews = retproduct.asin == selectedProduct.asin ? return <Reviews reviews={product.reviews} /> : "";
	let reviews = null;
	if (selectedProduct && product.asin == selectedProduct.asin){
		reviews = (<Reviews reviews={product.reviews} />);
	}
	return (
		<div className="row">
			<div className="col-md-2">
				<img src={product.image_url} style={productImageStyle}/>
			</div>
			<div className="col-md-10" style={productDetailsStyle}>
				<p><b>{product.title}</b></p>
				<p className='text-muted' style={subtitleStyle}>{product.rating} out of 5.0</p>
				<p style={subtitleStyle}>{product.reviews.length} reviews</p>
				<hr/>
				{reviews}
			</div>
			
		</div>
		
	);
};

export default Product;