import Head from 'next/head'
import '../../styles/Booking.module.scss'

function Booking() {
	const handleSubmit = async (event: any) => {
		event.preventDefault();

		const data = {
			name: event.target.name.value,
			time: event.target.time.value
		}

		const JSONdata = JSON.stringify(data);
		const path = '/api/form';

		const options = {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSONdata,
		}

		const response = await fetch(path, options);

		const result = await response.json();
		alert('Data: ' + result.data);
	}

	return (
		<>
			<Head>
				<title>Make a Booking</title>
			</Head>
			<form onSubmit={handleSubmit}>
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