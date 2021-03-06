import { default as React } from 'react';

import { Link } from "react-router-dom";

import * as Routes from '../../../routes';

import { NextLeft, NextRight, TutorialNavigation } from '../../../components';

import { img_gamepad } from '../../../assets/images';

import {Container, Row, Col} from 'react-bootstrap';

import { FaRaspberryPi } from 'react-icons/fa';


const Setup05Page = () => {
	return (
		<div className="setup05">
			<NextLeft route={Routes.SETUP4} />
			<NextRight route={Routes.GAMES1} />
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
						<FaRaspberryPi className="icon-rbp"/>
						<h3 className="step-left__title">5. RaspberryPi opstarten</h3>
						<ul className="step-left__list">
							<li className="step-left__list-text">Verbind nu je controller met de RaspberryPi a.d.h.v. de micro USB kabel</li>
							<li className="step-left__list-text">Steek de SD-kaart in de RaspberryPi</li>
							<li className="step-left__list-text">Voeg als laatste de stroomkabel van de RaspberryPi in.
								Hierdoor zal de RaspberryPi opstarten, en zal je zien dat de RetroPi software ook opstart
							</li>
							<li className="step-left__list-text">Nu zal RetroPi je vragen om je controller te configureren. Volg hierna de stappen die van jou verwacht worden.
								De configuratie van RetroPi en de bijhorende controller is nu voltooid. In de volgende stappen gaan we <Link to={Routes.GAMES1}>games toevoegen</Link> aan je SD-kaart
							</li>
							<p className="step-left__list-text"><b>Optioneel:</b> <a href="https://www.youtube.com/watch?v=uoFQrnwGoLM&t=146s" target="_blank">controller met bluetooth verbinden</a></p>
						</ul>
					</Col>

					<Col lg={5}  className="step-right">
						<img src={img_gamepad} width="80%" height="auto"/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Setup05Page;
