import { graphql } from 'gql.tada';

export const ALL_IMAGES_QUERY = graphql(`
	query ALL_IMAGES_QUERY($where: ImageWhereInput!) {
		images(where: $where) {
			image {
				publicUrlTransformed
			}
			alt
			id
		}
	}
`);

export const ALL_EVENTS_QUERY = graphql(`
	query ALL_EVENTS_QUERY($orderBy: [EventOrderByInput!]!) {
		events(orderBy: $orderBy) {
			id
			title
			date
			from
			until
			pastEvent
			location
			content {
				document
			}
			timestamp
		}
	}
`);
