import { createFileRoute } from '@tanstack/react-router';
import {
	AboutLinkContainer,
	HistoryLinkContainer,
	LowerLinkContainer,
	ResourceLinkContainer,
	UpperLinkContainer,
	VeganMeetupLinkContainer,
} from 'src/styles/IndexPageStyles.js';
import { Headline, MainContainer, PageContainer } from 'src/styles/VeganMeetupRouteStyles.js';

export const Route = createFileRoute('/')({
	component: LandingPage,
});

function LandingPage() {
	return (
		<>
			<PageContainer>
				<MainContainer>
					<UpperLinkContainer className='upperContainer'>
						<HistoryLinkContainer to='/timeline'>
							<Headline>Geschichte</Headline>
						</HistoryLinkContainer>
						<VeganMeetupLinkContainer to='/veganmeetup'>
							<Headline>Vegan Meetup Mainz</Headline>
						</VeganMeetupLinkContainer>
					</UpperLinkContainer>

					<LowerLinkContainer className='lowerContainer'>
						<AboutLinkContainer to='/about'>
							<Headline>Über uns</Headline>
						</AboutLinkContainer>

						<ResourceLinkContainer to='/resources'>
							<Headline>Ressourcen</Headline>
						</ResourceLinkContainer>
					</LowerLinkContainer>
					<div
						style={{
							height: 'auto',
							margin: '0 20px 20px 20px',
							backgroundColor: 'black',
							padding: '10px',
							borderRadius: '10px',
						}}
					>
						<p style={{ textAlign: 'center', margin: '0', color: 'white' }}>© jxor 2024</p>
					</div>
				</MainContainer>
			</PageContainer>
		</>
	);
}
