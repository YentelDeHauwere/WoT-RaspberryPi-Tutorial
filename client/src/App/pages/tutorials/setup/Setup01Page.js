import { default as React } from 'react';

import * as Routes from '../../../routes';

import './setup.scss';

import { NextRight, TutorialNavigation, Warning } from '../../../components';

import {Container, Row, Col} from 'react-bootstrap';

import { IoIosLaptop } from 'react-icons/io';

const Setup01Page = () => {
	return (
		<div className="setup01">
			<NextRight route={Routes.SETUP2} />
			<TutorialNavigation 
				text1="Benodigdheden" 
				text2="RetroPi Software"
				text3="Etcher.io"
				text4="RetroPi SD kaart"
				text5="Raspberry Pi"

				link1="/setup/1" 
				link2="/setup/2"
				link3="/setup/3"
				link4="/setup/4"
				link5="/setup/5"
			/>

			<Container className="container-step">
				<Row className="step">
					<Col sm={7} className="step-left">
						<IoIosLaptop className="icon-laptop"/>
						<h3 className="step-left__title">Download de RetroPi software</h3>
						<ul className="step-left__list">
							<li className="step-left__list-text">Navigeer naar deze <a href="https://retropie.org.uk/download/">link</a> </li>
							<li className="step-left__list-text">Download de versie van RetroPi die compatibel is met de versie van jouw RaspberryPi 3 of 4 </li>
							<li className="step-left__list-text">Sla dit bestand op waar het makkelijk te bereiken is, bijvoorbeeld jouw bureaublad/desktop</li>
						</ul>
						<Warning text="De versie van jouw RaspberryPi is te vergelijken met het aantal logo's op je upboot scherm."
						/>
					</Col>

					<Col sm={5}  className="step-right">

					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Setup01Page;
