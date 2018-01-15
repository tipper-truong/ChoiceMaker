import React from 'react';
//import React, { Component } from 'react';
import OptionListItem from './OptionListItem';

const OptionList = (props) => {
	{props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
	const optionItems = props.options.map((option, index) => {
		return (
			<div key={index}>
				<OptionListItem 
				option={option}
				index={index+1}
				handleDeleteOption={props.handleDeleteOption}/>
				
			</div>
		);
	});
	
	return (
		<div>
			<div className = "widget-header">
				<h3 className="widget-header__title">Your Options</h3>
				<button 
				className="button button--link"
					onClick={(event) => {
					props.handleDeleteOptionList([]);
				}}>Remove All
				</button>
			</div>
			{optionItems}
		</div>
	);
};


export default OptionList