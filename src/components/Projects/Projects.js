import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

function Projects() {
	return (
		<Container fluid className='project-section'>
			<Particle />
			<Container>
				<h1 className='project-heading'>
					My Recent <strong className='purple'>Works </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={4} className='project-card'>
						<ProjectCard
							title='Car Quest'
							description='This MERN stack application fosters a vibrant online community for vehicle enthusiasts. Users can connect with others facing similar car troubles, collaboratively seeking solutions through real-time discussions, upvotes for valuable insights, and user-friendly login, registration, and password recovery features.'
							ghLink='https://github.com/Akthab/Car-Quest'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							title='Flutter-App'
							description='This project was done with the use of firebase. Firebase storage. firbase authentication were used in this and the routes are protected. Latest MUI was used in the Flutter app with lottie animations'
							ghLink='https://github.com/Akthab/FlutterApp'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							title='Chat Application'
							description='Build with the MERN stack, this chat app allows users to chat in real-time. Just sign up and log in to start using the chat features for smooth communications. This app supports live interactions with user friendly UI'
							ghLink='https://github.com/Akthab/Chat-Application'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							title='Landing Page - React'
							description="Developed with React and Tailwind CSS, this responsive web app utilizes Tailwind's styling capabilities based on the provided Figma design, aiming for a visuallly appealing and consistent user experience"
							ghLink='https://github.com/Akthab/at-digital-landing-page-react'
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
