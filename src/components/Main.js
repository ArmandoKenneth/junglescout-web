import React from 'react';  
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Search from '../components/Search';
import Header from '../components/Header';
import ProductsList from '../components/ProductsList';


import * as productActions from '../actions/productActions';

class Main extends React.Component { 

	buildInternalStateFromProps(props){
		return {
			products: props.products,
			filteredProducts: props.filteredProducts,
			selectedProduct: props.selectedProduct,
			asin: props.selectedProduct ? props.selectedProduct.asin : "",
			error: props.error
		}
	}

	constructor(props){
		super(props);
		this.state = this.buildInternalStateFromProps(props);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
	}

	componentWillReceiveProps(nextProps){
		this.setState(this.buildInternalStateFromProps(nextProps));
	}

	render(){
		
		let searchContainerStyle = {
			// backgroundColor: 'green'
			padding: '1em'
		};

		let productsListStyle = {
			border: '1px solid #e2e2e2',
			borderRadius: '5px',
			padding: '1em',
			margin: '0em'
			// backgroundColor: 'gray'

		}

		return(
			<div>
				<div className='row' style={searchContainerStyle}>
					<Search name='searchProduct' placeholder='Type an ASIN identifier' onChange={this.onSearchChange} 
					onSubmit={this.onSearchSubmit} asin={this.props.asin} />
					{this.props.error}	
				</div>
				<div className='row' style={productsListStyle}>
					<ProductsList products={this.props.filteredProducts} selectedProduct={this.props.selectedProduct}/>
				</div>
				
				<hr/>
				{this.props.selectedProduct.title} - {this.props.selectedProduct.rating}
			</div>
		)
	}

	onSearchSubmit(event){	
		if (!this.state.asin){
			this.props.productActions.fetchProducts();
		}else{
			const product = this.props.products.filter(product => product.asin == this.state.asin)[0];
			// debugger
			if (product){
				this.props.productActions.fetchProduct(product.asin);
				// console.log("clicou. E o valor eh: "+product.title);
			}else{
				console.log("Indo na Amazon....")
				this.props.productActions.updateProductDetails(this.state.asin);
				// console.log("Tem que ir na amazon");
			}
		}

	}

	onSearchChange(event){
		this.state.asin = event.target.value;
	}


}

function mapStateToProps(state, ownProps) {
	// debugger
	return {
		products: state.productReducer.products,
		filteredProducts: state.productReducer.filteredProducts,
		selectedProduct: state.productReducer.selectedProduct,
		error: state.productReducer.error
	}
} 

function mapDispatchToProps(dispatch){
	return {
		productActions: bindActionCreators(productActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);  