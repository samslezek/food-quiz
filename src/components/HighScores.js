import React, { Component } from 'react';

class HighScores extends Component {
	
	state = {
		highscores: []
	};

	constructor(props) {
	super(props)
	var delayInMilliseconds = 100; //1 second
	setTimeout(() => {
	  fetch('/react')
	      .then(res => res.json())
	      .then(users => this.setState({highscores:users}));
	  }, delayInMilliseconds);
	}
    

	render = (props) => {
		return (
			<React.Fragment>
				<h3>High Scores</h3>
				<ul>
				
				</ul>
	    <div class="row col-md-6 col-md-offset-2 custyle">
	    <table class="table table-striped custab">
	    <thead>
	        <tr>
	            <th>Name</th>
	            <th>Score</th>
	        </tr>
	    </thead>
	    		{this.state.highscores.map(
				 	({name,score}) => ( 
				 	<React.Fragment>
				 	<tr>
					<td>{name}</td>
					<td>{score}</td>
					</tr>
					</React.Fragment>
					 ))}
	    </table>
	    </div>
			</React.Fragment>
			)
	}
}
export default HighScores