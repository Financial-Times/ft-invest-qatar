import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	font-family: 'Lora', serif;
	text-align: center;
	padding: 10px;
	@media ${device.laptopL} {
		position: absolute;
		max-width: 1535px;
		margin: 0 auto;
		right: 50%;
		width: 100%;
		transform: translateX(50%);
		padding: initial;
	}
`;

const Wrapper = styled.div`
	@media ${device.laptopL} {
		[data-right='true'] & {
			margin-left: auto;
		}
		max-width: 270px;
	}
`;

const Content = styled.div`
	@media ${device.laptopL} {
	}
`;

const Title = styled.div`
	line-height: 1.1;
	font-weight: 600;
	font-size: 50px;
	margin-bottom: 24px;
	@media ${device.laptopL} {
		font-size: 56px;
		margin-bottom: 24px;
	}
`;

const Stat = styled.div`
	height: 145px;
	width: 145px;
	background-color: #b79769;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
	margin: 0 auto;
	@media ${device.laptopL} {
		margin-bottom: 24px;
	}
	sup {
		font-size: 30px;
	}
	p {
		color: white;
		font-size: 32px;

		@media ${device.laptopL} {
			font-size: 32px;
			line-height: 1;
			text-align: center;
		}
	}
`;
const Text = styled.div`
	color: #8a1538;
	font-size: 24px;

	@media ${device.laptopL} {
		font-size: 24px;
	}
`;

const PullOut = ({ data }) => {
	const { title, stat, text, right, top } = data;
	return (
		<Container data-right={right} style={{ top: `${top}%` }}>
			<Wrapper>
				<Content>
					<Title>{title}</Title>
					<Stat dangerouslySetInnerHTML={{ __html: stat }} />
					<Text dangerouslySetInnerHTML={{ __html: text }} />
				</Content>
			</Wrapper>
		</Container>
	);
};

export default PullOut;
