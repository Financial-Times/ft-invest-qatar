import styled from 'styled-components';
import { device } from '~/config/utils';

const ContentWrapper = styled.div`
	max-width: 883px;
	padding: 0 10px;
	margin: 0 auto;
`;

const ContentText = styled.div`
	&.dropCap:first-letter {
		font-family: 'Lora', serif;
		float: left;
		line-height: 0.65;
		color: #8a1538;
		font-size: 80px;
		margin: 10px 20px;
		@media ${device.tablet} {
			font-size: 120px;
			margin: 10px 30px;
		}
	}
`;

const Content = ({ data, id }) => {
	return (
		<ContentWrapper data-pos={id}>
			<ContentText
				className={data.hasDropCap ? 'dropCap' : ' '}
				dangerouslySetInnerHTML={{ __html: data.content }}
			/>
		</ContentWrapper>
	);
};

export default Content;
