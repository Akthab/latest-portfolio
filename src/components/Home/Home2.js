import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
	return (
		<Container fluid className='home-about-section' id='about'>
			<Container>
				<Row>
					<Col md={8} className='home-about-description'>
						<h1 style={{ fontSize: '2.6em' }}>
							LET ME <span className='purple'> INTRODUCE </span> MYSELF
						</h1>
						<p className='home-about-body'>
							I found my passion for programming and testing, and ever since,
							there's been no turning back! It's like love at first code 💻❤️🤷‍♂️
							<br />
							<br />I am proficient in classics like
							<i>
								<b className='purple'> Java and Javascript </b>
							</i>
							<br />
							<br />I am passionate about ensuring quality and am particularly
							interested in the field of &nbsp;
							<i>
								<b className='purple'>Quality Assurance </b>
							</i>
							<br />
							<br />
							Whenever possible, I also apply my passion for developing products
							with <b className='purple'>Node.js</b> and
							<i>
								<b className='purple'>
									{' '}
									Modern Javascript Library and Frameworks
								</b>
							</i>
							&nbsp; like
							<i>
								<b className='purple'> React.js and Next.js</b>
							</i>
						</p>
					</Col>
					<Col md={4} className='myAvtar'>
						<Tilt>
							<img src={myImg} className='img-fluid' alt='avatar' />
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className='home-about-social'>
						<h1>FIND ME ON</h1>
						<p>
							Feel free to <span className='purple'>connect </span>with me
						</p>
						<ul className='home-about-social-links'>
							<li className='social-icons'>
								<a
									href='https://github.com/Akthab'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<AiFillGithub />
								</a>
							</li>

							<li className='social-icons'>
								<a
									href='https://www.linkedin.com/in/akthab'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<FaLinkedinIn />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
