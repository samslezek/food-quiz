import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://testuser:password1@ds359118.mlab.com:59118/foodhighscores'); // insert your mlab `MongoDb URI`

// var HighScores = mongoose.model('Score', { name:Number })

class NameSubmitForm extends Component {
  state = {
    score : 7,
    inputValue : 'testing'
  }

  render() {
    return (
      //...
      <React.Fragment>
        <form onSubmit={this.updateInputValue}>
          <div className="form-group">
            <label><strong>Submit Name For High Score</strong></label>
            <input type="text" className="form-control" id="input1"  placeholder="Enter Name For High Score..." />
            <button type='submit'>Submit</button>
          </div>
        </form>
        <p>{this.state.inputValue}</p>
      </React.Fragment>
    );

  }


  updateInputValue = (evt) => {
    evt.preventDefault();
    this.setState({
      inputValue: evt.target[0].value
    });
  // }
};
}

export default NameSubmitForm;