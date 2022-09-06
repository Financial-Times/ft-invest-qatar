import Link from 'next/link';
import Image from 'next/image';

import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { device } from '~/config/utils';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const RelatedContainer = styled.div`
	width: 100%;
	padding: 70px 20px 30px 20px;
	margin-bottom: 30px;
`;

const RelatedSwiper = styled.div`
	max-width: 1220px;
	margin: 0 auto;
`;

const RelatedSlide = styled.div``;

const SwiperPagination = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 50px 0;
	position: relative;

	.swiper-pagination-bullet {
		height: 10px;
		width: 14px;
		border-radius: 10px;
		margin: 0 5px;
		background-color: #b79769;
		opacity: 0.8;
		transition: width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	.swiper-pagination-bullet-active {
		height: 10px;
		width: 21px;
		background-color: #8a1538;
		transition: width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.swiper-button-next,
	.swiper-button-prev {
		width: 55px;
		height: 55px;
		border: 1px solid #636364;
		border-radius: 100%;

		&:after {
			font-size: 15px;
			color: #636364;
		}
	}

	.swiper-button-prev {
	}
`;

const RelatedTitle = styled.div`
	font-weight: 700;
	font-size: 30px;
	color: #404545;
	text-align: center;
	line-height: 1;
	margin-bottom: 50px;
	letter-spacing: 1px;

	@media ${device.tablet} {
		font-size: 40px;
	}
`;

const RelatedWrapper = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	position: relative;
	overflow: hidden;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const ImageContainer = styled.div`
	display: block;
	position: relative;
	padding-bottom: 60%;
	overflow: hidden;

	&:hover {
		img {
			transform: scale(1.2);
			transition: transform 0.5s ease-in-out;
		}
	}

	img {
		object-fit: cover;
		object-position: center center;
		transition: transform 0.5s ease-in-out;
	}
`;

const ContentContainer = styled.div`
	padding: 30px;
	background-color: #8a1538;
`;

const Title = styled.div`
	font-weight: 500;
	color: white;
	font-family: 'Lora', serif;
	font-size: 26px;
	line-height: 1.2;
	min-height: 94px;
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
		border-left: 12px solid white;
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
		background-color: white;
	}
`;

const ContentTopic = styled.div`
	font-weight: 700;
	color: white;
	text-transform: uppercase;
`;

const Related = ({ data }) => {
	return (
		<RelatedContainer>
			<RelatedTitle>Related Content</RelatedTitle>
			<RelatedWrapper>
				<RelatedSwiper>
					<Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						spaceBetween={10}
						pagination={{
							el: '.swiper-pagination',
							clickable: true,
						}}
						navigation={{
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						}}
						breakpoints={{
							1024: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 1,
							},
							0: {
								slidesPerView: 1,
							},
						}}
					>
						{data.map((slide, i) => (
							<SwiperSlide key={i}>
								<RelatedSlide>
									<Link
										href={
											slide.hosted
												? slide.metaData.articleUrl
												: `/article/${data.id}`
										}
									>
										<a>
											<Container>
												<ImageContainer>
													<Image
														src={slide.metaData.articleImage}
														alt="slideImage"
														layout="fill"
													/>
												</ImageContainer>
												<ContentContainer>
													<ContentTopicWrapper>
														<ContentTopic>{slide.topic}</ContentTopic>
													</ContentTopicWrapper>
													<Title>{slide.metaData.title}</Title>
												</ContentContainer>
											</Container>
										</a>
									</Link>
								</RelatedSlide>
							</SwiperSlide>
						))}
					</Swiper>
				</RelatedSwiper>
				<SwiperPagination>
					<div className="swiper-pagination"></div>
					<div className="swiper-button-next" />
					<div className="swiper-button-prev" />
				</SwiperPagination>
			</RelatedWrapper>
		</RelatedContainer>
	);
};

export default Related;
