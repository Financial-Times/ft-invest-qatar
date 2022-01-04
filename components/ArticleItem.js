import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { device } from "~/config/utils";

const Container = styled.div`
  display: flex;
  background-color: #f8f8f8;
  margin-bottom: 100px;
  &:nth-child(odd) {
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const Content = styled.div`
  position: relative;
  padding: 30px;

  @media ${device.tablet} {
    max-width: 45%;
    flex-basis: 45%;
  }
}

  [data-even="false"] & {
    padding-left: 95px;
  }
`;

const ImageContainer = styled.div`
  max-width: 55%;
  flex-basis: 55%;
  position: relative;
  padding-bottom: 40.67%;
  margin-right: 45px;

  [data-even="false"] & {
    margin-right: -45px;
  }

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

const ContentTopicWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-family: "Lora", serif;
  font-size: 10px;
  padding-bottom: 10px;

  @media ${device.tablet} {
    margin-bottom: 30px;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #707070;
  }
`;

const ContentTopic = styled.div`
  font-weight: 700;
  color: #8a1538;
  text-transform: uppercase;
`;
const ContentReadTime = styled.div`
  color: #333333;
`;

const ContentWrapper = styled.div`
  min-height: 220px;
`;

const ContentTitle = styled.div`
  font-family: "Lora", serif;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 600;
  color: #333333;
  margin-bottom: 30px;

  @media ${device.tablet} {
    font-size: 18px;
  }

  @media ${device.laptop} {
    font-size: 36px;
  }
`;
const ContentDesc = styled.div`
  font-family: "Lora", serif;
  line-height: 1.2;

  @media ${device.tablet} {
    font-size: 14px;
  }

  @media ${device.laptop} {
    font-size: 18px;
  }
`;
const ContentCta = styled.div`
  position: absolute;
  bottom: 5px;
  right: 50%;
  transform: translateX(50%);
  background-color: #8a1538;
  padding: 10px 15px;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${device.laptop} {
    padding: 20px 25px;
  }
`;

const ArticleItem = ({ data, pos }) => {
  function CheckInt(i) {
    return i % 2 === 0;
  }

  return (
    <Container data-even={CheckInt(pos)}>
      <Content>
        <ContentTopicWrapper>
          <ContentTopic>Topic goes here</ContentTopic>
          <ContentReadTime>
            {data.metaData.hasVideo ? "Watch" : "Read"} time: {data.time}{" "}
            minutes
          </ContentReadTime>
        </ContentTopicWrapper>
        <ContentWrapper>
          <ContentTitle>{data.metaData.title}</ContentTitle>
          <ContentDesc>{data.metaData.desc}</ContentDesc>
          <ContentCta>
            <Link href={`/article/`} passHref>
              <a>
                CTA goes here
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.549"
                    height="12"
                    viewBox="0 0 17.549 12"
                  >
                    <path
                      id="Path_543"
                      data-name="Path 543"
                      d="M6.643,17.291,11.734,12.2a.9.9,0,1,0-1.278-1.278L6.909,14.468V.909a.909.909,0,0,0-1.818,0V14.461L1.544,10.914A.9.9,0,0,0,.266,12.192l5.091,5.091a.919.919,0,0,0,1.286.007Z"
                      transform="translate(0 12) rotate(-90)"
                      fill="#fff"
                    />
                  </svg>
                </>
              </a>
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
