import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

class VideoQuestion extends React.Component {
  constructor() {
    super();
    this.src = null;
  }
  componentDidUpdate(){
    var video = document.getElementById('video_player');
    if(this.src != this.props.test.questions[this.props.test.currentIndex].question.video_url){
      video.load();
      video.play();
      this.src = this.props.test.questions[this.props.test.currentIndex].question.video_url;
      this.props.updateShowTimer(false);
    }
  }
  componentDidMount(){
    var self = this;
    document.getElementById('video_player').addEventListener('ended', function(){
      self.props.updateShowTimer(true);
      self.props.startTimerInterval(self.props.test.timerInterval);
    });
    this.props.updateShowTimer(false);
  }
  render() {

    return (

      <div id="video-question">
      <video id="video_player" width="400" controls>
      <source src={this.props.test.questions[this.props.test.currentIndex].question.video_url} type="video/mp4" />
        </video>
      </div>
    );
  }
}

var mapStateToProps = function(state){
    return {test:state.test};
};

var mapDispatchToProps = function(dispatch){
    return {
        startTimerInterval: function(timer){ dispatch(actions.startTimerInterval(timer)); },
        updateShowTimer: function(show){ dispatch(actions.updateShowTimer(show)); },
        reset: function(){ dispatch(actions.reset()); }
    }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(VideoQuestion);
