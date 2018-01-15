import React from 'react';

const Action = (props) => {
		return (
			<div className = "action">
				<h2>Let a computer decide what to do!</h2>
				<button onClick={props.handleSelection}>
					What should I do?
				</button>
			</div>
		);	
};

export default Action;