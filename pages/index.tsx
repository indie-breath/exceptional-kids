import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Exceptional Kids</title>
			</Head>
			<Navbar />
		</>
	)
}

export default Home
