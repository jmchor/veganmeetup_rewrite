import { useQuery } from '@apollo/client';
import { Link, createFileRoute, useParams } from '@tanstack/react-router';
import { SINGLE_EVENT_QUERY } from 'src/gql/queries';
import transformDateToArray from 'src/lib/transformDateToArray';
import { PageContainer } from 'src/styles/VeganMeetupRouteStyles';
import styled from 'styled-components';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

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

export const EventDetailContainer = styled.div`
	border-radius: 10px;
	background-color: #ffffffe0;
	display: flex;
	flex-direction: column;
	height: auto;
	width: 66%;
	justify-content: center;
	align-items: center;

	margin: 20px 20px 0 20px;

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

export const EventContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	height: 450px;
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
	}
	p {
		font-size: 20px;
		line-height: 1.5em;
	}
	padding: 40px;
`;

export const ImageHeader = styled.div`
	height: 250px;
	width: 100%;
	border-radius: 10px 10px 0 0;
	background-color: #9cdff3;
`;

export const TextContainer = styled.div`
	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
	}
	text-align: justify;
`;

export const Navigation = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 100%;
	border-radius: 0 0 10px 10px;
	background-color: #9cdff3;
`;
