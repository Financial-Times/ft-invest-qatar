import Link from 'next/link';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { device } from '~/config/utils';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const RelatedContainer = styled.div`
	width: 100%;
	padding: 70px 20px 30px 20px;
	margin-bottom: 30px;
	position: relative;
	overflow: hidden;
`;

const RelatedSwiper = styled.div`
	max-width: 1220px;
	margin: 0 auto;
`;

const RelatedSlide = styled.div`
	position: relative;
	overflow: hidden;

	a {
		position: absolute;
		height: 100%;
		width: 100%;
		&:before {
			content: '';
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
			right: 0;
			background-color: rgb(248 151 18);
			opacity: 0;
			z-index: 1;
			transition: opacity 0.5s ease-in;
		}
	}

	&:after {
		content: '';
		display: block;
		padding-bottom: 120%;
	}
`;

const RelatedSlideImage = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	object-fit: cover;
	object-position: center center;
`;

const RelatedSlideTitle = styled.div`
	position: absolute;
	bottom: 14%;
	color: white;
	width: 75%;
	text-align: center;
	right: 50%;
	transform: translate(50%, 0px);
	z-index: 3;
	font-family: 'Open Sans', sans-serif;
	font-size: 20px;
	line-height: 1.2;
	font-weight: 600;
	transition: opacity 0.5s ease-in, bottom 0.5s cubic-bezier(0.2, 0.8, 0.2, 0.8);
`;
const RelatedSlideDesc = styled.div`
	position: absolute;
	bottom: 5%;
	color: white;
	width: 75%;
	text-align: center;
	right: 50%;
	transform: translate(50%, 0px);
	z-index: 2;
	font-family: 'Open Sans', sans-serif;
	font-size: 12px;
	line-height: 1.2;
	font-weight: 700;
	opacity: 0;
`;

const SwiperPagination = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 0;

	.swiper-pagination-bullet {
		height: 10px;
		width: 35px;
		border-radius: 10px;
		margin: 0 5px;
		background-color: #f8971d;
		opacity: 0.8;
		transition: width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	.swiper-pagination-bullet-active {
		background-color: #009b3a;
		width: 55px;
		transition: width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
`;

const RelatedIconContainer = styled.div`
	position: absolute;
	top: 50%;
	right: 0;
	width: 50px;
	height: 50px;
	transform: translate(0%, -50%);

	@media ${device.tablet} {
		bottom: -20px;
		top: initial;
		right: 50%;
		transform: translate(50%, 50%);
		z-index: 5;
		opacity: 0;
	}
`;
const RelatedTitle = styled.div`
	font-family: 'Open Sans', sans-serif;
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
const RelatedSubtitle = styled.div`
	font-family: 'Open Sans', sans-serif;
	font-weight: 700;
	color: #009b3a;
	text-align: center;
	line-height: 1;
	font-size: 14px;
	text-transform: uppercase;
	margin-bottom: 10px;
`;

const RelatedHexContainer = styled.div`
	background-color: transparent;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;

	svg {
		width: 50px;
		height: 50px;

		@media ${device.tablet} {
			width: initial;
			height: initial;
		}
	}
`;

const Related = ({ data }) => {
	return (
		<RelatedContainer>
			<RelatedSubtitle>The Evolution of Growth</RelatedSubtitle>
			<RelatedTitle>Related Content</RelatedTitle>
			<RelatedSwiper>
				<Swiper
					spaceBetween={10}
					pagination={{
						el: '.swiper-pagination',
						clickable: true,
					}}
					breakpoints={{
						960: {
							slidesPerView: 3,
							spaceBetween: 10,
						},
						720: {
							slidesPerView: 3,
							spaceBetween: 10,
						},
						540: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						320: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
					}}
				>
					{data.map((slide, i) => (
						<SwiperSlide key={i}>
							<RelatedSlide>
								<Link href={`/article/`}>
									<a>
					
									</a>
								</Link>
							</RelatedSlide>
						</SwiperSlide>
					))}
				</Swiper>
			</RelatedSwiper>
			<SwiperPagination>
				<div className="swiper-pagination"></div>
			</SwiperPagination>
		</RelatedContainer>
	);
};

export default Related;
