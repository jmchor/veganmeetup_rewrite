import { useQuery } from '@apollo/client';
import { ALL_EVENTS_QUERY } from 'src/gql/queries.js';
import transformDateToArray from 'src/lib/transformDateToArray.js';
import { ComponentContainer, ContentContainer, DateContainer } from './styles.js';

const EventComponent = () => {
	const { data } = useQuery(ALL_EVENTS_QUERY, {
		variables: {
			where: {
				pastEvent: {
					equals: false,
				},
			},
			orderBy: [
				{
					date: 'asc',
				},
			],
		},
	});

	let transformedDate: string[] = [];

	if (data?.events && data?.events.length > 0) {
		transformedDate = transformDateToArray(data?.events[0].date as string);
	}

	return (
		<>
			{data?.events && data?.events.length > 0 && (
				<ComponentContainer to={`/events/${data?.events[0].id as string}`}>
					<DateContainer className='left'>
						<h1>{transformedDate[0]}</h1>
						<h4>{transformedDate[1]}</h4>
						<h4>{transformedDate[2]}</h4>
					</DateContainer>
					<ContentContainer className='right'>
						<h1>{data?.events && data?.events.length > 0 && data?.events[0].title}</h1>
						<h4>
							{data?.events && data?.events.length > 0 && (data?.events[0]?.from as string)} Uhr -{' '}
							{data?.events && data?.events.length > 0 && (data?.events[0]?.until as string)} Uhr
						</h4>
						<p>{data?.events && data?.events.length > 0 && data?.events[0].location}</p>
					</ContentContainer>
				</ComponentContainer>
			)}
		</>
	);
};
export default EventComponent;
