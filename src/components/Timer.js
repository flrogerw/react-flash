import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

class Timer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="timer">
      TIME REMAINING:{this.props.test.timerInterval}
      </div>
    );
  }
}

var mapStateToProps = function(state){
    // This component will have access to `state.test` through `this.props.test`
    return {test:state.test};
};

module.exports = connect(mapStateToProps)(Timer);
