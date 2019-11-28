import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaTwitter } from 'react-icons/fa';

const QuoteMachine = ({ selectedQuote, assignNewQuoteIndex }) => {
  const { quote, author } = selectedQuote;
    
  return (
    <div className="container">
      <div id="quote-box"className="row d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
        <Card bg="light" className="col-9 col-md-8 col-lg-6">
          <Card.Body className="my-3 mx-2">
            <blockquote className="blockquote text-center mb-4">
              <p id="text" style={{ fontFamily: 'Kalam, cursive', fontSize: '1.7rem'}}>
                {quote}
              </p>
              <footer id="author" className="blockquote-footer text-right">
                {author}
              </footer>
            </blockquote>
            <div className="d-flex justify-content-between">
              <a id="tweet-quote" title="Tweet this quote!" href={encodeURI(`https://twitter.com/intent/tweet?text="${quote}" - ${author}&hashtags=dailyquotes`)} target="_blank" rel="noopener noreferrer"><FaTwitter style={{ fontSize: '2rem' }} /></a>
              <Button id="new-quote" variant="primary" onClick={assignNewQuoteIndex}>New Quote</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
    )
};

export default QuoteMachine;