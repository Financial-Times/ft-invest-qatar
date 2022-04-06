import Image from 'next/image';
import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	position: relative;
	display: block;
	width: 100%;
	padding-bottom: 60%;
	margin-bottom: 16px;

	@media ${device.tablet} {
		padding-bottom: 30%;
		margin-bottom: 24px;
	}

	img {
		object-fit: cover;
		object-position: center center;
	}
`;

const ArticleHero = ({ data }) => {
	return (
		<Container>
			<Image src={data} layout="fill" alt="HeroImage" />
		</Container>
	);
};

export default ArticleHero;
