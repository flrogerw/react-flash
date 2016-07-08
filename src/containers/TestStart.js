import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouterContext, Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import actions from '../actions';

class TestStart extends React.Component {
  constructor() {
    super();
  }
  componentWillUnmount() {
    (this.serverRequest)?this.serverRequest.abort():null;
  }
  componentWillMount(){
    this.serverRequest = $.post('http://192.168.1.20:3002/lists/get_all/ListQuestions',{"list_id":this.props.test.meta._id}, function (result) {
    this.props.updateQuestions(result.response[0].questions);
    }.bind(this));
  }
  render() {
    return (
<div>
<div>NAME:{this.props.test.meta.name}</div>
<div>DESCRIPTION:{this.props.test.meta.description}</div>
      <Link to={'/test'}>
      <span className="button">
      START
      </span>
      </Link>
      <span onClick={this.context.router.goBack} className="button">
      BACK
      </span>
</div>
    );
  }
};

TestStart.contextTypes = {
  router: React.PropTypes.object
};
var mapStateToProps = function(state){
    // This component will have access to `state.test` through `this.props.test`
    return {test:state.test};
};

var mapDispatchToProps = function(dispatch){
    return {
        updateQuestions: function(questions){ dispatch(actions.updateQuestions(questions)); },
        reset: function(){ dispatch(actions.reset()); }
    }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(TestStart);
