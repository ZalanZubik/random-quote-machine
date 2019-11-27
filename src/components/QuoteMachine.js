import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaTwitter } from 'react-icons/fa';

const QuoteMachine = ({ selectedQuote, assignNewQuoteIndex }) => {
    const { quote, author } = selectedQuote;
    
    return (
        <Card style={{
            width: '650px',
            margin: 'auto',
            textAlign: 'center'
        }}>
            <Card.Body>
                {quote}
                {author}
                <div>
                    <a href={encodeURI(`https://twitter.com/intent/tweet?text="${quote}" - ${author}&hashtags=dailyquotes`)} target="_blank" rel="noopener noreferrer"><FaTwitter style={{ fontSize: '2rem' }} /></a>
                    <Button variant="outline-success" onClick={assignNewQuoteIndex}>New Quote</Button>
                </div>
            </Card.Body>
        </Card>
    )
};

export default QuoteMachine;