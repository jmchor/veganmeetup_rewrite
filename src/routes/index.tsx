import { Link, createFileRoute } from '@tanstack/react-router';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import EmbeddedPageComponent from 'src/components/EmbeddedPageComponent';

import styled from 'styled-components';

export const Route = createFileRoute('/')({
	component: LandingPage,
});

function LandingPage() {
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
			<CarouselContainer>
				<CarouselStyles responsive={responsive}>
					<Container>
						<EmbeddedPageComponent source='http://localhost:5173/veganmeetup' />
						<OverlayLink to='http://localhost:5173/veganmeetup'></OverlayLink>
					</Container>
					<Container>
						<EmbeddedPageComponent source='http://localhost:5173/about' />
						<OverlayLink to='http://localhost:5173/about'></OverlayLink>
					</Container>
					<Container>
						<EmbeddedPageComponent source='http://localhost:5173/timeline' />
						<OverlayLink to='http://localhost:5173/timeline'></OverlayLink>
					</Container>
					<Container>Item 4</Container>
				</CarouselStyles>
			</CarouselContainer>
		</>
	);
}

export const Container = styled.div`
	height: 80vh;
	width: 80%;
	padding: 10px;
	margin: 0 auto;
	background: #fcfcfc81;
	position: relative;
	overflow-y: hidden;

	@media screen and (max-width: 768px) {
		width: 90%;
		height: 90vh;
	}
`;

export const CarouselContainer = styled.div`
	margin-top: 3rem;
`;

export const CarouselStyles = styled(Carousel)`
	box-shadow: 0px 200px 100px -180px rgba(0, 0, 0, 0.293);
`;

export const OverlayLink = styled(Link)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;
