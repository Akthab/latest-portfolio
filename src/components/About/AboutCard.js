import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
	return (
		<Card className='quote-card-view'>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<p style={{ textAlign: 'justify' }}>
						Hi Everyone, I am <span className='purple'>Akthab Bifaz </span>
						from <span className='purple'> Kalutara, Sri Lanka.</span>
						<br />
						I am currently studying in final year of my BSc (Hons) Computer
						Science at IIT
						<br />
						<br />
						Apart from coding and testing, some other activities that I love to
						do!
					</p>
					<ul>
						<li className='about-activity'>
							<ImPointRight /> Playing Chess
						</li>
						<li className='about-activity'>
							<ImPointRight /> Exploring new tech
						</li>
						<li className='about-activity'>
							<ImPointRight /> Travelling
						</li>
					</ul>

					<p style={{ color: 'rgb(153 150 242)' }}>
						"Light a fire of user engagement with every click!"{' '}
					</p>
					<footer className='blockquote-footer'>Akthab</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
