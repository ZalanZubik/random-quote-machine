import React from 'react';

const QuoteMachine = ({quote, author, assignNewQuoteIndex}) => (
    <div>
        <p>
            {quote}
            {author}
            <button onClick = {assignNewQuoteIndex}>New Quote</button>
        </p>
    </div>
);

export default QuoteMachine;