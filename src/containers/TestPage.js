import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouterContext, Link, browserHistory} from 'react-router';
import TextQuestion from '../components/TextQuestion.js';
import TextAnswer from '../components/TextAnswer.js';
import TestButtons from '../components/TestButtons.js';
import Timer from '../components/Timer.js';
import VideoQuestion from '../components/VideoQuestion.js';
import {connect} from 'react-redux';
import actions from '../actions';

class TestPage extends React.Component {
    constructor() {
      super();
    }
   componentDidMount(){
     let questionDuration = this.props.test.questions[this.props.test.currentIndex].timer.duration;
     let duration = (this.props.test.timerInterval > 0) ? this.props.test.timerInterval: questionDuration;
     this.props.resetTimerInterval(duration);
     (duration > 0 && this.props.test.showTimer) ? this.props.startTimerInterval(duration):null;
   }
  render() {
    var currentQuestion = this.props.test.questions[this.props.test.currentIndex];

    return (
      <div>
      { currentQuestion.question.video_url ? <VideoQuestion /> : null }
      { currentQuestion.question.text ? <TextQuestion question={currentQuestion.question.text}/> : null }
      { this.props.test.showAnswer ? <TextAnswer answer={currentQuestion.answer.text}/> : null }
      <TestButtons />
      { (currentQuestion.timer.duration > 0 && this.props.test.showTimer) ?  <Timer /> : null }
      { (this.props.test.isComplete && this.props.test.showAnswer) ? 'DONE' : null }
      </div>
    );
  }
};

var mapStateToProps = function(state){
    // This component will have access to `state.test` through `this.props.test`
    return {test:state.test};
};

var mapDispatchToProps = function(dispatch){
    return {
        startTimerInterval: function(timer){ dispatch(actions.startTimerInterval(timer)); },
        resetTimerInterval: function(value){ dispatch(actions.resetTimerInterval(value)); },
        updateCurrentIndex: function(){ dispatch(actions.updateCurrentIndex()); },
        updateShowTimer: function(show){ dispatch(actions.updateShowTimer(show)); },
        reset: function(){ dispatch(actions.reset()); }
    }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(TestPage);
