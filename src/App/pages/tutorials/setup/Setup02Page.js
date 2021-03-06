import { default as React } from 'react';

import * as Routes from '../../../routes';

import { NextLeft, NextRight, TutorialNavigation, Warning } from '../../../components';

import { img_retropi } from '../../../assets/images';

import {Container, Row, Col} from 'react-bootstrap';

import { IoIosLaptop } from 'react-icons/io';

const Setup02Page = () => {

	return (
		<div className="setup02">
			<NextLeft route={Routes.SETUP1} />
			<NextRight route={Routes.SETUP3} />
			<TutorialNavigation 
				text1="1. Benodigdheden" 
				text2="2. RetroPi Software"
				text3="3. Etcher.io"
				text4="4. RetroPi SD kaart"
				text5="5. Raspberry Pi"

				link1="/setup/1" 
				link2="/setup/2"
				link3="/setup/3"
				link4="/setup/4"
				link5="/setup/5"
			/>

			<Container className="container-step">
				<Row className="step">
					<Col lg={7} className="step-left">
						<IoIosLaptop className="icon-laptop"/>
						<h3 className="step-left__title">2. Download de RetroPi software</h3>
						<ul className="step-left__list">
							<li className="step-left__list-text">Navigeer naar deze <a href="https://retropie.org.uk/download/" target="_blank">website</a>, hier ga je 3 rode download buttons zien staan </li>
							<li className="step-left__list-text">Download de versie van RetroPi die compatibel is met de versie van jouw RaspberryPi 3 of 4 </li>
							<li className="step-left__list-text">Sla dit bestand op waar het makkelijk te bereiken is. Bijvoorbeeld jouw bureaublad/desktop</li>
						</ul>
						<Warning text="De versie van jouw RaspberryPi is te vergelijken met het aantal logo's op je upboot scherm."
						/>
					</Col>

					<Col lg={5}  className="step-right">
						<img src={img_retropi} width="220px" height="200px"/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Setup02Page;
