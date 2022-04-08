import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import { device } from '~/config/utils';

const ContentCta = styled.div`
	background-color: #8a1538;
	padding: 10px 15px;
	display: table;
	margin: 0 auto;
	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 13px;
		color: white;
	}

	svg {
		margin-top: 5px;
		transition: all 0.5s ease;
	}

	@media ${device.tablet} {
		display: initial;
		margin: initial;
		position: absolute;
		bottom: 5px;
		transform: translateX(50%);

		[data-even='false'] & {
			right: 40%;
		}

		[data-even='true'] & {
			right: 50%;
		}
	}
	@media ${device.laptop} {
		padding: 20px 25px;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column-reverse;
	margin-bottom: 40px;

	&:nth-child(odd) {
	}

	@media ${device.tablet} {
		flex-direction: row;
		margin-bottom: 100px;
		background-color: #f8f8f8;

		&:nth-child(even) {
			flex-direction: row-reverse;
		}
	}

	&:hover {
		img[alt='articleImage'] {
			top: 0 !important;
			transform: scale(1.2);
			transition: top 0.3s ease-in-out, transform 0.3s 0.5s ease-in-out;
		}

		${ContentCta} {
			svg {
				transform: translate(20px);
				transition: all 0.5s ease;
			}
		}
	}
`;

const Content = styled.div`
	position: relative;
	padding: 15px;
	max-width: 100%;
	flex-basis: 100%;
	background-color: #f8f8f8;

	&:after {
		content: '';
		display: block;
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: #f8f8f8;
		top: -20%;
		z-index: -1;
		left: 0;
	}

	@media ${device.tablet} {
		max-width: 45%;
		flex-basis: 45%;
		padding: 30px;

		&:after {
			display: none;
		}
		[data-even='false'] & {
			padding-left: 75px;
		}
	}

	@media ${device.laptop} {
		[data-even='false'] & {
			padding-left: 95px;
		}
	}
`;

const ImageContainer = styled.div`
	max-width: 55%;
	flex-basis: 100%;
	position: relative;
	right: -50%;
	transform: translateX(-50%);
	padding-bottom: 40.67%;
	overflow: hidden;

	@media ${device.tablet} {
		flex-basis: 55%;
		margin-right: 45px;
		right: initial;
		transform: initial;

		[data-even='false'] & {
			margin-right: -45px;
		}
	}

	span {
		overflow: initial !important;
	}

	img {
		object-fit: cover;
		object-position: center center;
		max-width: 55% !important;
		@media ${device.tablet} {
			top: -25% !important;
			width: calc(100% - 50px) !important;
			transition: top 0.5s ease-in-out;
		}
	}
`;

const ContentTopicWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: 'Lora', serif;
	font-size: 10px;
	padding-left: 20px;
	padding-bottom: 10px;
	background-color: #f8f8f8;
	margin-bottom: 15px;

	&:before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		top: -5px;
		width: 0;
		height: 0;
		border-top: 12px solid transparent;
		border-bottom: 12px solid transparent;
		border-left: 12px solid #8a1538;
		transform: rotate(315deg);
	}

	@media ${device.tablet} {
		margin-bottom: 30px;
		background-color: transparent;
	}

	&:after {
		content: '';
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
	min-height: 280px;

	@media ${device.laptop} {
		min-height: 220px;
	}
`;

const ContentTitle = styled.div`
	font-family: 'Lora', serif;
	font-size: 28px;
	line-height: 1.2;
	font-weight: 500;
	color: #333333;
	margin-bottom: 30px;

	@media ${device.tablet} {
		font-size: 18px;
		font-weight: 600;
	}

	@media ${device.laptop} {
		font-size: 36px;
	}
`;
const ContentDesc = styled.div`
	font-family: 'Lora', serif;
	line-height: 1.2;
	margin-bottom: 20px;

	@media ${device.tablet} {
		font-size: 14px;
	}

	@media ${device.laptop} {
		font-size: 18px;
	}
`;

const PlayButton = styled.div`
	position: absolute;
	top: 50%;
	right: 50%;
	border-radius: 50%;
	backdrop-filter: blur(7px);
	display: grid;
	place-content: center;
	color: white;
	transform: translate(50%, -70%);
	text-transform: uppercase;
	cursor: pointer;

	@media ${device.laptop} {
		height: 145px;
		width: 145px;
		font-size: 18px;
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
						{data.metaData.hasVideo ? 'Watch' : 'Read'} time: {data.time}{' '}
						minutes
					</ContentReadTime>
				</ContentTopicWrapper>
				<ContentWrapper>
					<ContentTitle>{data.metaData.title}</ContentTitle>
					<ContentDesc>{data.metaData.desc}</ContentDesc>
				</ContentWrapper>
				<ContentCta>
					<Link href={`/article/${data.id}`} passHref>
						<a>
							Read More
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
			</Content>
			<ImageContainer>
				<Image
					src={data.metaData.articleImage}
					layout="fill"
					alt="articleImage"
				/>
				{data.metaData.hasVideo ? (
					<Link href={`/article/${data.id}`} passHref>
						<PlayButton>Play</PlayButton>
					</Link>
				) : null}
			</ImageContainer>
		</Container>
	);
};

export default ArticleItem;
