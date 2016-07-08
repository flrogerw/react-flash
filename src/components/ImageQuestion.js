import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

class ImageQuestion extends React.Component {
  constructor() {
    super();
    this.src = null;
  }
  render() {
    return (
      <div id="audio_answer"></div>
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
module.exports = connect(mapStateToProps,mapDispatchToProps)(ImageQuestion);
