import React, { Component } from 'react';
import Choice from './Choice'

class Question extends Component {
	
	state = {
		choiceA : {
			food: this.props.foodBank[this.props.start].food,
			value: this.props.foodBank[this.props.start].value
		},
		choiceB : {
			food: this.props.foodBank[this.props.start+1].food,
			value: this.props.foodBank[this.props.start+1].value
		},
		correctChoice : Math.max(this.props.foodBank[this.props.start].value,this.props.foodBank[this.props.start+1].value),
		clicked:0,
		correct:0
	}


	deleteQuestion = (chosenValue, correctValue) => {
			console.log(this.state.clicked)
			if (chosenValue == correctValue){
				this.setState({
					correct:1,
					clicked:1
				})
			} else {
				this.setState({
					correct:0,
					clicked:1
				})
			}
	}

	render = (props) => {
		const questionNum=(this.props.start+2)/2

		if (this.state.clicked == 0){
		return (
			<React.Fragment>
				<h3>Question {questionNum}</h3>
				<button onClick={() => {
					this.deleteQuestion(this.state.choiceA.value,this.state.correctChoice);
					this.props.selected(this.state.choiceA.value,this.state.correctChoice);}}>
					{this.state.choiceA.food} has value {this.state.choiceA.value}</button>
				<button onClick={() => {
					this.deleteQuestion(this.state.choiceB.value,this.state.correctChoice);
					this.props.selected(this.state.choiceB.value,this.state.correctChoice)}}>
						{this.state.choiceB.food} has value {this.state.choiceB.value}</button>
			</React.Fragment>
			)
		} else if (this.state.correct==0) {
			return (
			<React.Fragment>
				<h3>Question {questionNum}</h3>
				<p><strong>INCORRECT</strong></p>
			</React.Fragment>
			)
		} 
	return (
		<React.Fragment>
			<h3>Question {questionNum}</h3>
			<p><strong>CORRECT</strong></p>
		</React.Fragment>
	)		
}
}

export default Question;