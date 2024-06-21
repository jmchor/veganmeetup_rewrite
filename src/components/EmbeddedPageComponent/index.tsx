import styled from 'styled-components';

const EmbeddedPageComponent = ({ source }: { source: string }) => {
	return (
		<Container>
			<iframe src={source} width='100%' height='100%'></iframe>
		</Container>
	);
};
export default EmbeddedPageComponent;

export const Frame = styled.iframe`
	width: 100%;
	height: 100%;
`;

export const Container = styled.div`
	overflow: hidden;
	width: 100%;
	height: 100%;
	padding: 3rem;
`;
