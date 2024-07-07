import React, { useState } from 'react';

import Button from '../../components/Button';
import Form from '../../components/Form';
import { Input } from '../../components/Form/style';

function Login() {
	const [showForm, setShowForm] = useState(false);
	const handleClick = () => setShowForm(!showForm);

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
							<Input type='text' name='nome' min={2} placeholder='Nome' />
						</label>
					}
					button={<Button text='Registrar' />}
				></Form>
			)}
		</div>
	);
}

export default Login;
