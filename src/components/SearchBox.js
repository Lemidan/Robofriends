import React from 'react';
import 'tachyons';

const SearchBox = ({searchfield, searchChange}) => {
	return(
		<div className="pa2">
			<input 
			type="search" 
			placeholder="Search Robots" 
			className="br2 tc ba pa2 b--light-blue bg-lightest-blue" 
			onChange={searchChange} />
		</div>
	)
}

export default SearchBox;