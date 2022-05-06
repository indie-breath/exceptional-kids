import { getCookie } from 'cookies-next';
import Link from 'next/link'

export function Navbar() {
	if (!getCookie('login')) {
		return (
			<ul className="list-none m-0 p-0 overflow-hidden bg-zinc-900">
				<li className="float-left"><p className="text-white text-center py-3 px-3 text-xl">Exceptional Kids</p></li>
				<li className="float-left"><Link href={'/'}><a className="block text-white text-center py-3 px-5 text-xl hover:bg-teal-500">Home</a></Link></li>
				<li className="float-right"><Link href={'/login'}><a className="block text-white text-center py-3 px-5 text-xl hover:bg-teal-500">Login</a></Link></li>
			</ul>
		)
	}
	else {
		return (
			<ul className="list-none m-0 p-0 overflow-hidden bg-zinc-900">
				<li className="float-left"><p className="text-white text-center py-3 px-3 text-xl">Exceptional Kids</p></li>
				<li className="float-left"><Link href={'/'}><a className="block text-white text-center py-3 px-5 text-xl hover:bg-teal-500">Home</a></Link></li>
				<li className="float-right"><Link href={'/booking'}><a className="block text-white text-center py-3 px-5 text-xl hover:bg-teal-500">Make a Booking</a></Link></li>
			</ul>
		)
	}
}
  