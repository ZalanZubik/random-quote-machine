import React from 'react';
import QuotesData from './quotes.json';
import QuoteMachine from './components/QuoteMachine.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: QuotesData,
      quoteIndex: null
    }
    
    this.generateRandomQuoteIndex = this.generateRandomQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  componentWillMount() {
    this.setState(this.assignNewQuoteIndex);
  }

  generateRandomQuoteIndex() {
    if(!this.state.quotes.length) {
      return undefined;
    }
    else {
      return Math.floor(Math.random() * this.state.quotes.length);
    }
  }

  assignNewQuoteIndex() {
    this.setState({ quoteIndex: this.generateRandomQuoteIndex() });
  }

  render() {
    return (
      <div id="quote-box">
        <QuoteMachine quote = {this.state.quotes[this.state.quoteIndex].quote} author = {this.state.quotes[this.state.quoteIndex].author}assignNewQuoteIndex = {this.assignNewQuoteIndex} />
      </div>
    )
  }
}

export default App;