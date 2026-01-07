import Masonry from 'react-responsive-masonry';
import styled from 'styled-components';

export const PageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export const BigTile = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const Headline = styled.h1`
	font-size: 50px;
	color: white;
	text-align: center;

	@media screen and (max-width: 768px) {
		font-size: 30px;
		text-align: center;
	}
`;

export const MainContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: #000000a5;
`;

export const UpperContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	flex: 1;

	@media screen and (max-width: 768px) {
	}
`;

export const EventContainer = styled.div`
	border-radius: 10px;
	background-color: #ffffffe0;
	display: flex;
	height: auto;
	width: 33%;
	justify-content: center;
	align-items: center;
	padding: 20px;

	margin: 20px 20px 0 20px;

	@media screen and (max-width: 768px) {
		width: 60%;
	}
`;

export const MeetupContainer = styled.div`
	border-radius: 10px;
	background-color: var(--orange);
	display: flex;
	flex-direction: column;
	height: auto;
	justify-content: center;
	align-items: center;
	flex: 1;
	padding: 20px;
	margin: 20px 20px 0 0px;

	@media screen and (max-width: 768px) {
		flex: 0;
		min-width: 30%;

		h1 {
			font-size: 24px;
		}
	}
`;

export const LowerContainer = styled.div`
	height: 100%;
	display: flex;
	flex: 1;

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
	}
`;

export const ImageContainer = styled.div`
	border-radius: 10px;
	background-color: #ffffffe0;
	display: flex;
	height: auto;
	width: 80%;
	justify-content: center;
	align-items: center;
	padding: 20px;
	margin: 20px;
	flex: 1;

	@media screen and (max-width: 768px) {
		width: 93%;
	}
`;

export const MasonryContainer = styled.div`
	width: 100%;
	height: 100%;
	/* display: flex;
	justify-content: center;
	align-items: center; */
`;

export const MasonryStyles = styled(Masonry)`
	height: 50vh;
	overflow-y: scroll;
	scrollbar-width: none;

	@media screen and (max-width: 768px) {
		height: 50vh;
	}
`;

export const SocialHeadingContainer = styled.div`
	height: 30%;
	border-radius: 10px 10px 0 0;
	width: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
	background-color: var(--orange);
	text-align: center;
	padding: 20px;

	h2 {
		color: white;
	}

	@media screen and (max-width: 768px) {
		height: 40px;
	}
`;

export const SocialIconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	height: 50px;
	flex: 1;

	@media screen and (max-width: 768px) {
		height: 70px;
		flex-direction: row;
	}
`;

export const SocialContainer = styled.div`
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	height: auto;
	width: 20%;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffffe0;
	margin: 20px 20px 20px 0;

	@media screen and (max-width: 768px) {
		margin: 20px 20px 0 20px;
		width: 93%;
		height: 140px;
	}
`;

export const SocialIcons = styled.img`
	height: 50px;
`;

export const Instagram = styled(SocialIcons)`
	height: 50px;
	background-color: #fcfcfc7c;
	border-radius: 14px;
`;
