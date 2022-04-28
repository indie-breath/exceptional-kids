import Head from 'next/head'
import '../../styles/Booking.module.scss'

function Booking() {
	return (
		<>
			<Head>
				<title>Make a Booking</title>
			</Head>
			<form action='/api/form' method='post'>
				<label htmlFor='name'>Enter Your Name: </label>
				<input type={'text'} id='name' name='name' /><br />
				<label htmlFor='time'>Enter Time of Booking: </label>
				<input type={'datetime-local'} id='time' name='time' /><br />
				<input type={'submit'} value='Submit' />
			</form>
		</>
	)
}

export default Booking