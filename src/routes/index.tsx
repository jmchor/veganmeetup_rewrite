import { createFileRoute } from '@tanstack/react-router';
import {
	MainGrid,
	HistoryElement,
	VeganMeetupElement,
	AboutElement,
	ResourcesElement,
	Signatureelement,
} from 'src/styles/IndexPageStyles';
import { Headline, PageContainer } from 'src/styles/VeganMeetupRouteStyles.js';

export const Route = createFileRoute('/')({
	component: LandingPage,
});

function LandingPage() {
	return (
		<>
			<PageContainer>
				<MainGrid>
					<HistoryElement to='/timeline'>
						<Headline>Mehr über Veganismus</Headline>
					</HistoryElement>
					<VeganMeetupElement to='/veganmeetup'>
						<Headline>Vegan Meetup Mainz</Headline>
					</VeganMeetupElement>
					<AboutElement to='/about'>
						<Headline>Über uns</Headline>
					</AboutElement>
					<ResourcesElement to='/resources'>
						<Headline>Ressourcen</Headline>
					</ResourcesElement>
					<Signatureelement>© jxor 2023 - 2024</Signatureelement>
				</MainGrid>
			</PageContainer>
		</>
	);
}
