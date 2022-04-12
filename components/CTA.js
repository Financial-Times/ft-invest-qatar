import Link from 'next/link';
import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	max-width: 863px;
	margin: 100px auto 100px auto;
`;

const ContentCta = styled.div`
	background-color: #8a1538;
	padding: 10px 15px;
	display: table;
	margin: 0 auto;
	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		font-size: 13px;
		color: white;
	}

	svg {
		margin-top: 5px;
		transition: all 0.5s ease;
	}

	&:hover {
		svg {
			transform: translate(20px);
			transition: all 0.5s ease;
		}
	}

	@media ${device.tablet} {
		margin: 0 auto 0 0;
	}
	@media ${device.laptop} {
		padding: 20px 25px;
	}
`;

const CTA = ({ data }) => {
	return (
		<Container>
			<ContentCta>
				<a
					href={'https://invest.qa/'}
					className="cta"
					target={'_blank'}
					rel="noreferrer"
				>
					Learn More
				</a>
			</ContentCta>
		</Container>
	);
};

export default CTA;
