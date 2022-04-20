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
`;

const ImageEl = ({ data }) => {
	return (
		<Container>
			<Parallax strength={300}>
				<Background className="custom-bg">
					<Img src={data.src} alt="parImage" layout="fill" />
				</Background>
			</Parallax>
		</Container>
	);
};

export default ImageEl;
