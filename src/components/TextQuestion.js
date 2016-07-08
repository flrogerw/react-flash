import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

class TextQuestion extends React.Component {
  constructor(){
    super();
  }
  componentDidMount(){
    this.props.updateShowTimer(true);
  }
  render() {
    return (
      <div id="text-question">
      {this.props.question}
      </div>
    );
  }
}
var mapStateToProps = function(state){
    return {test:state.test};
};

var mapDispatchToProps = function(dispatch){
    return {
        updateShowTimer: function(show){ dispatch(actions.updateShowTimer(show)); },
        reset: function(){ dispatch(actions.reset()); }
    }
};
module.exports = connect(mapStateToProps,mapDispatchToProps)(TextQuestion);
