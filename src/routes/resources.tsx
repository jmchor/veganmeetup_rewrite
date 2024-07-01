/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@apollo/client';
import { Link, createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { ResponsiveMasonry } from 'react-responsive-masonry';
import ResourceCardComponent from 'src/components/ResourceCardComponent';
import { ALL_ACTIVISTS_QUERY, ALL_BOOKS_QUERY, ALL_PODCASTS_QUERY, ALL_VIDEOS_QUERY } from 'src/gql/queries.js';
import { AnnouncementContainer, RessourceMasonryStyles } from 'src/styles/ResourceRouteStyles.js';
import { MasonryContainer, PageContainer } from 'src/styles/VeganMeetupRouteStyles.js';

export const Route = createFileRoute('/resources')({
	component: ResourcesPage,
});

interface BaseResource {
	id: string | null;
	url: string | null;
	thumbnail: { image: { publicUrlTransformed: string } } | null;
	name: string | null;
	description: string | null;
	author?: string | null;
}

function ResourcesPage() {
	const [allDataArray, setAllDataArray] = useState<BaseResource[]>([]);
	const { data: activistData, error } = useQuery(ALL_ACTIVISTS_QUERY, {
		onCompleted: (data) => {
			setAllDataArray((prev) => [...prev, ...(data?.activists as BaseResource[])] as BaseResource[]);
		},
	});
	const { data: bookData, error: bookError } = useQuery(ALL_BOOKS_QUERY, {
		onCompleted: (data) => {
			setAllDataArray((prev) => [...prev, ...(data?.books as BaseResource[])] as BaseResource[]);
		},
	});

	const { data: podcastData, error: podcastError } = useQuery(ALL_PODCASTS_QUERY, {
		onCompleted: (data) => {
			setAllDataArray((prev) => [...prev, ...(data?.podcasts as BaseResource[])] as BaseResource[]);
		},
	});
	const { data: videoData, error: videoError } = useQuery(ALL_VIDEOS_QUERY, {
		onCompleted: (data) => {
			setAllDataArray((prev) => [...prev, ...(data?.videos as BaseResource[])] as BaseResource[]);
		},
	});

	if (error || bookError || podcastError || videoError) {
		return <p>{error?.message || bookError?.message || podcastError?.message || videoError?.message}</p>;
	}

	return (
		<PageContainer style={{ overflow: 'scroll', scrollbarWidth: 'none', flexDirection: 'column' }}>
			<AnnouncementContainer>
				<p>
					Hier findet ihr Infos und hilfreiche Tips in Sachen Aktivismus - Gruppierungen, Bücher, Videomaterial und
					Podcasts
				</p>
				<Link to='/'>
					<MdKeyboardDoubleArrowLeft size={25} style={{ color: 'black' }} />
				</Link>
			</AnnouncementContainer>

			<MasonryContainer className='images'>
				<ResponsiveMasonry columnsCountBreakPoints={{ 250: 1, 400: 2, 900: 4 }}>
					<RessourceMasonryStyles gutter='10px'>
						{allDataArray.length > 0 &&
							allDataArray.map((item) => (
								<ResourceCardComponent
									key={item.id}
									url={item.url as string}
									image={item?.thumbnail?.image?.publicUrlTransformed as string}
									name={item.name as string}
									description={item.description as string}
									author={item.author as string}
								/>
							))}
					</RessourceMasonryStyles>
				</ResponsiveMasonry>
			</MasonryContainer>
		</PageContainer>
	);
}
