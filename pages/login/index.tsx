function Signup() {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="border-4 border-black rounded-3xl flex justify-around p-10">
				<div className="text-center border-r-2">
					<p className="text-xl font-bold">Login</p>
					<form action="/api/login" method="post" className="px-5">
						<div>
							<label htmlFor="email">Email: </label>
							<input type={'email'} name='email' className="shadow-md mx-4 my-2" /><br />
						</div>
						<div>
							<label htmlFor="password">Password: </label>
							<input type={'password'} name='password' className="shadow-md mx-4 my-2" /><br />
						</div>
						<input type={'submit'} value='Login' className="border-2 p-1 my-5 rounded-md" />
					</form>
				</div>
				<div className="text-center border-l-2">
					<p className="text-xl font-bold">Sign Up</p>
					<form action="/api/signup" method="post" className="px-5">
						<div>
							<label htmlFor="name">Enter name of parent/guardian: </label>
							<input type={'text'} name='name' className="shadow-md mx-4 my-2" /><br />
						</div>
						<div>
							<label htmlFor="email">Enter parent/guardian&apos;s email: </label>
							<input type={'email'} name='email' className="shadow-md mx-4 my-2" /><br />
						</div>
						<div>
							<label htmlFor="password">Enter password: </label>
							<input type={'password'} name='password' className="shadow-md mx-4 my-2" /><br />
						</div>
						<input type={'submit'} value='Create Account' className="border-2 p-1 my-5 rounded-md" />
					</form>
				</div>
			</div>
		</div>
	)
}

export default Signup;
