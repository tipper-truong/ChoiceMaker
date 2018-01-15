import React from 'react';

const OptionListItem = (props) => {
	return (
		<div>
		<li>
			{props.option}
		</li>
		<button 

		onClick={(event) => {
			props.handleDeleteOption(props.option);
			
		}}>Remove</button>
		</div>
	);
};

export default OptionListItem;