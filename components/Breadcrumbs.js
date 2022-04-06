import Link from 'next/link';
import styled from 'styled-components';

import { device } from '~/config/utils';

const Container = styled.div`
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	font-size: 13px;
	text-transform: uppercase;
	margin-bottom: 25px;

	a {
		font-weight: 600;
		font-family: 'Lora', serif;
		color: #8a1538;
		margin-right: 5px;
	}

	span {
		margin-right: 5px;
		font-weight: 500;
	}

	@media ${device.tablet} {
	}
`;

const Title = styled.div`
	font-family: 'Lora', serif;
`;

const BreadCrumbs = ({ data }) => {
	return (
		<Container>
			<Link href="/">Home</Link>
			<Title>
				<span>/</span>
				{data}
			</Title>
		</Container>
	);
};

export default BreadCrumbs;
