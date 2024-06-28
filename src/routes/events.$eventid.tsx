import { useQuery } from '@apollo/client';
import { Link, createFileRoute, useParams } from '@tanstack/react-router';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { SINGLE_EVENT_QUERY } from 'src/gql/queries';
import transformDateToArray from 'src/lib/transformDateToArray';
import { Navigation, TextContainer } from 'src/styles/AboutPageStyles';
import { EventContent, EventDetailContainer, ImageHeader } from 'src/styles/EventDetailStyles';
import { PageContainer } from 'src/styles/VeganMeetupRouteStyles';

export const Route = createFileRoute('/events/$eventid')({
	component: EventPageComponent,
});

function EventPageComponent() {
	const eventId = useParams({ from: '/events/$eventid', select: (params) => params.eventid as string });

	const { data } = useQuery(SINGLE_EVENT_QUERY, {
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

	return (
		<PageContainer>
			<EventDetailContainer>
				<ImageHeader>
					{' '}
					<img
						src={data?.event?.headerImage?.image?.publicUrlTransformed as string}
						alt='Event Header Image'
						width='100%'
						height='100%'
						style={{ objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
					/>
				</ImageHeader>
				<EventContent>
					<h1>{data?.event?.title}</h1>
					<h4>
						Wann: {transformedDate[0]} {transformedDate[1]} {transformedDate[2]}
					</h4>
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
					<TextContainer>
						{documentArray.map((item, index) => (
							<p key={index}>{item.text}</p>
						))}
					</TextContainer>
				</EventContent>
				<Navigation>
					<Link to='/veganmeetup'>
						<MdKeyboardDoubleArrowLeft size={30} />
					</Link>
				</Navigation>
			</EventDetailContainer>
		</PageContainer>
	);
}
