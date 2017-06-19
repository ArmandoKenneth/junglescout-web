import React from 'react';
const Search = ({name, placeholder, onSubmit, onChange, asin}) => {

	let btnStyle = {
		// color: '#fffff'
	}
	return (
		<div className="form-inline">
			<div className="form-group">
				<input type='text' name={name} className='form-control' placeholder={placeholder} value={asin} onChange={onChange}/>
				<button className="btn btn-warning" onClick={onSubmit} style={btnStyle}>
					<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
				</button>
			</div>
		</div>
		
	);
};

export default Search;