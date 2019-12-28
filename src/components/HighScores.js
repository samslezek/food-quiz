import React, { Component } from 'react';

class HighScores extends Component {
	
	state = {
		highscores: []
	};

	constructor(props) {
	super(props)
    fetch('/react')
      .then(res => res.json())
      .then(users => this.setState({highscores:users}));
  	}

	render = (props) => {
		return (
			<React.Fragment>
				<h3>High Scores</h3>
				<ul>
				{this.state.highscores.map(
				 	({name,score}) => ( 
					<li>{name} had score {score}</li>
					 ))}
				</ul>
			</React.Fragment>
			)
	}
}
export default HighScores