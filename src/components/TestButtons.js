import React from 'react';
import { Router, RouterContext, Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import actions from '../actions';

class TestButtons extends React.Component {
  constructor() {
    super();
  }
componentDidMount(){

  }
onShowAnswerClick(show){
    this.props.updateShowAnswer(show);
    this.props.clearAnswerTimeout();
  }
onNextClick(){
  this.props.incrementCurrentIndex();
  this.props.updateShowAnswer(false);
  this.props.clearAnswerTimeout();
  let questionDuration = this.props.test.questions[this.props.test.currentIndex].timer.duration;
  this.props.resetTimerInterval(questionDuration);
  (questionDuration > 0 && !this.props.test.isComplete) ? this.props.startTimerInterval(questionDuration):null;
}
onPrevClick(){
  this.props.decrementCurrentIndex();
  this.props.updateShowAnswer(false);
  this.props.clearAnswerTimeout();
  let questionDuration = this.props.test.questions[this.props.test.currentIndex].timer.duration;
  this.props.resetTimerInterval(questionDuration);
  (questionDuration > 0 && !this.props.test.isComplete) ? this.props.startTimerInterval(questionDuration):null;
}
  render() {
    return (
      <div id="test-buttons">
      <span className="button" onClick={this.onPrevClick.bind(this)}>Previous</span>
      <span className="button" onClick={this.onNextClick.bind(this)}>Next</span>
      { !this.props.test.showAnswer ? <span className="button" onClick={this.onShowAnswerClick.bind(this)}>Show Answer</span> : null }
      <span onClick={this.context.router.goBack} className="button">
      BACK
      </span>
      </div>
    );
  }
}

TestButtons.contextTypes = {
  router: React.PropTypes.object
};

var mapStateToProps = function(state){
    return {test:state.test};
};

var mapDispatchToProps = function(dispatch){
    return {
        incrementCurrentIndex: function(){ dispatch(actions.incrementCurrentIndex()); },
        decrementCurrentIndex: function(){ dispatch(actions.decrementCurrentIndex()); },
        updateShowAnswer: function(show){ dispatch(actions.updateShowAnswer(show)); },
        clearAnswerTimeout: function(){ dispatch(actions.clearAnswerTimeout()); },
        resetTimerInterval: function(value){ dispatch(actions.resetTimerInterval(value)); },
        startTimerInterval: function(timer){ dispatch(actions.startTimerInterval(timer)); },
        reset: function(){ dispatch(actions.reset()); }
    }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(TestButtons);
