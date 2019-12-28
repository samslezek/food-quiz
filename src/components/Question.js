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
					<div className='options'>
							<button className = 'btn btn-danger' disabled>
								{this.state.choiceA.food}</button>
							<button className = 'btn btn-secondary' disabled>
									{this.state.choiceB.food}</button>
							<br />
							<div className='below-button'>{(this.state.choiceA.value*100).toFixed(3)}%</div>
							<div className='below-button'><strong>{(this.state.choiceB.value*100).toFixed(3)}%</strong></div>
					</div>
				</React.Fragment>
				)
			} else { return ( 
				<React.Fragment>
					<h3>Question {questionNum}</h3>
					<div className='options'>
							<button className = 'btn btn-secondary' disabled>
								{this.state.choiceA.food}</button>
							<button className = 'btn btn-danger' disabled>
									{this.state.choiceB.food}</button>
							<br />
							<div className='below-button'><strong>{(this.state.choiceA.value*100).toFixed(3)}%</strong></div>
							<div className='below-button'>{(this.state.choiceB.value*100).toFixed(3)}%</div>
					</div>
				</React.Fragment>
				)

			}
		} 
	if (this.state.choiceB.value == this.state.correctChoice) { return ( 
				<React.Fragment>
					<h3>Question {questionNum}</h3>
					<div className='options'>
							<button className = 'btn btn-secondary' disabled>
								{this.state.choiceA.food}</button>
							<button className = 'btn btn-success' disabled>
									{this.state.choiceB.food}</button>
							<br />
							<div className='below-button'>{(this.state.choiceA.value*100).toFixed(3)}%</div>
							<div className='below-button'><strong>{(this.state.choiceB.value*100).toFixed(3)}%</strong></div>
					</div>
				</React.Fragment>
				)
			} else { return ( 
				<React.Fragment>
					<h3>Question {questionNum}</h3>
					<div className='options'>
							<button className = 'btn btn-success' disabled>
								{this.state.choiceA.food}</button>
							<button className = 'btn btn-secondary' disabled>
									{this.state.choiceB.food}</button>
							<br />
							<div className='below-button'><strong>{(this.state.choiceA.value*100).toFixed(3)}%</strong></div>
							<div className='below-button'>{(this.state.choiceB.value*100).toFixed(3)}%</div>
					</div>
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