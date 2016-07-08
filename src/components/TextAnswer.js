import React from 'react';

export default class TextAnswer extends React.Component {

  render() {
    return (
      <div id="text-answer">
      {this.props.answer}
      </div>
    );
  }
}
