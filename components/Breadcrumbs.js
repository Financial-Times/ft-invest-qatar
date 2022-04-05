import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	@media ${device.tablet} {
	}
`;

const BreadCrumbs = ({ data }) => {
	return <>Home {data}</>;
};

export default BreadCrumbs;
