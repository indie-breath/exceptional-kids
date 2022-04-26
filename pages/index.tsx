import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import '../styles/Home.module.scss'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Exceptional Kids</title>
			</Head>
			<div id='navbar'>
				<ul>
					<li><p>Exceptional Kids</p></li>
					<li><Link href={'/'}><a className='active'>Home</a></Link></li>
					<li style={{'float': 'right'}}><Link href={'/booking'}><a>Make a Booking</a></Link></li>
				</ul>
			</div>
		</>
	)
}

export default Home
