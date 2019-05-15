import React, { Fragment, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Register.css";

const Register = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		password2: ''
		});

	const { username, email, password, password2 } = formData;

	const onChange = e => setFormData({ ...formData, [e.target.username]: e.target.value });

	const onSubmit = async e => {
		e.preventDefault();
		if(password !== password2) {
			console.log('passwords do not match');
			// starting at else code to return/test without DB
	} else {
        const newUser = {
			username,
			email,
			password
		} 
		
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			}

			const body = JSON.stringify(newUser);
			const res = await axios.post('/api/users', body, config);
			console.log(res.data);

		} catch(err) {

		console.log(err.response.data);
		}
	}
};
	
	return (
	 <Fragment>
		<div className="RegisterForm">
			<h4>Sign up</h4>
			<form className="form-horizontal" onSubmit={e => onSubmit(e)}>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="username">Username</label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={username}
							onChange={e => onChange(e)}
							required
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="username">Email</label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="email"
							id="email"
							name="email"
							placeholder="Email Address"
							value={email}
							onChange={e => onChange(e)}
							required
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password">Password: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="password"
							type="password"
							name="password"
							value={password}
							onChange={e => onChange(e)}
							required
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password2">Password2: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="Password2"
							type="password2"
							name="password2"
							value={password2}
							onChange={e => onChange(e)}
							required
						/>
					</div>
				</div>
				<input type='submit' className='btn btn-primary' value='Register' />
			</form>
			<p className='primary'>
			Have an account? <Link to='/login'>Click Here to Login</Link>
			</p>
		</div>
	 </Fragment>
	);
	
};



export default Register;