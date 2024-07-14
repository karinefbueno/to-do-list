import styled from 'styled-components';

export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

export const ContainerButtonClose = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	margin-top: -24px;
	margin-right: -24px;
`;

export const ContainerButton = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	gap: 16px;
`;

export const Overlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 800px;
	font-size: 20px;
	height: 500px;
	background-color: #545d68;
	color: white;
	border-radius: 20px;
	position: relative;
	z-index: 1001;
`;

export const Input = styled.input`
	margin-top: 8px;
	margin-bottom: 20px;
	width: 450px;
	font-size: 20px;
	height: 60px;
	background-color: transparent;
	color: white;
	border-radius: 10px;
	padding-left: 40px;
	border: 1px solid gray;
`;

export const ContainerInput = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	input[type='radio'] {
		margin-right: 5px;
	}

	/* Estilizações específicas para as prioridades */
	#alta + span {
		margin-top: 10px;
		margin-right: 10px;
		color: red;
		border-radius: 10px;
		border: 1px solid gray;
		padding: 8px;
	}

	#media + span {
		margin-top: 10px;
		margin-right: 10px;
		color: orange;
		border-radius: 10px;
		border: 1px solid gray;
		padding: 8px;
	}

	#baixa + span {
		margin-top: 10px;
		margin-right: 10px;
		padding: 8px;
		color: #018762;
		font-weight: 700;
		border-radius: 10px;
		border: 1px solid gray;
	}
`;

export const ContainerInputRadio = styled.div`
	margin-top: 20px;
	display: flex;
`;
