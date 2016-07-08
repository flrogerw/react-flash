import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

class SearchResult extends React.Component {
  constructor() {
    super();
  }
  handleResultClick() {
    this.props.updateMeta(this.props.data);
    $(".active_li").removeClass('active_li');
    $(this.instance).addClass('active_li');
  }
  render() {
    return (
      <li onClick={this.handleResultClick.bind(this)} ref={(ref) => this.instance = ref} className="search_result">
      <table>
        <tr>
          <td width="20%"><img src={this.props.data.image} /></td>
          <td width="70%">  <h3>{this.props.data.name}</h3>
            <p>{this.props.data.description.replace(/(([^\s]+\s\s*){20})(.*)/,"$1…")}</p></td>
          <td className="question_count" width="10%">{this.props.data.questionCount}</td>
        </tr>
      </table>


      </li>
    );
  }
}


var mapStateToProps = function(state){
    // This component will have access to `state.test` through `this.props.test`
    return {test:state.test};
};

var mapDispatchToProps = function(dispatch){
    return {
        updateMeta: function(meta){ dispatch(actions.updateMeta(meta)); },
        reset: function(){ dispatch(actions.reset()); }
    }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(SearchResult);
