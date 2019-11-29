import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaTwitter } from 'react-icons/fa';
import { GoQuote } from 'react-icons/go';

const QuoteMachine = ({ selectedQuote, assignNewQuoteIndex }) => {
  const { quote, author } = selectedQuote;

  const colors = ['#16a085', '#27ae60', '#2c3e50', '#9b59b6', '#472E32', '#BDBB99', '#77B1A9', '#73A857', '#f0eba5', '#d4638d', '#63d4d4'];
    
  return (
    <div style={{transition: '1s ease-in', backgroundColor: colors[Math.floor(Math.random() * colors.length)]}}>
      <div className="container">
        <div id="quote-box"className="row d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
          <Card bg="light" className="col-11 col-md-9 col-lg-7">
            <Card.Body className="my-3 mx-2">
              <blockquote className="blockquote text-center mb-4">
              <p id="text" style={{fontFamily: 'Kalam, cursive', fontSize: '1.8rem'}}>
                  <GoQuote className="mr-1" style={{ fontSize: '1.1rem', verticalAlign: 'top' }} />{quote}
                </p>
                <footer id="author" style={{fontSize: '1.2rem'}} className="blockquote-footer text-right">
                  {author}
                </footer>
              </blockquote>
              <div className="d-flex justify-content-between">
                <a id="tweet-quote" title="Tweet this quote!" href={encodeURI(`https://twitter.com/intent/tweet?text="${quote}" - ${author}&hashtags=dailyquotes`)} target="_blank" rel="noopener noreferrer"><FaTwitter style={{ fontSize: '2rem' }} /></a>
                <Button id="new-quote" variant="primary" onClick={assignNewQuoteIndex}>Next Quote</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        </div>
      </div>
    )
};

export default QuoteMachine;