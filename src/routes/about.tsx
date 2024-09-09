import { createFileRoute } from '@tanstack/react-router';
import { MdArrowBackIos } from 'react-icons/md';
import EventComponent from 'src/components/EventComponent';

import { StyledLink } from 'src/styles/StyledLinks';
import { PageContainer } from 'src/styles/VeganMeetupRouteStyles';
import styled from 'styled-components';

export const Route = createFileRoute('/about')({
	component: AboutPage,
});

function AboutPage() {
	return (
		<PageContainer style={{ overflow: 'scroll', scrollbarWidth: 'none', backgroundColor: '#000000a5' }}>
			<AboutGridContainer>
				<FirstItem>
					<EventComponent />
				</FirstItem>
				<SecondItem>
					<h1>Was ist ein Meetup?</h1>
					<p>
						Der Vegan Meetup - zu Deutsch, der Vegan-Treff - ist eine Gruppe für Veganer:Innen, die sich gerne gemeinsam
						treffen, gemeinsam kochen, essen, austauschen und auch mal gemeinsam etwas unternehmen. Am ersten Sonntag im
						Monat treffen wir uns im Community-Raum des "kreuzpunkt im Viertel" in Mainz zum Mitbringbrunch. Es gibt
						genügend Platz, ist kinder- und tierfreundlich, es gibt eine Küche und es sind immer (!) freundliche
						Menschen da.
					</p>
					<p>
						Das Meetup funktioniert wie ein Mitbring-Buffet - alle bringen etwas mit, egal ob fertige Gerichte oder
						etwas zum Kochen. Über die Signal-Gruppe könnt ihr am besten mit allen anderen darüber kommunizieren!
					</p>
					<p>
						Kurz und knapp: es ist ein Ort und eine Gruppe, bei der man sich als Veganer:In nicht verstecken oder
						verstellen muss. Ganz im Gegenteil - wir freuen uns, euch kennen zu lernen!
					</p>
				</SecondItem>
				<ThirdItem>
					<p>
						Die Idee für das Meetup an sich hatte Heather - sie hat sich einen Ort gewünscht, an dem man nicht dauernd
						nachfragen musste, ob ein Lebensmittel für sie geeignet war oder nicht. Zwar gab es in der Mainzer Gegend
						schon tolle Treffpunkte wie den Veganen Stammtisch - aber ein Ort mehr kann ja nicht schaden!
					</p>
					<br />
					<p>
						Hannes hat sich dabei nicht lange bitten lassen - von beiden war er derjenige, der zuerst auf Fleisch
						verzichtet hat (ausgerechnet auf ihrer Hochzeit...). Gemeinsam eine vegane Erfahrung mit anderen Menschen
						teilen, und vielleicht noch viele weitere Menschen zu einer veganen Lebensweise und Aktivismusarbeit zu
						bringen - das wärs doch!
					</p>
					<StyledLink to='/'>
						<br />
						<div style={{ display: 'flex', alignItems: 'center', color: 'black', marginTop: '30px', fontSize: '20px' }}>
							<MdArrowBackIos fontSize={20} style={{ marginRight: '5px' }} /> Zurück zur Navigation
						</div>
					</StyledLink>
				</ThirdItem>
				<FourthItem>
					<img src='/H&H.jpeg	' alt='Heather & Hannes' />
				</FourthItem>
			</AboutGridContainer>
		</PageContainer>
	);
}

export const AboutBaseItem = styled.div`
	border-radius: 10px;
	background-color: #ffffffe0;
	padding: 20px;
	height: auto;
	max-height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	p {
		font-size: 18px;
		line-height: 1.5em;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
	}

	@media screen and (max-width: 768px) {
		height: fit-content;
		img {
			height: auto;
		}
	}
`;

export const FirstItem = styled(AboutBaseItem)`
	grid-column: 1 / span 2;
	grid-row: 1;

	@media screen and (min-width: 320px) and (max-width: 1440px) {
		grid-column: 1 / span 5;
		grid-row: 1;
	}
`;

export const SecondItem = styled(AboutBaseItem)`
	grid-column: 3 / span 4;
	grid-row: 1;
	background-color: #12b6e3fb;
	color: white;
	padding: 20px;
	h1 {
		font-size: 20px;
	}
	p {
		margin: 0;
	}

	@media screen and (min-width: 320px) and (max-width: 1440px) {
		grid-column: 1 / span 5;
		grid-row: 2;
	}
`;

export const ThirdItem = styled(AboutBaseItem)`
	grid-column: 1 / span 3;
	grid-row: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	p {
		margin: 0;
	}

	@media screen and (min-width: 320px) and (max-width: 1440px) {
		grid-column: 1 / span 5;
		grid-row: 4;
	}
`;

export const FourthItem = styled(AboutBaseItem)`
	grid-column: 4 / span 3;
	grid-row: 2;

	@media screen and (min-width: 320px) and (max-width: 1440px) {
		grid-column: 1 / span 5;
		grid-row: 3;
	}
`;

export const AboutGridContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 20px;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(2, calc((100% - 20px) / 2));
	gap: 20px;

	@media screen and (min-width: 320px) and (max-width: 1024px) {
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(4, auto);
	}
`;
