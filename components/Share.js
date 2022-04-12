import styled from 'styled-components';
import fb from '~/assets/fb.svg';
import insta from '~/assets/insta.svg';
import tw from '~/assets/tw.svg';
import yt from '~/assets/yt.svg';
import { device } from '~/config/utils';

const Container = styled.div`
	background-color: #b79769;
	padding: 0 10px;
`;
const TopWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	padding: 20px 0;
	position: relative;

	&:after {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		max-width: 1200px;
		width: 100%;
		height: 1px;
		background-color: white;
	}
`;
const TopWrapperTitle = styled.div`
	line-height: 1;
	display: grid;
	place-content: center;
	color: white;
	font-family: 'Lora', serif;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 16px;
	margin-right: 5px;
	letter-spacing: 1px;
`;

const TopWrapperButton = styled.button`
	background-color: transparent;
	position: relative;
	border: none;
	cursor: pointer;

	.buttonArrow {
		position: absolute;
		top: 49%;
		right: 50%;
		z-index: 2;
		transform: translate(50%, -50%) rotate(-90deg);
	}
`;
const ShareIconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	padding: 50px 0;
	flex-direction: column;

	@media ${device.tablet} {
		flex-direction: row;
		font-size: 22px;
	}
`;

const ShareWrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	@media ${device.tablet} {
		justify-content: space-between;
		align-items: center;
	}
`;
const ShareLogo = styled.div`
	padding-top: 50px;
	text-align: center;
`;

const ShareTitle = styled.div`
	color: white;
	font-family: 'Lora', serif;
	font-size: 24px;
	line-height: 1.5;
	text-align: center;

	@media ${device.tablet} {
		margin-right: 15px;
	}
`;
const ShareIconContainer = styled.div`
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	a {
		margin-right: 15px;
		display: grid;
	}
`;
const ShareImage = styled.img`
	&:hover {
		transform: scale(1.2);
	}
`;

const shareIcons = [
	{
		link: 'https://www.facebook.com/InvestQatar',
		src: fb.src,
	},
	{
		link: 'https://www.instagram.com/investqatar',
		src: insta.src,
	},
	{
		link: 'https://twitter.com/Investqa',
		src: tw.src,
	},
	{
		link: 'https://www.linkedin.com/company/investqatar/',
		src: yt.src,
	},
];

const Share = () => {
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}
	return (
		<Container>
			<TopWrapper>
				<TopWrapperTitle>Back to top</TopWrapperTitle>
				<TopWrapperButton onClick={scrollToTop}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						viewBox="0 0 40 40"
					>
						<g id="btn-next" transform="translate(0 40) rotate(-90)">
							<circle
								id="Ellipse_12"
								data-name="Ellipse 12"
								cx="20"
								cy="20"
								r="20"
								fill="#fff"
							/>
						</g>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="7"
						height="11.328"
						viewBox="0 0 7 11.328"
						className={'buttonArrow'}
					>
						<g id="Group_57" data-name="Group 57" transform="translate(0 607)">
							<path
								id="Path_12"
								data-name="Path 12"
								d="M50.243,0,48.907,1.336l4.328,4.328L48.907,9.993l1.336,1.336,5.664-5.664Z"
								transform="translate(-48.907 -607)"
								fill="#707070"
							/>
						</g>
					</svg>
				</TopWrapperButton>
			</TopWrapper>
			<ShareWrapper>
				<ShareIconWrapper>
					<ShareTitle>Follow Invest Qatar</ShareTitle>
					<ShareIconContainer>
						{shareIcons.map((icon, i) => {
							return (
								<a key={i} href={icon.link}>
									<ShareImage src={icon.src} alt="share icon" />
								</a>
							);
						})}
					</ShareIconContainer>
				</ShareIconWrapper>
			</ShareWrapper>
		</Container>
	);
};

export default Share;
