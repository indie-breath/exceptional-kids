function Signup() {
	return (
		<>
			<div>
				<h2>Login</h2>
				<form action="/api/login" method="post">
					<div>
						<label htmlFor="email">Email: </label>
						<input type={'email'} name='email' /><br />
					</div>
					<div>
						<label htmlFor="password">Password: </label>
						<input type={'password'} name='password' /><br />
					</div>
					<input type={'submit'} value='Login' />
				</form>
			</div>
			<div>
				<h2>Sign Up</h2>
				<form action="/api/signup" method="post">
					<div>
						<label htmlFor="name">Enter name of parent/guardian: </label>
						<input type={'text'} name='name' /><br />
					</div>
					<div>
						<label htmlFor="email">Enter parent/guardian&apos;s email: </label>
						<input type={'email'} name='email' /><br />
					</div>
					<div>
						<label htmlFor="password">Enter password: </label>
						<input type={'password'} name='password' /><br />
					</div>
					<input type={'submit'} value='Create Account' />
				</form>
			</div>
		</>
	)
}

export default Signup;
