import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Exceptional Kids</title>
			</Head>
			<ul className="list-none m-0 p-0 overflow-hidden bg-zinc-900">
				<li className="float-left text-white text-center py-3 px-3 text-xl">Exceptional Kids</li>
				<li className="float-left"><Link href={'/'}><a className="block text-white text-center py-3 px-5 text-xl hover:bg-teal-500">Home</a></Link></li>
				<li className="float-right"><Link href={'/login'}><a className="block text-white text-center py-3 px-5 text-xl hover:bg-teal-500">Login</a></Link></li>
			</ul>
		</>
	)
}

export default Home
