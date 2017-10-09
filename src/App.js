import React, { Component } from 'react';
import './css/App.css';
import './css/App.scss';
import marked from 'marked';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*' };
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
        <h2 className="title">Markdown Previewer</h2>
        <p className="author">by<a href="https://vikariusu.github.io/"> Vikariusu</a></p>
        <div className="text-editor">
          <textarea className="text-field" onChange={this.handleChange} value={this.state.text} rows="9" cols="60" />
          <div dangerouslySetInnerHTML={this.createMarkup()} className="result"></div>
        </div>
      </div>
    );
  }
}

export default App;
