import styled from 'styled-components';
import {
	EventContainer,
	ImageContainer,
	LowerContainer,
	MeetupContainer,
	SocialContainer,
	UpperContainer,
} from './VeganMeetupRouteStyles';

export const AboutLowerContainer = styled(LowerContainer)`
	@media screen and (max-width: 768px) {
		margin-bottom: 1rem;
	}
`;

export const AboutUsContainer = styled(ImageContainer)`
	width: 65%;
	flex-direction: column;
	padding: 20px 40px;
	margin-top: 0px;
	p {
		font-size: 20px;
		margin: 0;
		line-height: 1.5em;
		text-align: justify;
	}

	@media screen and (max-width: 768px) {
		width: 90%;
		margin: 20px 20px 60px 20px;
		padding: 20px 30px 30px 30px;
	}
`;

export const AboutSocialContainer = styled(SocialContainer)`
	width: 35%;
	justify-content: center;
	margin-top: 0px;
	img {
		width: 90%;
		height: 90%;
		object-fit: contain;
	}

	@media screen and (max-width: 768px) {
		width: 90%;
		height: 280px;
		margin-top: 120px;
	}
`;

export const Navigation = styled.div`
	height: 20px;
	margin-top: 20px;
`;

export const AboutMeetupContainer = styled(MeetupContainer)`
	justify-content: space-between;
	padding: 0;

	@media screen and (max-width: 768px) {
		width: 90%;
		margin: 20px;
	}
`;

export const TextContainer = styled.div`
	padding: 20px;
	color: white;
	flex: 2;
	h1 {
		margin: 0;
		font-size: 20px;
	}
	line-height: 1.5em;
	p {
		font-size: 18px;
	}
`;

export const AboutUpperContainer = styled(UpperContainer)`
	@media screen and (max-width: 768px) {
		flex-direction: column;
		margin-bottom: 20px;
	}
`;

export const AboutEventContainer = styled(EventContainer)`
	@media screen and (max-width: 768px) {
		width: 90%;
		margin-top: 20px;
	}
`;
