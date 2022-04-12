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
			<a href="https://invest.qa/" rel="noreferrer" target={'_blank'}>
				<LogoImg src="/images/IqLogo.png" />
			</a>
		</Container>
	);
};

export default Logo;
