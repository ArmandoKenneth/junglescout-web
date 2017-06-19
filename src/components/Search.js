import React from 'react';
const Search = ({name, placeholder, onSubmit, onChange, asin}) => {

	return (
		<div className="form-inline">
			<div className="form-group">
				<input type='text' name={name} className='form-control' placeholder={placeholder} value={asin} onChange={onChange}/>
				<button className="btn btn-primary" onClick={onSubmit}>OK</button>
			</div>
		</div>
		
	);
};

export default Search;