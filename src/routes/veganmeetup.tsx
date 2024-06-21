import { createFileRoute } from '@tanstack/react-router';
import Masonry from 'react-responsive-masonry';
import { MdArrowBackIos } from 'react-icons/md';
import { useQuery } from '@apollo/client';

import { ALL_IMAGES_QUERY } from 'src/gql/queries';
import { StyledLink } from 'src/styles/StyledLinks';
import {
	EventContainer,
	Headline,
	ImageContainer,
	LowerContainer,
	MainContainer,
	MasonryContainer,
	MeetupContainer,
	PageContainer,
	SocialContainer,
	SocialHeadingContainer,
	SocialIconContainer,
	SocialIcons,
	UpperContainer,
} from 'src/styles/VeganMeetupRouteStyles';

export const Route = createFileRoute('/veganmeetup')({
	component: VeganMeetupPage,
});

function VeganMeetupPage() {
	const { data } = useQuery(ALL_IMAGES_QUERY, {
		variables: {
			where: {
				category: {
					equals: 'masonry',
				},
			},
		},
	});

	return (
		<PageContainer>
			<MainContainer>
				<UpperContainer className='upperContainer'>
					<SocialContainer className='socialIcons'>
						<SocialHeadingContainer>
							<h2> Wie man uns findet</h2>
						</SocialHeadingContainer>
						<SocialIconContainer>
							<SocialIcons src='/Signal-Logo-Ultramarine.svg' alt='Signal Messenger Icon' />
							<Instagram src='/Instagram_Glyph_Gradient.svg' alt='Instagram Icon' />
							<SocialIcons src='/email.png' alt='Email envelope Icon' />
						</SocialIconContainer>
					</SocialContainer>
					<MeetupContainer className='veganmeetup'>
						<StyledLink to='/'>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<MdArrowBackIos /> Navigation
							</div>
						</StyledLink>
						<Headline>Vegan Meetup Mainz</Headline>
					</MeetupContainer>
				</UpperContainer>

				<LowerContainer className='lowerContainer'>
					<ImageContainer className='lowerLeft'>
						<MasonryContainer className='images'>
							<Masonry
								columnsCount={3}
								gutter='10px'
								style={{ height: '60vh', overflowY: 'scroll', scrollbarWidth: 'none' }}
							>
								{data?.images?.map((image) => (
									<img key={image?.id} src={image?.image?.publicUrlTransformed as string} alt={image?.alt as string} />
								))}
							</Masonry>
						</MasonryContainer>
					</ImageContainer>

					<EventContainer className='lowerRight'>
						<h3>Event</h3>
					</EventContainer>
				</LowerContainer>
			</MainContainer>
		</PageContainer>
	);
}
