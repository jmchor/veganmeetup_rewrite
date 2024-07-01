import { useQuery } from '@apollo/client';
import { createFileRoute } from '@tanstack/react-router';
import { MdArrowBackIos } from 'react-icons/md';
import { ResponsiveMasonry } from 'react-responsive-masonry';

import EventComponent from 'src/components/EventComponent';
import { ALL_IMAGES_QUERY } from 'src/gql/queries.js';
import { StyledLink } from 'src/styles/StyledLinks.js';
import {
	EventContainer,
	Headline,
	ImageContainer,
	Instagram,
	LowerContainer,
	MainContainer,
	MasonryContainer,
	MasonryStyles,
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
	const { data, error } = useQuery(ALL_IMAGES_QUERY, {
		variables: {
			where: {
				category: {
					equals: 'masonry',
				},
			},
		},
	});

	if (error) {
		return <p>{error.message}</p>;
	}

	return (
		<PageContainer>
			<MainContainer>
				<UpperContainer className='upperContainer'>
					<EventContainer className='socialIcons'>
						<EventComponent />
					</EventContainer>
					<MeetupContainer className='veganmeetup'>
						<StyledLink to='/'>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<MdArrowBackIos /> Zurück zur Navigation
							</div>
						</StyledLink>
						<Headline>
							<StyledLink to='/about'>Vegan Meetup Mainz</StyledLink>
						</Headline>
					</MeetupContainer>
				</UpperContainer>

				<LowerContainer className='lowerContainer'>
					<ImageContainer className='lowerLeft'>
						<MasonryContainer className='images'>
							<ResponsiveMasonry columnsCountBreakPoints={{ 250: 1, 400: 2, 900: 3 }}>
								<MasonryStyles gutter='10px'>
									{/*{data?.images?.map((image) => (
										<img
											key={image?.id}
											src={image?.image?.publicUrlTransformed as string}
											alt={image?.alt as string}
										/>
									))}*/}
									<img src='/1.jpg' alt='' />
									<img src='/4.jpg' alt='' />
									<img src='/3.jpg' alt='' />
									<img src='/2.jpg' alt='' />
									<img src='/4.jpg' alt='' />
									<img src='/1.jpg' alt='' />
									<img src='/4.jpg' alt='' />
									<img src='/2.jpg' alt='' />
									<img src='/4.jpg' alt='' />
									<img src='/1.jpg' alt='' />
									<img src='/3.jpg' alt='' />
									<img src='/2.jpg' alt='' />
								</MasonryStyles>
							</ResponsiveMasonry>
						</MasonryContainer>
					</ImageContainer>

					<SocialContainer className='lowerRight'>
						<SocialHeadingContainer>
							<h2>Sprecht mit uns!</h2>
						</SocialHeadingContainer>
						<SocialIconContainer>
							<a
								href='https://signal.group/#CjQKINmQGFqKBFqTVpzDhQLlLG7Efrb-0TtepyRcX1h_p2XqEhCTbvDV1cILFZpqYGsp15SX'
								target='_blank'
							>
								<SocialIcons src='/Signal-Logo-Ultramarine.svg' alt='Signal Messenger Icon' />
							</a>
							<a href='https://www.instagram.com/veganmeetupmainz/' target='_blank'>
								<Instagram src='/Instagram_Glyph_Gradient.svg' alt='Instagram Icon' />
							</a>
							<a href='mailto:jchorzempa@posteo.de' target='_blank'>
								<SocialIcons src='/email.png' alt='Email envelope Icon' />
							</a>
						</SocialIconContainer>
					</SocialContainer>
				</LowerContainer>
			</MainContainer>
		</PageContainer>
	);
}
