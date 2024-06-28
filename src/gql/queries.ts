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

export const SINGLE_EVENT_QUERY = graphql(`
	query SINGLE_EVENT_QUERY($where: EventWhereUniqueInput!) {
		event(where: $where) {
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
			headerImage {
				image {
					publicUrlTransformed
				}
			}
		}
	}
`);

export const ALL_ACTIVISTS_QUERY = graphql(`
	query ALL_ACTIVISTS_QUERY {
		activists {
			id
			url
			thumbnail {
				image {
					publicUrlTransformed
				}
			}
			name
			description
		}
	}
`);

export const ALL_BOOKS_QUERY = graphql(`
	query ALL_BOOKS_QUERY {
		books {
			id
			author
			name
			description
			thumbnail {
				image {
					publicUrlTransformed
				}
			}
			url
		}
	}
`);

export const ALL_VIDEOS_QUERY = graphql(`
	query ALL_VIDEOS_QUERY {
		videos {
			id
			name
			url
			description
			thumbnail {
				image {
					publicUrlTransformed
				}
			}
		}
	}
`);

export const ALL_PODCASTS_QUERY = graphql(`
	query ALL_PODCASTS_QUERY {
		podcasts {
			url
			thumbnail {
				image {
					publicUrlTransformed
				}
			}
			name
			id
			description
		}
	}
`);
