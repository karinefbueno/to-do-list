import Button from '../../components/Button/index.js';
import Form from '../../components/Form/index.js';
import { Input } from '../../components/Form/style.js';
import { useState, useContext } from 'react';
import { handleChange } from '../../utils/handleChange.js';
import context from '../../context/context.js';
import { fetchCreateUser } from '../../service/api.ts';

function Login() {
	const [showForm, setShowForm] = useState(false);
	const { formData, setFormData } = useContext(context);

	const handleClick = () => setShowForm(!showForm);
	const handleRegisterClick = async () => {
		await fetchCreateUser(formData);
	};

	return (
		<div>
			<h1>To do List</h1>
			{!showForm && (
				<Form buttonLogin={<Button text='Login' />} button={<Button text='Criar nova conta' onclick={handleClick} />}></Form>
			)}
			{showForm && (
				<Form
					input={
						<label htmlFor='nome'>
							<Input
								type='text'
								name='name'
								onChange={handleChange(setFormData)}
								value={formData.name}
								min={2}
								placeholder='Nome'
							/>
						</label>
					}
					button={<Button onclick={handleRegisterClick} text='Registrar' />}
				></Form>
			)}
		</div>
	);
}

export default Login;
