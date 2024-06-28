import styled from 'styled-components';

export const EventDetailContainer = styled.div`
	border-radius: 10px;
	background-color: #ffffffe0;
	display: flex;
	flex-direction: column;
	height: auto;
	width: 66%;
	justify-content: center;
	align-items: center;

	margin: 20px 20px 0 20px;

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

export const EventContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	height: 450px;
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
	}
	p {
		font-size: 20px;
		line-height: 1.5em;
	}
	padding: 40px;

	@media screen and (max-width: 768px) {
		height: auto;
	}
`;

export const ImageHeader = styled.div`
	height: 250px;
	width: 100%;
	border-radius: 10px 10px 0 0;
	background-color: #9cdff3;
`;

export const TextContainer = styled.div`
	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
	}
	text-align: justify;
`;

export const Navigation = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 100%;
	border-radius: 0 0 10px 10px;
	background-color: #9cdff3;
`;
