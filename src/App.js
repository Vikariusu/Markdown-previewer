import React, { Component } from 'react';
import './css/App.css';
import marked from 'marked';


class App extends Component {
  render() {
    return (
      <div>
        <textarea></textarea>
        <div>{marked('### I am using __markdown__.')}</div>
      </div>
    );
  }
}

export default App;
