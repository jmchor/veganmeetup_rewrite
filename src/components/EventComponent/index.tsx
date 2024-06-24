import { useQuery } from '@apollo/client';
import { ALL_EVENTS_QUERY } from 'src/gql/queries';
import styled from 'styled-components';

const EventComponent = () => {
	const { data } = useQuery(ALL_EVENTS_QUERY, {
		variables: {
			orderBy: [
				{
					date: 'asc',
				},
			],
		},
	});

	const transformDateToArray = (dateString: string) => {
		const date = new Date(dateString);
		const options = { day: 'numeric', month: 'long', year: 'numeric' };

		const formattedDate = date.toLocaleDateString('en-GB', options as object);

		const dateArray = formattedDate.split(' ');

		return dateArray;
	};

	let transformedDate: string[] = [];

	if (data?.events && data?.events.length > 0) {
		transformedDate = transformDateToArray(data?.events[0].date as string);
	}

	return (
		<ComponentContainer>
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
	);
};
export default EventComponent;

export const ComponentContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	@media screen and (max-width: 900px) {
		flex-direction: column;
	}
`;

export const DateContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: auto;
	height: 100%;
	flex: 1;
	gap: 30px;
	background-color: #9cdff3;

	flex-direction: column;

	h1 {
		font-size: 50px;
	}

	h1,
	h4 {
		margin: 0;
	}

	@media screen and (max-width: 900px) {
		flex-direction: row;
		gap: 10px;
		padding: 5px;
		h1 {
			font-size: 20px;
		}
	}
`;

export const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: auto;
	height: 100%;
	flex: 2.5;
	gap: 20px;
	background-color: #f4fcff;

	flex-direction: column;

	h1,
	h4 {
		margin: 0;
	}

	@media screen and (max-width: 900px) {
		gap: 10px;
		padding: 5px;
		h1 {
			font-size: 20px;
		}

		p {
			margin: 0;
		}
	}
`;
