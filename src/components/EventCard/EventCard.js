import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './EventCard.scss';

const EventCard = ({
    title,
    lokacija,
    datumVrijeme,
    slobodnaMjesta,
    firma,
    buttonText
}) => {
	return (
		
			<div className="EventCard">
				<h2 className="EventCard-Title">{title}</h2>
				<div className="EventCard-Content">
					<div className="EventCard-ContentRow">
						<div className="EventCard-Item">
							<h3 className="EventCard-ItemTitle">Lokacija</h3>
							<p className="EventCard-ItemValue">{lokacija}</p>
						</div>

						<div className="EventCard-Item">
							<h3 className="EventCard-ItemTitle">Datum i vrijeme</h3>
							<p className="EventCard-ItemValue">{datumVrijeme}</p>
						</div>
					</div>

					<div className="EventCard-ContentRow">
						<div className="EventCard-Item">
							<h3 className="EventCard-ItemTitle">Slobodna mjesta</h3>
							<p className="EventCard-ItemValue">{slobodnaMjesta}</p>
						</div>

						<div className="EventCard-Item">
							<h3 className="EventCard-ItemTitle">Firma</h3>
							<p className="EventCard-ItemValue">{firma}</p>
						</div>
					</div>

					<Link to="/event">
						<Button text={buttonText}/>
					</Link>
				</div>
			</div>

            
            
	);
};

export default EventCard;
