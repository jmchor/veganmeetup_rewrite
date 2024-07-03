import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

export const UpperLinkContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 20px;
	flex: 1;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		margin-bottom: 0px;
	}
`;

export const LowerLinkContainer = styled.div`
	height: 100%;
	display: flex;
	flex: 1;

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
	}
`;

export const HistoryLinkContainer = styled(Link)`
	border-radius: 10px;
	text-decoration: none;
	background-color: #5978f7;
	color: white;
	font-size: 30px;
	display: flex;
	height: auto;
	width: 33%;
	justify-content: center;
	align-items: center;
	padding: 20px;

	margin: 20px 20px 0 20px;

	@media screen and (max-width: 768px) {
		width: 90%;
		margin: 20px auto 20px auto;
		height: 110px;
	}
`;

export const VeganMeetupLinkContainer = styled(Link)`
	border-radius: 10px;
	text-decoration: none;
	background-color: #12b6e3fb;
	display: flex;
	flex-direction: column;
	height: auto;
	justify-content: center;
	align-items: center;
	flex: 1;
	padding: 20px;
	margin: 20px 20px 0 0px;

	@media screen and (max-width: 768px) {
		width: 90%;
		margin: 0px auto 20px auto;
		min-height: 180px;
	}
`;

export const AboutLinkContainer = styled(Link)`
	border-radius: 10px;
	background-color: #9d9d9ddf;
	text-decoration: none;
	display: flex;
	height: auto;
	width: 80%;
	justify-content: center;
	align-items: center;
	padding: 20px;
	margin: 0 20px 20px 20px;
	flex: 1;

	@media screen and (max-width: 768px) {
		width: 90%;
		height: auto;
	}
`;

export const ResourceLinkContainer = styled(Link)`
	border-radius: 10px;
	text-decoration: none;
	display: flex;
	flex-direction: column;
	height: auto;
	width: 35%;
	justify-content: center;
	align-items: center;
	background-color: #b300ffdf;
	margin: 0px 20px 20px 0;

	@media screen and (max-width: 768px) {
		width: 90%;
		height: auto;
		margin: 0px 20px 20px 20px;
	}
`;
