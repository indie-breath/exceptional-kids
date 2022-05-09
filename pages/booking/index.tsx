import Head from 'next/head'

function Booking() {
	return (
		<>
			<Head>
				<title>Make a Booking</title>
			</Head>
			<div id='booking-form' className="md:flex md:justify-center mb-6">
				<form action='/api/booking-form' method='post' className="border-solid border-8 border-black rounded-xl p-5 m-5 w-2/5">
					<div className="p-2">
						<label htmlFor='name'>Enter Your Name: </label>
						<input type={'text'} id='name' name='name' className="shadow-md px-2 w-full" /><br />
					</div>
					<div className="p-2">
						<label htmlFor='time'>Enter Time of Booking: </label>
						<input type={'date'} id='date' name='date' className="shadow-md px-2" />
						<input type={'time'} id='time' name='time' className="shadow-md px-2" /><br />
					</div>
					<input type={'submit'} value='Submit' className="p-2 shadow-md relative hover:border" />
				</form>
			</div>
		</>
	)
}

export default Booking