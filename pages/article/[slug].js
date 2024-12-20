import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Script from 'next/script';

import styled from 'styled-components';

import FtAnalytics from '~/config/FtAnalytics';
import FtEvents from '~/config/FtEvents';
import { ARTICLE_URL, device } from '~/config/utils';
import ArticleHero from '~/components/ArticleHero';
import BreadCrumbs from '~/components/Breadcrumbs';
import ArticleInfo from '~/components/ArticleInfo';
import Content from '~/components/Content';
import Quote from '~/components/Quote';
import QuoteAlt from '~/components/QuoteAlt';
import PullOut from '~/components/PullOut';
import VideoEl from '~/components/Video';
import CTA from '~/components/CTA';
import Related from '~/components/Related';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Share from '~/components/Share';
import Metadata from '~/components/Metadata';
import Logo from '~/components/Logo';
import ImageEl from '~/components/ImageEl';

gsap.registerPlugin(ScrollTrigger);

const TitleContainer = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	overflow: hidden;
	@media ${device.tablet} {
	}
`;

const ArticleTitle = styled.h1`
	text-align: left;
	padding: 0 10px;
	@media ${device.tablet} {
		text-align: center;
		transform: translateX(-70vw);
	}
`;
const ArticleStandFirst = styled.div`
	font-weight: 500;
	max-width: 864px;
	margin: 0 auto;
	line-height: 1.5;
	padding: 0 10px;
	font-size: 16px;

	@media ${device.tablet} {
		font-size: 28px;
		padding: initial;
		transform: translateX(70vw);
		padding: 0 10px;
	}
`;

export default function ArticlePage({ post, related }) {
	const containerRef = useRef();
	const titleRef = useRef();
	const descRef = useRef();

	useEffect(() => {
		FtEvents();
		FtAnalytics();
	});

	useEffect(() => {
		const hasConsentedToBehaviouralAds = () => {
			const consentValue = getCookieValue('FTConsent');
			return consentValue && consentValue.includes('behaviouraladsOnsite:on');
		};

		const getCookieValue = (cookieKey) => {
			const re = new RegExp(`${cookieKey}=([^;]+)`);
			const match = document.cookie.match(re);
			if (!match) {
				return false;
			}
			return decodeURIComponent(match[1]);
		};

		window.addEventListener('load', function () {
			console.log('loaded');
			if (hasConsentedToBehaviouralAds()) {
				permutive.consent({ opt_in: true, token: 'behaviouraladsOnsite:on' });
			} else {
				const cookieContainer = document.querySelector('.o-cookie-message');
				const cookieButton =
					cookieContainer &&
					document.querySelector('.o-cookie-message__button');
				console.log(cookieButton);
				cookieButton.addEventListener('click', (e) => {
					permutive.consent({ opt_in: true, token: 'behaviouraladsOnsite:on' });
				});
			}
		});
	}, []);

	useEffect(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				pin: false,
				start: () => '-20% 50%',
				end: () => '200% bottom',
				markers: false,
				scrub: 1,
				anticipatePin: 1,
			},
		});

		tl.to(titleRef.current, { x: 0 }, 'label').to(
			descRef.current,
			{ x: 0 },
			'label=-1'
		);
	}, []);

	return (
		<>
			<Head>
				<title>{post.metaData.title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<Metadata data={post.metaData} />
				<Script
					dangerouslySetInnerHTML={{
						__html: `
          !function (n, e, o, r, i) { if (!e) { e = e || {}, window.permutive = e, e.q = [], e.config = i || {}, e.config.projectId = o, e.config.apiKey = r, e.config.environment = e.config.environment || "production"; for (var t = ["addon", "identify", "track", "trigger", "query", "segment", "segments", "ready", "on", "once", "user", "consent"], c = 0; c < t.length; c++) { var f = t[c]; e[f] = function (n) { return function () { var o = Array.prototype.slice.call(arguments, 0); e.q.push({ functionName: n, arguments: o }) } }(f) } } }(document, window.permutive, "e1c3fd73-dd41-4abd-b80b-4278d52bf7aa", "b2b3b748-e1f6-4bd5-b2f2-26debc8075a3", { "consentRequired": true });
          window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push(function () { if (0 === window.googletag.pubads().getTargeting("permutive").length) { var g = window.localStorage.getItem("_pdfps"); window.googletag.pubads().setTargeting("permutive", g ? JSON.parse(g) : []) } });
          window.permutive.addon('web', {
            page: {
              type: 'Partner Content ${
								post.metaData.hasVideo ? 'Video' : 'Article'
							}',
            }
          });`,
					}}
				></Script>
				<Script
					async
					src="https://e1c3fd73-dd41-4abd-b80b-4278d52bf7aa.edge.permutive.app/e1c3fd73-dd41-4abd-b80b-4278d52bf7aa-web.js"
				></Script>
			</Head>
			<ArticleHero data={post.metaData.articleImage} />
			<BreadCrumbs data={post.metaData.title} />
			<TitleContainer ref={containerRef}>
				<ArticleTitle ref={titleRef}>{post.metaData.title}</ArticleTitle>
				<ArticleStandFirst ref={descRef}>
					{post.metaData.desc}
				</ArticleStandFirst>
			</TitleContainer>
			<ArticleInfo
				data={{ date: post.metaData.publicationDate, time: post.time }}
			/>
			<main className="main" id="content">
				{post.content.map((el) => {
					switch (el.type) {
						case 'content':
							return <Content key={el.id} id={el.id} data={el.data} />;
						case 'quote':
							return <Quote key={el.id} data={el.data} id={el.id} />;
						case 'quotealt':
							return <QuoteAlt key={el.id} data={el.data} id={el.id} />;
						case 'pullOut':
							return <PullOut key={el.id} data={el.data} id={el.id} />;
						case 'video':
							return <VideoEl key={el.id} data={el.data} />;
						case 'cta':
							return <CTA key={el.id} data={el.data} />;
						case 'image':
							return <ImageEl key={el.id} data={el.data} />;
					}
				})}
			</main>
			<Related data={related} />
			<Logo />
			<Share />
		</>
	);
}

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};

export async function getStaticProps({ params }) {
	const results = await fetch(ARTICLE_URL);
	const articles = await results.json();

	const post = articles.find((article) => article.id === params.slug);
	const related = articles.filter((article) => {
		return article.id != params.slug;
	});

	return {
		props: { post, related },
	};
}
