/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@apollo/client';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
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
} from 'src/styles/VeganMeetupRouteStyles.js';

export const Route = createFileRoute('/veganmeetup')({
	component: VeganMeetupPage,
});

type Image = {
	id: string;
	image: { publicUrlTransformed: string; __typename: string };
	alt: string;
	__typename: string;
};

function VeganMeetupPage() {
	const [masonryImages, setMasonryImages] = useState<Image[]>([]);
	const [shuffledImages, setShuffledImages] = useState<Image[]>([]);
	const { data, error } = useQuery(ALL_IMAGES_QUERY, {
		variables: {
			where: {
				category: {
					equals: 'masonry',
				},
			},
		},

		onCompleted: (data) => {
			setMasonryImages(data?.images as Image[]);
		},
	});

	function shuffleArray<T>(array: readonly T[]): T[] {
		const newArray = array.slice(); // Create a mutable copy
		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
		}
		return newArray;
	}
	useEffect(() => {
		setShuffledImages(shuffleArray(masonryImages));
	}, [masonryImages]);

	if (error) {
		return <p>{error.message}</p>;
	}

	return (
		<PageContainer style={{ overflow: 'scroll', scrollbarWidth: 'none' }}>
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
									{shuffledImages.map((image) => (
										<img
											key={image?.id}
											src={image?.image?.publicUrlTransformed as string}
											alt={image?.alt as string}
										/>
									))}
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
								<Instagram src='/Instagram_icon.png' alt='Instagram Icon' />
							</a>
							<a href='https://www.facebook.com/profile.php?id=61565439217123' target='_blank'>
								<SocialIcons src='/facebook.png' alt='Facebook Icon' />
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
