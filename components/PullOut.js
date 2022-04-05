import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	@media ${device.tablet} {
		background-color: red;
		position: absolute;
		max-width: 1535px;
		margin: 0 auto;
		right: 50%;
		width: 100%;
		transform: translateX(50%);
	}
`;

const PullOut = ({ data }) => {
	const { title, stat, text, right, top } = data;
	return (
		<Container>
			{title} {stat} {text} {right} {top}
		</Container>
	);
};

export default PullOut;
