import React from 'react';
import QuoteMachine from './components/QuoteMachine.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      quoteIndex: null
    }
    
    this.generateRandomQuoteIndex = this.generateRandomQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/ZalanZubik/92cac46a0c4a325829a3e5250fa79268/raw/868d6f9342106ac084825e9f5f75dde054d05a34/quotes.json')
      .then(response => response.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex))
      .catch((error) => {
        console.error(error);
      });
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

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.quoteIndex)) {
      return undefined;
    }
    else {
      return this.state.quotes[this.state.quoteIndex];
    }
  }

  render() {
    return (
      <>
        {this.selectedQuote ?
          <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} />
          : null}
      </>
    )
  }
}

export default App;