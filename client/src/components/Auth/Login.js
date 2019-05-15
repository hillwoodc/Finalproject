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
				<input type='submit' className='btn btn-primary' value='Login' />
			</form>
			<p className='primary'>
			Don't Have an account? <Link to='/register'>Click Here to Register</Link>
			</p>
		</div>
	 </Fragment>
	);
	
};



export default Login;









// Original Code Below:
// import React, { Component } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

// import { Auth } from "mLab";


// export default class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

//   validateForm() {
//     return this.state.email.length > 0 && this.state.password.length > 0;
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.id]: event.target.value
//     });
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//   }
// //   Use below after heroku mlab is connected
// //   handleSubmit = async event => {
// //     event.preventDefault();
  
// //     try {
// //       await Auth.signIn(this.state.email, this.state.password);
// //       this.props.userHasAuthenticated(true);
// //     } catch (e) {
// //       alert(e.message);
// //     }
// //   }
  

//   render() {
//     return (
//       <div className="Login">
//         <form onSubmit={this.handleSubmit}>
//           <FormGroup controlId="email" bsSize="large">
//             <ControlLabel>Email</ControlLabel>
//             <FormControl
//               autoFocus
//               type="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//           </FormGroup>
//           <FormGroup controlId="password" bsSize="large">
//             <ControlLabel>Password</ControlLabel>
//             <FormControl
//               value={this.state.password}
//               onChange={this.handleChange}
//               type="password"
//             />
//           </FormGroup>
//           <Button
//             block
//             bsSize="large"
//             disabled={!this.validateForm()}
//             type="submit"
//           >
//             Login
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }


