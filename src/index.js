import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import * as serviceWorker from './serviceWorker';
import foodData from './foodData/foodData.json';
import Question from './components/Question';
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
				totalAnswers: 0
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
		if (this.state.totalAnswers<10 && this.state.totalAnswers-this.state.correctAnswers<=1){
		return ( 
			<div className='container'>
				<h1>Food Trivia</h1>
				<p><em>Pick the more popular food. If you answer incorrectly more than twice, you lose. </em></p>
				{this.createQuiz()}
				<p>Correct Answers: {this.state.correctAnswers}</p>
				<p>Total Answers: {this.state.totalAnswers}</p>
				<NameSubmitForm />
			</div>
			)
		}
		if (this.state.totalAnswers-this.state.correctAnswers>=2){
			return ( 
			<React.Fragment>
				<h1>Food Trivia</h1>
				<p><em>You're allowed two incorrect answers</em></p>
				<p>Correct Answers: {this.state.correctAnswers}</p>
				<p>Total Answers: {this.state.totalAnswers}</p>
				<p><strong>YOU FAILED</strong></p>
				<NameSubmitForm />
			</React.Fragment>
			)
		}
		if (this.state.correctAnswers>7){
			return ( 
			<React.Fragment>
				<h1>Food Trivia</h1>
				<p><em>You're allowed two incorrect answers</em></p>
				<p>Correct Answers: {this.state.correctAnswers}</p>
				<p>Total Answers: {this.state.totalAnswers}</p>
				<p><strong>YOU PASSED</strong></p>
				<NameSubmitForm />
			</React.Fragment>
			)
		}
	}
}


ReactDOM.render(<FoodApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
