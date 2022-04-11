import { useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Metadata from '~/components/Metadata';
import { ARTICLE_URL, device } from '~/config/utils';
import FtAnalytics from '~/config/FtAnalytics';
import FtEvents from '~/config/FtEvents';
import ArticleItem from '~/components/ArticleItem';
import HeroImage from '~/components/HeroImage';
import Share from '~/components/Share';

const ArticleContainer = styled.div`
	max-width: 1220px;
	padding: 5px;
	margin: 0 auto;
	@media ${device.tablet} {
		padding: 100px 20px;
	}
`;

const ArticleWrapper = styled.div``;
const ArticleTitle = styled.div`
	text-align: center;
	font-size: 36px;
	line-height: 1.3;
	margin-bottom: 40px;
	@media ${device.tablet} {
		font-size: 50px;
		margin-bottom: 0;
	}
`;

export default function Home({ articleData }) {
	useEffect(() => {
		FtEvents();
		FtAnalytics();
	}, []);

	const metaData = {
		title: 'Qatar: The Next Chapter',
		desc: 'As it diversifies from its economy and aspires to become a hub for foreign investors and expats, what does the future look like for the Middle East’s most prosperous nation?',
		contentType: 'article',
		publicationDate: '2022-03-31',
		campaignName: 'Zenith Master of Chronograph',
		advertiserName: 'Zenith',
		primaryIndustryAdvertiser: 'Watches & Jewellery',
		contentAuthor: 'external',
		brandedContent: true,
		contentStyle: 'brand focussed',
		primaryTopic: 'Life_&_Arts',
		secondaryTopic: 'Style',
		adbookId: 354073,
		hasVideo: true,
		videoStyle: 'feature',
		pageDesignType: 'bespoke',
		articleImage: 'https://www.ft.com/partnercontent/zenith/poster.jpg',
		articleUrl: 'https://investqatar.ft.com/',
	};

	return (
		<>
			<Head>
				<title>{metaData.title} - Financial Times</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<Metadata data={metaData} />
			</Head>
			<HeroImage
				title={'Qatar: The Next Chapter'}
				subtitle={
					'As it diversifies from its economy and aspires to become a hub for foreign investors and expats, what does the future look like for the Middle East’s most prosperous nation?'
				}
			/>
			<main className="main" id="content">
				<ArticleWrapper>
					<ArticleTitle>Explore our content</ArticleTitle>
				</ArticleWrapper>
				<ArticleContainer>
					{articleData.map((article, i) => {
						return <ArticleItem key={i} data={article} pos={i} />;
					})}
				</ArticleContainer>
			</main>
			<Share />
		</>
	);
}

export async function getStaticProps(context) {
	const fetchArticles = await fetch(ARTICLE_URL);

	const articleData = await fetchArticles.json();

	return {
		props: { articleData },
	};
}
