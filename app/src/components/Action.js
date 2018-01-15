import React from 'react';

const Action = (props) => {
		return (
			<div>
				<button 
				className="big-button"
				onClick={props.handleSelection}>
					What should I do?
				</button>
			</div>
		);	
};

export default Action;