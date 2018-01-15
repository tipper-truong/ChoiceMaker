import React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import OptionList from './options/OptionList';
import OptionBar from './OptionBar';
import SelectedOptionModal from './SelectedOptionModal';

class App extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		options: [],
      selectedOption: undefined
  	};

    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleDeleteOptionList = this.handleDeleteOptionList.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));

  }

  handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handleDeleteOptionList(emptyList) {
    this.setState({options: emptyList});
  }

  handleSelection() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
        selectedOption: option
      }));
  }

  handleClearSelectedOption() {
      this.setState(() => ({
        selectedOption: undefined
      }));
  }

  render() {
    return (
      <div>
      <div>
       <Header />
       <Action handleSelection={this.handleSelection}/>
       <OptionList 
        options={this.state.options}
        handleDeleteOptionList={this.handleDeleteOptionList}
        handleDeleteOption={this.handleDeleteOption}/>
       <OptionBar handleAddOption={this.handleAddOption}/>
      </div>

       <SelectedOptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default App;
