import styled from 'styled-components';

export const CardContainer = styled.div`
	width: 100%;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: #fcfcfcda;
	padding: 20px;

	i {
		font-size: 15px;
		margin: 0 0 20px 0;
		padding: 0 10px;
	}

	h1 {
		margin: 0 0 20px 0;
		font-size: 30px;
		text-align: center;
	}

	p {
		margin: 0;
		font-size: 20px;
		text-align: justify;
		padding: 0 20px 10px 20px;
	}

	a {
		text-decoration: none;
		color: black;
		cursor: pointer;
	}

	@media screen and (max-width: 768px) {
		p {
			font-size: 18px;
			word-wrap: break-word;
			hyphens: auto;
		}
		h1 {
			font-size: 22px;
			padding: 0 5px;
		}
	}
`;

export const Upper = styled.div`
	display: flex;
	flex-direction: column;

	flex: 1;
	height: 40%;
	width: 100%;
	img {
		width: 100%;
		height: 100%;

		object-fit: cover;
	}

	border: 1px solid black;
`;
export const Lower = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 2;
	width: 100%;

	border: 1px solid black;
`;
