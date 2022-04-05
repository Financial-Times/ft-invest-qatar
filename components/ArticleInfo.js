import styled from 'styled-components';

const ArticleInfo = ({ data }) => {
	const { date, time } = data;
	return (
		<>
			{date}
			{time}
		</>
	);
};

export default ArticleInfo;
