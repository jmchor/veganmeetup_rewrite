import styled from 'styled-components';
import { Navigation } from './AboutPageStyles.js';
import { MasonryStyles } from './VeganMeetupRouteStyles.js';

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
	margin-top: 20px;

	@media screen and (max-width: 768px) {
		width: 96%;
	}
`;

export const AnnouncementContainer = styled.div`
	margin: 10px auto 0px auto;
	padding: 20px;
	border-radius: 10px;
	width: 99%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #ffffffda;

	font-size: 20px;
	font-weight: 900;
	color: #000000;

	@media screen and (max-width: 768px) {
		width: 96%;
	}
`;
