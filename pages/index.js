import { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";

import Metadata from "~/components/Metadata";
import { ARTICLE_URL, FEATURED_URL, HOMEPAGE_URL } from "~/config/utils";
import { device } from "~/config/utils";
import FtAnalytics from "~/config/FtAnalytics";
import FtEvents from "~/config/FtEvents";
import ArticleItem from "~/components/ArticleItem";
import HeroImage from "~/components/HeroImage";
import Share from "~/components/Share";

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
  @media ${device.tablet} {
    font-size: 50px;
  }
`;

export default function Home({ articleData }) {
  useEffect(() => {
    FtEvents();
    FtAnalytics();
  }, []);

  return (
    <>
      <Head>
        <title></title>
        <Metadata title={true} data={null} />
      </Head>
      <HeroImage
        title={"Title goes here"}
        subtitle={"Standfirst goes here"}
        imgSrc={"https://picsum.photos/1920/1080"}
      />
      <ArticleWrapper>
        <ArticleTitle>Explore our content</ArticleTitle>
      </ArticleWrapper>
      <ArticleContainer>
        {articleData.map((article, i) => {
          return <ArticleItem key={i} data={article} pos={i} />;
        })}
      </ArticleContainer>
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
