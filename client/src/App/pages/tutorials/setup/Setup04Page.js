import { default as React } from 'react';

import * as Routes from '../../../routes';

import './setup.scss';

import { NextLeft, NextRight, TutorialNavigation, Warning } from '../../../components'

import {Container, Row, Col} from 'react-bootstrap';

import { IoIosLaptop } from 'react-icons/io';

const Setup04Page = () => {
	return (
		<div className="setup04">
			<NextLeft route={Routes.SETUP3} />
			<NextRight route={Routes.SETUP5} />
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
						<h3 className="step-left__title">RetroPi op SD kaart overbrengen</h3>
						<ul className="step-left__list">
							<li className="step-left__list-text">Zorg dat het programma BalenaEtcher geopend is.</li>
							<li className="step-left__list-text">Steek een lege SD kaart in je computer.</li>
							<li className="step-left__list-text">
								<b>Flash from file</b>
								&rarr; Hier moet je het RetroPi.img.gz bestand selecteren <br/>

								<b>Select Target</b>
								&rarr; Selecteer de SD kaart die je in je computer hebt gestoken
							</li>

							<li className="step-left__list-text">Verwijder na enkele minuten de SD kaart uit je computer.</li>
						</ul>
						<Warning text="Controlleer eerst of de SD kaart volledig leeg is. De gemiddelde download van RetroPi is 1MB"/>
					</Col>

					<Col sm={5}  className="step-right">

					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Setup04Page;
