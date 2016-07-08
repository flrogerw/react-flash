import React from 'react';
import {connect} from 'react-redux';
import actions from '../create_actions';

class TestCreateQuestion extends React.Component {
  constructor() {
    super();
  }
  onDurationSliderChange(e){
    this.props.onDurationSliderChange(e.target.value);
  }
  isPublicChangeHandler(e){
      this.props.updateIsPublic(e.target.value==='true');
  }
  questionTypeChangeHandler(e){
    this.props.updateQuestionType(e.target.value);
  }
  questionTextBlurHandler(e){
    this.props.updateQuestionText(e.target.value);
  }
  answerTextBlurHandler(e){
    this.props.updateAnswerText(e.target.value);
  }
  componentDidMount(){
    document.getElementById(this.props.create.questionType).checked=true;
    document.getElementById('question_text').value = this.props.create.questionText;
    document.getElementById('answer_text').value = this.props.create.answerText;

  }
  render() {
    var duration_min = Math.floor(this.props.create.duration /60);
    var duration_sec = this.props.create.duration %60;
    return (

  <div id="create_question">
<form>
<div className="create_meta">Is this Lesson Public:
  <input type="radio" name="is_public" onClick={this.isPublicChangeHandler.bind(this)} checked={this.props.create.isPublic === true} value="true" />Yes
  <input type="radio" name="is_public" onClick={this.isPublicChangeHandler.bind(this)} checked={this.props.create.isPublic === false} value="false" />No
</div>



        <div className="question_type_wrapper">Question Type:
          <input type="radio" id="text" onClick={this.questionTypeChangeHandler.bind(this)} name="question_type" value="text" />Text
          <input type="radio" id="image" onClick={this.questionTypeChangeHandler.bind(this)} name="question_type" value="image" />Image
          <input type="radio" id="audio" onClick={this.questionTypeChangeHandler.bind(this)} name="question_type" value="audio" />Audio
          <input type="radio" id="video" onClick={this.questionTypeChangeHandler.bind(this)} name="question_type" value="video" />Video
        </div>
        <div className="question_text">
Question text/url: <input id="question_text" onBlur={this.questionTextBlurHandler.bind(this)} type="text" />
        </div>
        <div className="answer_text">
Answer text/url: <input id="answer_text" type="text" onBlur={this.answerTextBlurHandler.bind(this)} />
        </div>
        <div className="question_duration">
Duration in seconds before anser is displayed ( the value of 0 will not display):
<input type="range" onChange={this.onDurationSliderChange.bind(this)} min={0} defaultValue={this.props.create.duration} max={300} />
<span>{duration_min < 10 ? "0"+duration_min: duration_min}:{duration_sec < 10 ? "0"+duration_sec: duration_sec}</span>
        </div>
</form>
        <button className="button">Save Question</button>
        <button className="button">Cancel</button>
      </div>
    );
  }
}

var mapStateToProps = function(state){
    return {create:state.create};
};

var mapDispatchToProps = function(dispatch){
    return {
      onDurationSliderChange: function(value){ dispatch(actions.onDurationSliderChange(value)); },
      updateIsPublic: function(value){ dispatch(actions.updateIsPublic(value)); },
      updateQuestionType: function(type){ dispatch(actions.updateQuestionType(type)); },
      updateQuestionText: function(text){ dispatch(actions.updateQuestionText(text)); },
      updateAnswerText: function(text){ dispatch(actions.updateAnswerText(text)); },
    }
};
module.exports = connect(mapStateToProps,mapDispatchToProps)(TestCreateQuestion);
