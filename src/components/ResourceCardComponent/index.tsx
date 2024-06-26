import { CardContainer, Lower, Upper } from './styles.js';

const ResourceCardComponent = ({
	url,
	image,
	name,
	description,
	author,
}: {
	url: string;
	image: string;
	name: string;
	description?: string;
	author?: string;
}) => {
	return (
		<CardContainer style={{}}>
			<Upper>{<img src={image} alt='image' />}</Upper>
			<Lower>
				<a href={url}>
					<h1>{name}</h1>
				</a>

				{author && <i>von {author}</i>}

				{description && <p>{description}</p>}
			</Lower>
		</CardContainer>
	);
};
export default ResourceCardComponent;
