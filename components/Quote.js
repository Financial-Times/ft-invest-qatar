import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	background-color: #f8f8f8;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	@media ${device.tablet} {
		padding: 60px 150px;
	}
`;

const Wrapper = styled.div`
	display: flex;
`;

const AuthorContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
`;

const Author = styled.div``;
const Job = styled.div``;
const QuoteMark = styled.div``;
const QuoteContainer = styled.div``;

const Quote = ({ data }) => {
	const { author, job, quote } = data;
	return (
		<Container>
			<Wrapper>
				<QuoteMark>
					<svg
						id="speech-mark_96px"
						data-name="speech-mark 96px"
						xmlns="http://www.w3.org/2000/svg"
						width="96"
						height="96"
						viewBox="0 0 96 96"
					>
						<circle id="circle" cx="48" cy="48" r="48" fill="#b79769" />
						<path
							id="icon-speech-mark"
							d="M34.84,34.63a40.961,40.961,0,0,0-5.143,9.4,27.225,27.225,0,0,0-2.374,11.083,8.907,8.907,0,0,1,2.769-.389,9.928,9.928,0,0,1,6.462,2.139Q39.192,59,39.192,63.278a9.568,9.568,0,0,1-2.7,6.935A9.387,9.387,0,0,1,29.434,73q-5.67,0-8.769-3.824a15.048,15.048,0,0,1-3.1-9.787,35.72,35.72,0,0,1,3.1-13.741A59.9,59.9,0,0,1,29.7,31Zm26.374,0a40.961,40.961,0,0,0-5.143,9.4A27.225,27.225,0,0,0,53.7,55.111a8.907,8.907,0,0,1,2.769-.389,9.928,9.928,0,0,1,6.462,2.139Q65.566,59,65.566,63.278a9.568,9.568,0,0,1-2.7,6.935A9.387,9.387,0,0,1,55.807,73q-5.67,0-8.769-3.824a15.048,15.048,0,0,1-3.1-9.787,35.72,35.72,0,0,1,3.1-13.741A59.9,59.9,0,0,1,56.071,31Z"
							transform="translate(6.204 -4.36)"
							fill="#fff"
						/>
					</svg>
				</QuoteMark>
				<AuthorContainer>
					<Author>{author}</Author>
					<Job>{job}</Job>
				</AuthorContainer>
			</Wrapper>
			<Wrapper>
				<QuoteContainer>{quote}</QuoteContainer>
			</Wrapper>
		</Container>
	);
};

export default Quote;
