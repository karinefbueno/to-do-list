import styled from 'styled-components';

export const ButtonComponent = styled.button`
	margin-top: 24px;
	border-radius: 10px;
	background-color: gray;
	color: white;
	text-align: center;
	border: 1px solid gray;
	width: 500px;
	height: 60px;
	font-size: 24px;

	@media (max-width: 660px) {
		width: auto;
		height: 60px;
	}
`;
