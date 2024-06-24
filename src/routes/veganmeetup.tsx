import { createFileRoute } from '@tanstack/react-router';
import { ResponsiveMasonry } from 'react-responsive-masonry';
import { MdArrowBackIos } from 'react-icons/md';
import { useQuery } from '@apollo/client';

import { ALL_IMAGES_QUERY } from 'src/gql/queries';
import { StyledLink } from 'src/styles/StyledLinks';
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
import EventComponent from 'src/components/EventComponent';

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
					<EventContainer className='socialIcons'>
						<EventComponent />
					</EventContainer>
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
							<SocialIcons src='/Signal-Logo-Ultramarine.svg' alt='Signal Messenger Icon' />
							<Instagram src='/Instagram_Glyph_Gradient.svg' alt='Instagram Icon' />
							<SocialIcons src='/email.png' alt='Email envelope Icon' />
						</SocialIconContainer>
					</SocialContainer>
				</LowerContainer>
			</MainContainer>
		</PageContainer>
	);
}
