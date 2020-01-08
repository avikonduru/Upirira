import React, { Fragment, useState } from 'react';

// Bootstrap
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const { firstName, lastName, email, password, confirmPassword } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async e => {
		e.preventDefault();
		if (password !== confirmPassword) {
			console.log('Passwords dont match');
		} else {
			console.log(formData);
		}
	};

	return (
		<Fragment>
			<Card>
				<Card.Body>
					<Form onSubmit={e => onSubmit(e)}>
						<Form.Group controlId='formBasicFirstName'>
							<Form.Label>First Name:</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter First Name'
								name='firstName'
								value={firstName}
								onChange={e => onChange(e)}
							/>
						</Form.Group>
						<Form.Group controlId='formBasicLastName'>
							<Form.Label>Last Name:</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter Last Name'
								name='lastName'
								value={lastName}
								onChange={e => onChange(e)}
							/>
						</Form.Group>
						<Form.Group controlId='formBasicEmail'>
							<Form.Label>Email address:</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email'
								name='email'
								value={email}
								onChange={e => onChange(e)}
							/>
						</Form.Group>
						<Form.Group controlId='formBasicPassword'>
							<Form.Label>Password:</Form.Label>
							<Form.Control
								type='password'
								placeholder='Password'
								name='password'
								value={password}
								onChange={e => onChange(e)}
							/>
						</Form.Group>
						<Form.Group controlId='formBasicConfirmPassword'>
							<Form.Label>Confirm Password:</Form.Label>
							<Form.Control
								type='password'
								placeholder='Confirm Password'
								name='confirmPassword'
								value={confirmPassword}
								onChange={e => onChange(e)}
							/>
						</Form.Group>
						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</Fragment>
	);
};

export default Register;