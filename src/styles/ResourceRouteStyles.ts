import styled from 'styled-components';
import { Navigation } from './AboutPageStyles';
import { MasonryStyles } from './VeganMeetupRouteStyles';

export const RessourceMasonryStyles = styled(MasonryStyles)`
	height: 100%;
	padding: 10px;
`;

export const RessourceNavigation = styled(Navigation)`
	margin: 0;
	border-radius: 10px;
	padding: 20px;
	width: 99%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #000000;
	margin-top: 60px;
	position: sticky;
	top: 20px;

	@media screen and (max-width: 768px) {
		width: 96%;
	}
`;

export const AnnouncementContainer = styled.div`
	margin: 0;
	padding: 20px;
	border-radius: 10px;
	width: 99%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ffffffda;
	margin-top: 160px;
	font-size: 20px;
	font-weight: 900;
	color: #000000;

	@media screen and (max-width: 768px) {
		width: 96%;
		margin-top: 220px;
	}
`;
