import { createFileRoute } from '@tanstack/react-router';
import { ResponsiveMasonry } from 'react-responsive-masonry';
import RessourceCardComponent from 'src/components/RessourceCardComponent';
import { MasonryContainer, MasonryStyles, PageContainer } from 'src/styles/VeganMeetupRouteStyles';
import styled from 'styled-components';

export const Route = createFileRoute('/ressources')({
	component: RessourcesPage,
});

function RessourcesPage() {
	const array = [1, 2, 3, 4, 5, 6, 7, 5, 6, 3, 34, 1, 2, 3, 2];
	return (
		<PageContainer style={{ overflow: 'scroll', scrollbarWidth: 'none' }}>
			<MasonryContainer className='images'>
				<ResponsiveMasonry columnsCountBreakPoints={{ 250: 1, 400: 2, 900: 3 }}>
					<RessourceMasonryStyles gutter='10px'>
						{array.map((item) => (
							<RessourceCardComponent placeholder={item.toString()} />
						))}
					</RessourceMasonryStyles>
				</ResponsiveMasonry>
			</MasonryContainer>
		</PageContainer>
	);
}

export const RessourceMasonryStyles = styled(MasonryStyles)`
	height: 100%;
	padding: 10px;
`;
