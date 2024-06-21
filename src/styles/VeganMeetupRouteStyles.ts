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
`;

export const MeetupContainer = styled.div`
	border-radius: 10px;
	background-color: #12b6e3fb;
	display: flex;
	flex-direction: column;
	height: auto;
	justify-content: center;
	align-items: center;
	flex: 1;
	padding: 20px;
	margin: 20px 20px 0 0px;

	&:hover {
		h1 {
			transform: scale3d(1.2, 1.2, 1.2);
			transition: all 0.3s ease-in-out;
		}
	}
`;

export const MainContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: #000000a5;
`;

export const SocialContainer = styled.div`
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	height: auto;
	width: 33%;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffffe0;
	margin: 20px 20px 0 20px;
`;

export const SocialHeadingContainer = styled.div`
	height: 70px;
	border-radius: 10px 10px 0 0;
	width: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
	background-color: #12b6e3fb;

	h2 {
		color: white;
	}
`;

export const SocialIconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
	height: 50px;
	flex: 1;
`;

export const MasonryContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const UpperContainer = styled.div`
	height: 100%;
	display: flex;
	flex: 1%;
`;

export const LowerContainer = styled.div`
	height: 100%;
	display: flex;
	flex: 2.5;
`;

export const ImageContainer = styled.div`
	border-radius: 10px;
	background-color: #ffffffe0;
	display: flex;
	height: auto;
	width: 66%;
	justify-content: center;
	align-items: center;
	padding: 20px;
	margin: 20px;
	flex: 1;
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
	margin: 20px 20px 20px 0;
`;

export const SocialIcons = styled.img`
	height: 50px;
`;

export const Instagram = styled(SocialIcons)`
	height: 50px;
	background-color: #fcfcfc7c;
	border-radius: 14px;
`;
