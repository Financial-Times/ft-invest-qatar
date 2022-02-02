import Image from "next/image";
import styled from "styled-components";
import { device } from "~/config/utils";

const Container = styled.div`
  position: relative;
`;
const ImageWrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 110px);

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  img {
    object-fit: cover;
    object-position: center center;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  z-index: 2;
  color: white;
  transform: translate(50%, -50%);
  font-family: "Lora", serif;
  width: 80%;
  text-align: center;
`;
const Title = styled.div`
  line-height: 1;
  font-weight: bold;
  @media ${device.tablet} {
    font-size: 76px;
    margin-bottom: 30px;
  }
`;
const SubTitle = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  @media ${device.tablet} {
    font-size: 22px;
  }
`;

const HeroImage = ({ imgSrc, title, subtitle }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image layout={"fill"} src={imgSrc} />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Content>
    </Container>
  );
};

export default HeroImage;
