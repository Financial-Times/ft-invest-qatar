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
	}
	@media ${device.laptop} {
		padding: 20px 25px;
	}
`;

const CTA = ({ data }) => {
	return (
		<Container>
			<ContentCta>
				<a href={data.url}>
					CTA goes here
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
			</ContentCta>
		</Container>
	);
};

export default CTA;
