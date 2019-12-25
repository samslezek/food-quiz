import React, { Component } from 'react';

class Choice extends Component {
	render = (props) => {
		return(
		<button>{this.props.choiceValue}</button>
		)
	}
}

export default Choice;