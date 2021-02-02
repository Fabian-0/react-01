import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

function QuoteAndAuthor({ quote, author, changeColor }){	
	return (
	<div className="QuoteAndAuthor" style={{color: changeColor}}>
		<div className="TextToQuote">
			<FontAwesomeIcon icon={faQuoteLeft} />
			<h4 className="Quote">{quote}</h4>
		</div>
		<div className="ContAuthorQuote">
			<p className="AuthorQuote">- {author}</p>
		</div>
  </div>
	);
}

export default QuoteAndAuthor;