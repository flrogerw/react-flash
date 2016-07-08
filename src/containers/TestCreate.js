import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouterContext, Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import actions from '../actions';
import TestCreateQuestion from '../components/TestCreateQuestion.js';

class TestCreate extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
<div id="test_create">
<TestCreateQuestion />
<span className="button">
SAVE
</span>
<span onClick={this.context.router.goBack} className="button">
BACK
</span>

</div>
    );
  }
};

TestCreate.contextTypes = {
  router: React.PropTypes.object
};

var mapStateToProps = function(state){
    // This component will have access to `state.test` through `this.props.test`
    return {test:state.test};
};

var mapDispatchToProps = function(dispatch){
    return {
        reset: function(){ dispatch(actions.reset()); }
    }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(TestCreate);
