import React from 'react';
import { Router, RouterContext, Link, browserHistory } from 'react-router';
import {connect} from 'react-redux';


var App = React.createClass({

    render: function() {

        return (
            <div className="app-wrapper">
                <h2>COMMUNITY DRIVEN KNOWLEDGE</h2>

                <Link to={'/search'}>
                <span className="button">
                START PLAYING
                </span>
                </Link>
                <Link to={'/create'}>
                <span className="button">
                CREATE NEW
                </span>
                </Link>
            </div>
        );
    }
});

var mapStateToProps = function(state){
    // This component will have access to `appstate.heroes` through `this.props.heroes`
    return {test:state.test};
};

module.exports = connect(mapStateToProps)(App);
