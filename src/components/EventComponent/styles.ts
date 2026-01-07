import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

export const ComponentContainer = styled(Link)`
	display: flex;
	height: 100%;
	width: 100%;
	text-decoration: none;
	color: black;

	h1 {
		text-align: center;
	}
	@media screen and (max-width: 900px) {
		flex-direction: column;
	}
`;

export const DateContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: auto;
	height: 100%;
	flex: 1;
	gap: 30px;
	background-color: var(--lightOrange);

	flex-direction: column;

	h1 {
		font-size: 50px;
	}

	h1,
	h4 {
		margin: 0;
	}

	@media screen and (max-width: 900px) {
		flex-direction: row;
		gap: 10px;
		padding: 5px;
		h1 {
			font-size: 20px;
		}
	}
`;

export const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: auto;
	height: 100%;
	flex: 2.5;
	gap: 20px;
	background-color: #f4fcff;
	padding: 10px;

	flex-direction: column;

	h1,
	h4 {
		margin: 0;
	}

	@media screen and (max-width: 900px) {
		gap: 10px;
		padding: 5px;
		h1 {
			font-size: 20px;
		}

		p {
			margin: 0;
		}
	}
`;

export const EventLink = styled(Link)`
	text-decoration: none;
	color: black;
	margin: 0;
	padding: 0;
`;
