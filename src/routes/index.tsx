import { createFileRoute } from '@tanstack/react-router';
import { getYear } from 'src/lib/getYear';
import {
	AboutElement,
	HistoryElement,
	MainGrid,
	MapElement,
	ResourcesElement,
	Signatureelement,
	VeganMeetupElement,
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
					<MapElement to='/map'>
						<Headline>Vegane Landkarte</Headline>
					</MapElement>
					<ResourcesElement to='/resources'>
						<Headline>Aktivisti & Ressourcen</Headline>
					</ResourcesElement>
					<Signatureelement>© jxor 2023 - {getYear()}</Signatureelement>
				</MainGrid>
			</PageContainer>
		</>
	);
}
