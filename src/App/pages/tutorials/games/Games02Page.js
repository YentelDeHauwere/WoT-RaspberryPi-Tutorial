import { default as React } from 'react';

import * as Routes from '../../../routes';

import { NextLeft, NextRight, TutorialNavigation, Warning } from '../../../components';

import { games02 } from '../../../assets/gifs'

import { Container, Row, Col } from 'react-bootstrap';

import { IoIosLaptop } from 'react-icons/io';

const Games02Page = () => {
	return (
		<div className="games02">
			<NextLeft route={Routes.GAMES1} />
			<NextRight route={Routes.GAMES3} />
			<TutorialNavigation 
				text1="1. Intro" 
				text2="2. Voorbereiding"
				text3="3. Cofigureren"
				text4="4. ROMS Downloaden"
				text5="5. Playtime"

				link1="/games/1" 
				link2="/games/2"
				link3="/games/3"
				link4="/games/4"
				link5="/games/5"
			/>

			<Container className="container-step">
				<Row className="step">
					<Col lg={7} className="step-left">
						<IoIosLaptop className="icon-laptop"/>
						<h3 className="step-left__title">2. USB-Stick voorbereiden</h3>
						<ul className="step-left__list">
							<li className="step-left__list-text">Steek de USB-stick in de poort van je computer</li>
							<li className="step-left__list-text">Zorg dat de USB-stick volledig leeg is</li>
							<li className="step-left__list-text">Maak een nieuwe folder aan met naam ‘retropie’</li>
							<li className="step-left__list-text">Verwijder de USB-stick op een veilig manier van je computer</li>
						</ul>
						<Warning text="Zorg dat je USB-Stick leeg is"
						/>
					</Col>

					<Col sm={5}  className="step-right">
						<iframe className="gif" src={games02} width="90%" height="100%"></iframe>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Games02Page;
