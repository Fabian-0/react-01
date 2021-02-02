import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

function QuoteButtons({ changeQuoteFunction, color }) {
	return(
		<div className="QuoteButtons">
			<FontAwesomeIcon icon={faTwitter} className="twitterIcon" style={{backgroundColor: color}} />
			<button onClick={changeQuoteFunction} className="newQuoteButton " style={{backgroundColor: color}}>New Quote</button>
		</div>
	);
}

export default QuoteButtons;