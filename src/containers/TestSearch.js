import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouterContext, Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import SearchResult from '../components/SearchResult'
import actions from '../actions';

class TestSearch extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
   this.props.updateMeta({});
  }
  componentWillUnmount() {
    (this.serverRequest)?this.serverRequest.abort():null;
  }
  handleSearchClick() {
    this.serverRequest = $.post('http://192.168.1.20:3002/lists/get_all/ListMeta', function (result) {
    this.props.updateSearchResults(result.response);
    }.bind(this));
  }
  render() {

    var searchResults = this.props.test.searchResults.map(function(result, i) {

      return (
        <SearchResult  key={i} data={result} ref={'result_'+i}/>
      );
    }, this);
    return (
      <div className="app-wrapper">
          <h2>SEARCH GAMES</h2>
          <ul className='search_results'>{searchResults}</ul>
          <span className="button" onClick={this.handleSearchClick.bind(this)}>
          SEARCH
          </span>
          <Link to={'/start'}>
          <span className="button">
          BEGIN
          </span>
          </Link>
          <span onClick={this.context.router.goBack} className="button">
          BACK
          </span>
      </div>

    );
  }
};

TestSearch.contextTypes = {
  router: React.PropTypes.object
};

var mapStateToProps = function(state){
    // This component will have access to `state.test` through `this.props.test`
    return {test:state.test};
};

var mapDispatchToProps = function(dispatch){
    return {
        updateMeta: function(meta){ dispatch(actions.updateMeta(meta)); },
        updateSearchResults: function(results){ dispatch(actions.updateSearchResults(results)); },
        reset: function(){ dispatch(actions.reset()); }
    }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(TestSearch);
