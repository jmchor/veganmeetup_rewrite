import styled from 'styled-components';

export const EventDetailContainer = styled.div`
	display: flex;
	flex-direction: row;
	background-color: #ffffffe0;
	border-radius: 15px;

	width: 90%;
	max-width: 1100px;
	margin: 40px auto;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
	overflow: hidden;
	backdrop-filter: blur(8px);

	@media screen and (max-width: 768px) {
		flex-direction: column;
		width: 95%;
		margin: 20px auto 20px auto;
	}
`;

export const LeftSidebar = styled.div`
	flex: 0 0 40%;
	background-color: #f8f9fa;
	border-right: 1px solid #00000010;

	@media screen and (max-width: 768px) {
		/* Entirely remove the image/sidebar on mobile */
		display: none;
	}
`;

export const ImageHeader = styled.div`
	width: 100%;
	height: 100%;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const ImageHeaderMobile = styled(ImageHeader)`
	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export const EventContent = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	height: auto;
	box-sizing: border-box;
	/* This ensures that on mobile, the content grows naturally */
`;

export const EventNavigation = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	width: 100%;

	flex-shrink: 0;

	a {
		display: flex;
		color: inherit;
		text-decoration: none;
	}

	@media screen and (max-width: 768px) {
		height: 50px;
	}
`;

export const InnerContent = styled.div`
	padding: 0 40px 40px 40px;
	display: flex;
	flex-direction: column;
	gap: 15px;

	h1 {
		font-size: 2.2rem;
		margin: 0;
	}

	h4 {
		margin: 0;
		font-weight: 500;
		color: #555;
	}

	@media screen and (max-width: 768px) {
		padding: 0 20px 20px 20px;

		h1 {
			font-size: 1.6rem;
		}
	}
`;

export const EventDetailTextContainer = styled.div`
	margin-top: 15px;
	margin-bottom: 40px;
	p {
		font-size: 18px;
		line-height: 1.6;
		color: #333;
	}
`;

export const EventPageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
