import styled from 'styled-components';

export const GridContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 20px;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(8, auto);
	gap: 20px;
`;

export const BaseItem = styled.div`
	border-radius: 10px;
	background-color: #ffffffe0;
	padding: 20px;
	text-align: center;
	border: 1px solid #ccc;
	height: 550px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	p {
		font-size: 20px;
		line-height: 1.5em;
		margin: 0;
		padding: 0 40px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
	}

	@media screen and (max-width: 768px) {
		height: fit-content;
		img {
			height: 300px;
		}
	}
`;

export const FirstItem = styled(BaseItem)`
	grid-column: 1 / span 2;
	grid-row: 1;

	@media screen and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 1;
	}
`;

export const SecondItem = styled(BaseItem)`
	grid-column: 3 / span 3;
	grid-row: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 60px;

	@media screen and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 2;
	}
`;

export const ThirdItem = styled(BaseItem)`
	grid-column: 1 / span 3;
	grid-row: 2;

	@media screen and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 4;
	}
`;

export const FourthItem = styled(BaseItem)`
	grid-column: 4 / span 2;
	grid-row: 2;

	@media screen and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 3;
	}
`;

export const FifthItem = styled(BaseItem)`
	grid-column: 1 / span 2;
	grid-row: 3;

	@media screen and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 5;
	}
`;

export const SixthItem = styled(BaseItem)`
	grid-column: 3 / span 3;
	grid-row: 3;

	@media screen and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 6;
	}
`;

export const SeventhItem = styled(BaseItem)`
	grid-column: 1 / span 3;
	grid-row: 4;

	@media screen and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 8;
	}
`;

export const EigthItem = styled(BaseItem)`
	grid-column: 4 / span 2;
	grid-row: 4;

	@media screen and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 7;
	}
`;

export const NinthItem = styled(BaseItem)`
	grid-column: 1 / span 2;
	grid-row: 5;

	@media screen and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 9;
	}
`;

export const TenthItem = styled(BaseItem)`
	grid-column: 3 / span 3;
	grid-row: 5;

	@media screen and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 10;
	}
`;

export const EleventhItem = styled(BaseItem)`
	grid-column: 1 / span 3;
	grid-row: 6;

	@media screen and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 12;
	}
`;

export const TwelfthItem = styled(BaseItem)`
	grid-column: 4 / span 2;
	grid-row: 6;

	@media screen and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 11;
	}
`;

export const ThirteenthItem = styled(BaseItem)`
	grid-column: 1 / span 2;
	grid-row: 7;

	@media screen and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 13;
	}
`;

export const FourteenthItem = styled(BaseItem)`
	grid-column: 3 / span 3;
	grid-row: 7;

	@media screen and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 14;
	}
`;

export const FifteenthItem = styled(BaseItem)`
	grid-column: 1 / span 3;
	grid-row: 8;
	height: fit-content;

	@media screen and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 15;
	}
`;

export const SixteenthItem = styled(BaseItem)`
	grid-column: 4 / span 2;
	grid-row: 8;
	height: fit-content;

	@media screen and (max-width: 768px) {
		grid-column: 1 / span 5;
		grid-row: 16;
	}
`;
