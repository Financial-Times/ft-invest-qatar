import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import { device } from '~/config/utils';

const Container = styled.div`
	display: flex;
	background-color: #f8f8f8;
	margin-bottom: 100px;

	&:nth-child(odd) {
		background-color: red;
	}

	&:nth-child(even) {
		background-color: green;
	}
`;

const Content = styled.div`
	max-width: 34%;
	flex-basis: 34%;
	position: relative;
	padding: 50px;
`;

const ImageContainer = styled.div`
	max-width: 66%;
	flex-basis: 66%;
	position: relative;
	padding-bottom: 40.67%;

	margin-right: 50px;

	span {
		overflow: initial !important;
	}

	img {
		object-fit: cover;
		object-position: center center;
		top: -25% !important;
		width: calc(100% - 50px) !important;
	}
`;

const ContentTopicWrapper = styled.div``;
const ContentTopic = styled.div``;
const ContentReadTime = styled.div``;
const ContentWrapper = styled.div``;
const ContentTitle = styled.div``;
const ContentDesc = styled.div``;
const ContentCta = styled.div``;

const ArticleItem = ({ data }) => {
	return (
		<Container>
			<Content>
				<ContentTopicWrapper>
					<ContentTopic>Topic goes here</ContentTopic>
					<ContentReadTime></ContentReadTime>
				</ContentTopicWrapper>
				<ContentWrapper>
					<ContentTitle>{data.metaData.title}</ContentTitle>
					<ContentDesc>{data.metaData.desc}</ContentDesc>
					<ContentCta>
						<Link href={`/article/`} passHref>
							<a>CTA goes here</a>
						</Link>
					</ContentCta>
				</ContentWrapper>
			</Content>
			<ImageContainer>
				<Image
					src={data.metaData.articleImage}
					layout="fill"
					alt="articleImage"
				/>
			</ImageContainer>
		</Container>
	);
};

export default ArticleItem;
