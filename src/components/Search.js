import React from 'react';
// import OptionBuilder from '../components/common/OptionBuilder';
// import * as Constants from '../common/constants';

const Search = ({name, placeholder, onSubmit, onChange, asin}) => {

	return (
		<div className="form-inline">
			<div className="form-group">
				<input type='text' name={name} className='form-control' placeholder={placeholder} value={asin} onChange={onChange}/>
				<button className="btn btn-primary" onClick={onSubmit}>OK</button>
				{/*<label htmlFor={name} className="control-label" style={labelStyle}>{label}</label>
				<select name={name} onChange={onChange} className="form-control">
					{
					    users.map(function(user) {
					    	return OptionBuilder({value: user.id, displayName: buildDisplayName(user)});
					    })
				    }
				</select>*/}
			</div>
		</div>
		
	);
};

export default Search;