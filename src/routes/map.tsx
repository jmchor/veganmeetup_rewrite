import { createFileRoute } from '@tanstack/react-router';
import { MdArrowBackIos } from 'react-icons/md';
import MapComponent from 'src/components/MapComponent';
import { StyledLink } from 'src/styles/StyledLinks';
import { PageContainer } from 'src/styles/VeganMeetupRouteStyles';
import styled from 'styled-components';

export const Route = createFileRoute('/map')({
	component: Map,
});

function Map() {
	return (
		<>
			<PageContainer>
				<MapMainGrid>
					<MapElement className='map'>
						<MapComponent />
					</MapElement>
					<BackButton>
						<StyledLink to='/'>
							<div style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '20px' }}>
								<MdArrowBackIos fontSize={20} style={{ marginRight: '5px' }} /> Zurück zur Navigation
							</div>
						</StyledLink>
					</BackButton>
				</MapMainGrid>
			</PageContainer>
		</>
	);
}

const MapMainGrid = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	padding: 20px;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(16, 1fr);
	gap: 20px;
	background-color: #000000a5;
`;

const BaseElement = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-radius: 10px;
	text-decoration: none;
`;

const MapElement = styled(BaseElement)`
	grid-column: 1 / span 5;
	grid-row: 1 / span 15;
	border-radius: 10px;
	border: 1px solid white;
`;
const BackButton = styled(BaseElement)`
	grid-column: 1 / span 5;
	grid-row: 16 / span 1;
	border-radius: 10px;
	border: 1px solid white;
	background: black;

	padding: 10px;

	a {
		text-decoration: none;
		color: white;
		font-size: 20px;
	}
`;
