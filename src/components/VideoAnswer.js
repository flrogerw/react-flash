import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

class VideoAnswer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="video-question">
      <video width="400" controls>
        <source src="src=http://techslides.com/demos/sample-videos/small.mp4 type=video/mp4" type="video/mp4" />
        <source src="src=http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" />
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

        reset: function(){ dispatch(actions.reset()); }
    }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(VideoAnswer);
