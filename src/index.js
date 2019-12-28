import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import * as serviceWorker from './serviceWorker';
import foodData from './foodData/foodData.json';
import Question from './components/Question';
import HighScores from './components/HighScores';
import NameSubmitForm from './components/NameSubmitForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';


class FoodApp extends Component {

	constructor(props){
		let randomFoodData = foodData
		for (let i = randomFoodData.length - 1; i > 0; i--) {
		        const j = Math.floor(Math.random() * (i + 1));
		        [randomFoodData[i], randomFoodData[j]] = [randomFoodData[j], randomFoodData[i]];
		}
		super(props);
		
		this.state = {
				foodBank: randomFoodData,
				correctAnswers: 0,
				totalAnswers: 0,
				submittedScore:false
		}
		// console.log(this.state.foodBank[0].food)
		this.createQuiz = this.createQuiz.bind(this);
		this.render = this.render.bind(this);
	}


	saySomething = (chosenValue,correctValue) => {
		if (chosenValue == correctValue){
				this.setState({
					correctAnswers : this.state.correctAnswers+1,
					totalAnswers : this.state.totalAnswers+1
				})
			} else {
				this.setState({
					totalAnswers : this.state.totalAnswers+1
				})
			}
			console.log('finished updating parent state to ' + this.state.correctAnswers)
	}

	createQuiz = () => {
		let children=[]
		for (let i=0;i<20;i=i+2){
			children.push(
				<Question 
				key={i}
				start={i}
				foodBank={this.state.foodBank}
				selected={(food,correctFood) => this.saySomething(food,correctFood)} />
				)
		}
		return children
	}

	render() {
		if (this.state.totalAnswers<10){
			return ( 
				<div className='container'>
					<h1>Food Trivia</h1>
					<p><em>Pick the more popular food.</em></p>
					{this.createQuiz()}
					<HighScores />
				</div>
				)
			} else if (this.state.submittedScore==false){
				return ( 
				<React.Fragment>
					<h3>Food Trivia Results</h3>
					<p>Correct Answers: {this.state.correctAnswers}</p>
					<p>Total Answers: {this.state.totalAnswers}</p>
					<br />
					<NameSubmitForm currentScore={this.state.correctAnswers} submitscore={() => this.setState({submittedScore:true})} />
					<HighScores />
				</React.Fragment>
				)
			} else {
				return <HighScores />
			}
		
	}
}

ReactDOM.render(<FoodApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
