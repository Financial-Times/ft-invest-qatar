import Image from 'next/image';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	margin: 40px 0;
	.react-parallax {
		padding-bottom: 100%;

		@media ${device.laptop} {
			padding-bottom: 60%;
		}

		@media ${device.laptopM} {
			padding-bottom: 40%;
		}

		display: block;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}
	.custom-bg {
		position: relative;
	}
`;

const Img = styled.img`
	object-fit: cover;
	object-position: center center;
	&[alt='mobile'] {
		object-fit: contain;
		width: 100%;
	}
`;

const MobileContainer = styled.div`
	display: block;
	@media ${device.tablet} {
		display: none;
	}
`;
const DesktopContainer = styled.div`
	display: none;

	@media ${device.tablet} {
		display: block;
	}
`;

const ImageEl = ({ data }) => {
	return (
		<Container>
			<MobileContainer>
				<Img src={data.src} alt="mobile" layout="fill" />
			</MobileContainer>
			<DesktopContainer>
				<Parallax strength={300}>
					<Background className="custom-bg">
						<Img src={data.src} alt="parImage" layout="fill" />
					</Background>
				</Parallax>
			</DesktopContainer>
		</Container>
	);
};

export default ImageEl;
