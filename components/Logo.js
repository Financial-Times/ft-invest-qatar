import styled from 'styled-components';

const Container = styled.div`
	text-align: center;
	padding: 50px 10px;
`;
const LogoImg = styled.img`
	max-width: 150px;
`;

const Logo = () => {
	return (
		<Container>
			<LogoImg src="/images/IqLogo.png" />
		</Container>
	);
};

export default Logo;
