import React from 'react';
//import React, { Component } from 'react';
import OptionListItem from './OptionListItem';

const OptionList = (props) => {
	const optionItems = props.options.map((option, index) => {
		return (
			<div key={index}>
				<OptionListItem 
				option={option}
				handleDeleteOption={props.handleDeleteOption}/>
				
			</div>
		);
	});
	
	return (
		<div>
			<h3>Your Options</h3>
			<button onClick={(event) => {
			props.handleDeleteOptionList([]);
		}}>Remove All</button>
			<ol>
				{optionItems}
			</ol>
		</div>
	);
};


export default OptionList