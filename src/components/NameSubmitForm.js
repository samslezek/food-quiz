import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://testuser:password1@ds359118.mlab.com:59118/foodhighscores'); // insert your mlab `MongoDb URI`

// var HighScores = mongoose.model('Score', { name:Number })

class NameSubmitForm extends Component {
  state = {
    score : this.props.currentScore,
    inputValue : ''
  }

  componentWillReceiveProps(nextProps) {
    this.setState({score:this.props.currentScore})
  }

  render = (props) => {
    return (
      //...
      <React.Fragment>
        <form onSubmit={this.updateInputValue}>
          <div className="form-group">
            <input type="text" className="form-control" id="input1"  placeholder="Enter Name For High Score..." />
            <button type='submit' class='btn btn-primary btn-sm'>Submit</button>
            <button className='btn btn-sm btn-primary btn-sm' onClick={() => {this.props.resetfunc()}}>Play Again</button>
          </div>
        </form>
      </React.Fragment>
    );
}


  updateInputValue = (evt) => {
    evt.preventDefault();
    this.setState({
      inputValue: evt.target[0].value
    });

    fetch('/react', {
      method: 'post',
      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
          name: evt.target[0].value,
          score: this.state.score
        })
    })
    this.props.submitscore();
  }
};

export default NameSubmitForm;