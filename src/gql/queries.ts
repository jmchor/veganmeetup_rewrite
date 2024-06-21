import { graphql } from 'gql.tada';

export const ALL_IMAGES_QUERY = graphql(`
	query ImageQuery($where: ImageWhereInput!) {
		images(where: $where) {
			image {
				publicUrlTransformed
			}
			alt
		}
	}
`);
