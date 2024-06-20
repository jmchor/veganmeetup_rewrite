import { createRootRoute, Outlet } from '@tanstack/react-router';
import { GlobalStyles } from 'src/styles/GlobalStyles';
import styled from 'styled-components';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<>
			<GlobalStyles />
			<CarouselContainer>
				<Carousel responsive={responsive}>
					<Container>Item 1</Container>
					<Container>Item 2</Container>
					<Container>Item 3</Container>
					<Container>Item 4</Container>
				</Carousel>
			</CarouselContainer>
		</>
	);
}

export const Container = styled.div`
	height: 90vh;
	width: 97%;
	margin: 0 auto;
	background: #fcfcfc;
	margin-bottom: 2rem;
	border-radius: 1rem;
	border: 1px solid black;
	box-shadow: 0px 150px 70px -100px rgba(0, 0, 0, 0.293);
`;

export const CarouselContainer = styled.div`
	margin-top: 1rem;
`;
