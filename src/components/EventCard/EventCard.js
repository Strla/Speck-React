import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './EventCard.scss';

const EventCard = ({
	title,
	location,
	dateTime,
	freeSeats,
	company,
	buttonText
}) => {
	return (

		<div className="EventCard">
			<h2 className="EventCard-Title">{title}</h2>
			<div className="EventCard-Content">
				<div className="EventCard-ContentRow">
					<div className="EventCard-Item">
						<h3 className="EventCard-ItemTitle">Lokacija</h3>
						<p className="EventCard-ItemValue">{location}</p>
					</div>

					<div className="EventCard-Item">
						<h3 className="EventCard-ItemTitle">Datum i vrijeme</h3>
						<p className="EventCard-ItemValue">{dateTime}</p>
					</div>
				</div>

				<div className="EventCard-ContentRow">
					<div className="EventCard-Item">
						<h3 className="EventCard-ItemTitle">Slobodna mjesta</h3>
						<p className="EventCard-ItemValue">{freeSeats}</p>
					</div>

					<div className="EventCard-Item">
						<h3 className="EventCard-ItemTitle">Firma</h3>
						<p className="EventCard-ItemValue">{company}</p>
					</div>
				</div>

				<Link to="/event" style={{ textDecoration: 'none' }}>
					<Button text={buttonText} />
				</Link>
			</div>
		</div>



	);
};

export default EventCard;
