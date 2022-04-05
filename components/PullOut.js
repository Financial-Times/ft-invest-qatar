import styled from 'styled-components';

const Container = styled.div``;

const PullOut = ({ data }) => {
	const { title, stat, text, right, top } = data;
	return (
		<Container>
			{title} {stat} {text} {right} {top}
		</Container>
	);
};

export default PullOut;
