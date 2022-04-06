import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	width: 100%;
	max-width: 864px;
	margin: 48px auto;
	padding: 0 10px;

	@media ${device.tablet} {
		margin: 96px auto;
		padding: initial;
	}
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media ${device.tablet} {
	}
`;

const DateContainer = styled.div`
	font-size: 20px;
	color: #8a1538;
`;

const TimeContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		margin-right: 5px;
	}
`;

const ArticleInfo = ({ data }) => {
	const { date, time } = data;
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	function returnDate(date) {
		const d = new Date(date);
		return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
	}

	return (
		<Container>
			<Wrapper>
				<DateContainer>{returnDate(date)}</DateContainer>
				<TimeContainer>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
					>
						<path
							id="icons8-clock-96"
							d="M12,2A10,10,0,1,0,22,12,10.015,10.015,0,0,0,12,2Zm0,2a8,8,0,1,1-8,8A7.985,7.985,0,0,1,12,4ZM11,6v6.414l4.293,4.293,1.414-1.414L13,11.586V6Z"
							transform="translate(-2 -2)"
							fill="#000"
						/>
					</svg>
					Read time: {time} minutes
				</TimeContainer>
			</Wrapper>
		</Container>
	);
};

export default ArticleInfo;
