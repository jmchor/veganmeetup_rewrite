import { useQuery } from '@apollo/client';
import { Link, createFileRoute, useParams } from '@tanstack/react-router';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';

import { SINGLE_EVENT_QUERY } from 'src/gql/queries.js';
import transformDateToArray from 'src/lib/transformDateToArray.js';
import { TextContainer } from 'src/styles/AboutPageStyles.js';
import {
	EventContent,
	EventDetailContainer,
	EventNavigation,
	EventPageContainer,
	ImageHeader,
	ImageHeaderMobile,
	InnerContent,
	LeftSidebar,
} from 'src/styles/EventDetailStyles.js';
import styled from 'styled-components';

export const Route = createFileRoute('/events/$eventid')({
	component: EventPageComponent,
});

function EventPageComponent() {
	const eventId = useParams({ from: '/events/$eventid', select: (params) => params.eventid as string });

	const { data, error } = useQuery(SINGLE_EVENT_QUERY, {
		variables: {
			where: {
				id: eventId,
			},
		},
	});

	const documentArray = [] as { type: string; level?: number; text: string }[];

	data?.event?.content?.document?.forEach((item) => {
		documentArray.push({ type: item.type, level: item.level, text: item.children[0].text });
	});

	let transformedDate: string[] = [];

	if (data?.event) {
		transformedDate = transformDateToArray(data?.event?.date as string);
	}

	if (error) {
		<p>{error.message}</p>;
	}

	return (
		<EventPageContainer>
			<EventDetailContainer>
				<LeftSidebar>
					<ImageHeader>
						<img src={data?.event?.headerImage?.image?.publicUrlTransformed} alt='Event Header Image' />
					</ImageHeader>
				</LeftSidebar>

				<EventContent>
					<EventNavigation>
						<Link to='/veganmeetup'>
							<MdKeyboardDoubleArrowLeft size={30} />
						</Link>
					</EventNavigation>
					<InnerContent>
						<ImageHeaderMobile>
							<img src={data?.event?.headerImage?.image?.publicUrlTransformed} alt='Event Header Image' />
						</ImageHeaderMobile>
						<h1>{data?.event?.title}</h1>
						<h4>Wann: {transformedDate.join(' ')}</h4>
						<h4>
							Von {data?.event?.from} Uhr - {data?.event?.until} Uhr
						</h4>
						<h4>Wo: {data?.event?.location}</h4>
						<AddToCalendarButton
							name={data?.event?.title as string}
							startDate={data?.event?.date as string}
							startTime={data?.event?.from as string}
							endTime={data?.event?.until as string}
							options={['Apple', 'Google', 'Yahoo', 'iCal']}
							timeZone='Europe/Berlin'
							location={data?.event?.location as string}
						></AddToCalendarButton>
						<EventDetailTextContainer>
							{documentArray.map((item, index) => (
								<p key={index}>{item.text}</p>
							))}
						</EventDetailTextContainer>
					</InnerContent>
				</EventContent>
			</EventDetailContainer>
		</EventPageContainer>
	);
}

export const EventDetailTextContainer = styled(TextContainer)`
	color: black;

	p {
		margin: 0;
	}

	@media screen and (max-width: 768px) {
		width: 90%;
		padding: 0;
	}
`;
