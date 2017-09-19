import React, { Component } from 'react';
import './css/App.css';
import marked from 'marked';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleChange = () => {
    if (document.getElementsByClassName('text-field')[0]) {
      const enteredText = document.getElementsByClassName('text-field')[0].value;
      this.setState({text: enteredText});
    }
  }

  createMarkup = () => {
    const markup = marked(this.state.text);
    return { '__html': markup };
  }

  render() {
    return (
      <div>
        <textarea className="text-field" onChange={this.handleChange}></textarea>
        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
      </div>
    );
  }
}

export default App;
