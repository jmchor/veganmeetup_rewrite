import { createFileRoute } from '@tanstack/react-router';
import { MdArrowBackIos } from 'react-icons/md';
import EventComponent from 'src/components/EventComponent';
import {
	AboutEventContainer,
	AboutLowerContainer,
	AboutMeetupContainer,
	AboutSocialContainer,
	AboutUpperContainer,
	AboutUsContainer,
	TextContainer,
} from 'src/styles/AboutPageStyles';
import { StyledLink } from 'src/styles/StyledLinks';
import { MainContainer, PageContainer } from 'src/styles/VeganMeetupRouteStyles';

export const Route = createFileRoute('/about')({
	component: AboutPage,
});

function AboutPage() {
	return (
		<>
			<PageContainer>
				<MainContainer style={{ overflowY: 'scroll', gap: '20px', scrollbarWidth: 'none' }}>
					<AboutUpperContainer className='upperContainer'>
						<AboutEventContainer className='socialIcons'>
							<EventComponent />
						</AboutEventContainer>
						<AboutMeetupContainer className='veganmeetup'>
							<TextContainer>
								<h1>Was ist ein Meetup?</h1>
								<p>
									Der Vegan Meetup - zu Deutsch, der Vegan-Treff - ist eine Gruppe für Veganer:Innen, die sich gerne
									gemeinsam treffen, gemeinsam kochen, essen und allgemein austauschen. Zweimal im Monat, mal unter der
									Woche, mal an einem Sonntag, treffen wir uns im Community-Raum des "kreuzpunkt im Viertel" in Mainz.
									Es gibt genügend Platz, ist kinder- und tierfreundlich, es gibt eine Küche und es sind immer (!)
									freundliche Menschen da.
								</p>
								<p>
									Das Meetup funktioniert wie ein Mitbring-Buffet - alle bringen etwas mit, egal ob fertige Gerichte
									oder etwas zum Kochen. Über die Signal-Gruppe könnt ihr am besten mit allen anderen darüber
									kommunizieren!
								</p>
								<p>
									Kurz und knapp: es ist ein Ort und eine Gruppe, bei der man sich als Veganer:In nicht verstecken oder
									verstellen muss. Ganz im Gegenteil - wir freuen uns, euch kennen zu lernen!
								</p>
							</TextContainer>
						</AboutMeetupContainer>
					</AboutUpperContainer>

					<AboutLowerContainer className='lowerContainer'>
						<AboutUsContainer className='lowerLeft'>
							<p>
								Die Idee für das Meetup an sich hatte Heather - sie hat sich einen Ort gewünscht, an dem man nicht
								dauernd nachfragen musste, ob ein Lebensmittel für sie geeignet war oder nicht. Zwar gab es in der
								Mainzer Gegend schon tolle Treffpunkte wie den Veganen Stammtisch - aber ein Ort mehr kann ja nicht
								schaden!
							</p>
							<br />
							<p>
								Hannes hat sich dabei nicht lange bitten lassen - von beiden war er derjenige, der zuerst auf Fleisch
								verzichtet hat (ausgerechnet auf ihrer Hochzeit...). Gemeinsam eine vegane Erfahrung mit anderen
								Menschen teilen, und vielleicht noch viele weitere Menschen zu einer veganen Lebensweise und
								Aktivismusarbeit zu bringen - das wärs doch!
							</p>
							<StyledLink to='/'>
								<br />
								<div
									style={{ display: 'flex', alignItems: 'center', color: 'black', marginTop: '30px', fontSize: '20px' }}
								>
									<MdArrowBackIos fontSize={20} style={{ marginRight: '5px' }} /> Zurück zur Navigation
								</div>
							</StyledLink>
						</AboutUsContainer>

						<AboutSocialContainer className='lowerRight'>
							<img src='/H&H.jpeg	' alt='Heather & Hannes' />
						</AboutSocialContainer>
					</AboutLowerContainer>
				</MainContainer>
			</PageContainer>
		</>
	);
}
