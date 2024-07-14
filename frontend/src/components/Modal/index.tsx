import {
	ModalContainer,
	Overlay,
	ModalContent,
	Input,
	ContainerInput,
	ContainerInputRadio,
	ContainerButtonClose,
	ContainerButton,
} from './style';
import React, { useContext } from 'react';
import context from '../../context/context';
import { handleChange } from '../../utils/handleChange';

interface ModalProps {
	buttonClose: React.ReactNode;
	button: React.ReactNode;
	buttonDelete: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ buttonClose, button, buttonDelete }) => {
	const { newEvent, setNewEvent } = useContext(context);

	return (
		<ModalContainer>
			<Overlay>
				<ModalContent>
					<ContainerButtonClose>{buttonClose}</ContainerButtonClose>
					<h1>Nova Tarefa</h1>
					<ContainerInput>
						<span>Título:</span>
						<label htmlFor='titulo'>
							<Input name='title' type='text' onChange={handleChange(setNewEvent)} value={newEvent.title} />
						</label>
					</ContainerInput>
					<ContainerInput>
						<span>Descrição:</span>
						<label htmlFor='descricao'>
							<Input name='description' type='text' onChange={handleChange(setNewEvent)} value={newEvent.description} />
						</label>
					</ContainerInput>
					<ContainerInput>
						<span>Prioridade</span>
						<ContainerInputRadio>
							<label htmlFor='alta'>
								<input
									type='radio'
									id='alta'
									name='priority'
									value='alta'
									onChange={handleChange(setNewEvent)}
									checked={newEvent.priority === 'alta'}
								/>
								<span>Alta</span>
							</label>
							<label htmlFor='media'>
								<input
									type='radio'
									id='media'
									name='priority'
									value='media'
									onChange={handleChange(setNewEvent)}
									checked={newEvent.priority === 'media'}
								/>
								<span>Média</span>
							</label>
							<label htmlFor='baixa'>
								<input
									type='radio'
									id='baixa'
									name='priority'
									value='baixa'
									onChange={handleChange(setNewEvent)}
									checked={newEvent.priority === 'baixa'}
								/>
								<span>Baixa</span>
							</label>
						</ContainerInputRadio>
					</ContainerInput>
					<ContainerButton>
						{button}
						{buttonDelete}
					</ContainerButton>
				</ModalContent>
			</Overlay>
		</ModalContainer>
	);
};

export default Modal;
