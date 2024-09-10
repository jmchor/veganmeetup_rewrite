import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

export const MainGrid = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	padding: 20px;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(15, 1fr);
	gap: 20px;
	background-color: #000000a5;

	@media screen and (min-width: 320px) and (max-width: 768px) {
	}
`;

export const BaseElement = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-radius: 10px;
	text-decoration: none;
	padding: 30px;
`;

export const HistoryElement = styled(BaseElement)`
	grid-column: 1 / span 2;
	grid-row: 1 / span 7;
	background-color: #5978f7;

	@media screen and (min-width: 320px) and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 1 / span 3;
	}
`;
export const VeganMeetupElement = styled(BaseElement)`
	grid-column: 3 / span 3;
	grid-row: 1 / span 7;
	background-color: #12b6e3fb;

	@media screen and (min-width: 320px) and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 4 / span 4;
	}
`;
export const MapElement = styled(BaseElement)`
	grid-column: 1 / span 1;
	grid-row: 8 / span 7;
	background-color: green;

	@media screen and (min-width: 320px) and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 8 / span 2;
	}
`;
export const AboutElement = styled(BaseElement)`
	grid-column: 2 / span 2;
	grid-row: 8 / span 7;
	background-color: #9d9d9ddf;

	@media screen and (min-width: 320px) and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 10 / span 2;
	}
`;
export const ResourcesElement = styled(BaseElement)`
	grid-column: 4 / span 2;
	grid-row: 8 / span 7;
	background-color: #b300ffdf;

	@media screen and (min-width: 320px) and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 12 / span 3;
	}
`;
export const Signatureelement = styled.div`
	grid-column: 1 / span 5;
	grid-row: 15;
	background-color: #000000df;
	padding: 5px;
	max-height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-radius: 10px;
	text-decoration: none;
	color: white;
`;
