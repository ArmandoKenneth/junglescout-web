import React from 'react';

const Header = () => {
	let headerStyle = {
		padding: '1em'
		// backgroundColor: 'red'
	}
	let logoStyle = {
		width: '270px',
		height: '36px'
	}
	return (
		<div className="row" style={headerStyle}>
			<img src={process.env.PUBLIC_URL + '/img/logo.png'} style={logoStyle}/> 
		</div>
		
	);
};

export default Header;