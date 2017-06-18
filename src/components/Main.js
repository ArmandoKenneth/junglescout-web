import React from 'react';  
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Search from '../components/Search'
import * as productActions from '../actions/productActions';

class Main extends React.Component { 

	buildInternalStateFromProps(props){
		return {
			products: props.products,
			filteredProducts: props.filteredProducts,
			selectedProduct: props.selectedProduct,
			asin: props.selectedProduct ? props.selectedProduct.asin : ""
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
		var products = this.state.products.map((product) => {
			return (
				<div key={product.asin}>
					{product.asin}
				</div>	
			)
		});


		return(
			<div>
				{products}
				<hr/>
				<Search name='searchProduct' placeholder='Type an ASIN identifier' onChange={this.onSearchChange} 
					onSubmit={this.onSearchSubmit} asin={this.props.asin} />
				<hr/>
				{this.props.selectedProduct.title} - {this.props.selectedProduct.rating}
			</div>
		)
	}

	onSearchSubmit(event){
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

	onSearchChange(event){
		this.state.asin = event.target.value;
	}


}

function mapStateToProps(state, ownProps) {
	// debugger
	return {
		products: state.productReducer.products,
		filteredProducts: state.productReducer.filteredProducts,
		selectedProduct: state.productReducer.selectedProduct
		// users: state.userReducer.users,
		// selectedUser: state.userReducer.selectedUser,
		// monthlyData: state.workReducer.monthlyData.weeks.sortWeek(),
		// selectedMonth: state.workReducer.selectedMonth,
		// selectedYear: state.workReducer.selectedYear,
		// selectedWeek: state.workReducer.selectedWeek,
		// userError: state.userReducer.userError,
		// workError: state.workReducer.workError
	}
} 

function mapDispatchToProps(dispatch){
	return {
		productActions: bindActionCreators(productActions, dispatch),
		// workActions: bindActionCreators(workActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);  