import React, { Component } from 'react';

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
		incorrectChoice : Math.min(this.props.foodBank[this.props.start].value,this.props.foodBank[this.props.start+1].value),
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
				<div className='options'>
					<button className = 'btn btn-primary' onClick={() => {
						this.deleteQuestion(this.state.choiceA.value,this.state.correctChoice);
						this.props.selected(this.state.choiceA.value,this.state.correctChoice);}}>
						{this.state.choiceA.food}</button>
					<button className = 'btn btn-primary' onClick={() => {
						this.deleteQuestion(this.state.choiceB.value,this.state.correctChoice);
						this.props.selected(this.state.choiceB.value,this.state.correctChoice)}}>
							{this.state.choiceB.food}</button>
				</div>
			</React.Fragment>
			)
		} else if (this.state.correct==0) {
			if (this.state.choiceB.value == this.state.correctChoice) { return ( 
				<React.Fragment>
					<h3>Question {questionNum}</h3>
					<p><strong>Incorrect! Only {(this.state.incorrectChoice*100).toFixed(3)}% of orders contain {this.state.choiceA.food}, and {(this.state.correctChoice*100).toFixed(3)}% of orders contain {this.state.choiceB.food}.</strong></p>
				</React.Fragment>
				)
			} else { return ( 
				<React.Fragment>
					<h3>Question {questionNum}</h3>
					<p><strong>Incorrect! Only {(this.state.incorrectChoice*100).toFixed(3)}% of orders contain {this.state.choiceB.food}, and {(this.state.correctChoice*100).toFixed(3)}% of orders contain {this.state.choiceA.food}.</strong></p>
				</React.Fragment>
				)

			}
		} 
	if (this.state.choiceB.value == this.state.correctChoice) { return ( 
				<React.Fragment>
					<h3>Question {questionNum}</h3>
					<p><strong>Correct! {(this.state.correctChoice*100).toFixed(3)}% of orders contain {this.state.choiceB.food}, and only {(this.state.incorrectChoice*100).toFixed(3)}% of orders contain {this.state.choiceA.food}.</strong></p>
				</React.Fragment>
				)
			} else { return ( 
				<React.Fragment>
					<h3>Question {questionNum}</h3>
					<p><strong>Correct! {(this.state.correctChoice*100).toFixed(3)}% of orders contain {this.state.choiceA.food}, and only {(this.state.incorrectChoice*100).toFixed(3)}% of orders contain {this.state.choiceB.food}.</strong></p>
				</React.Fragment>
				)
	}

	return (
		<React.Fragment>
			<h3>Question {questionNum}</h3>
			<p><strong>Correct! The item you chose has value {this.state.correctChoice}, and the other item has value {this.state.incorrectChoice}.</strong></p>
		</React.Fragment>
	)		
}
}

export default Question;