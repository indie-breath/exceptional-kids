import { Dialog, Transition } from "@headlessui/react";
import { PrismaClient } from "@prisma/client";
import { getCookie, removeCookies } from "cookies-next";
import moment from "moment";
import Image from 'next/image'
import Link from "next/link"
import { Fragment, useState } from "react";
import default_profile from '../../public/profile-picture.svg'

export const getServerSideProps = async () => {
	const prisma = new PrismaClient()
	
	const user = await prisma.user.findFirst({
		where: {
			email: getCookie('login')?.toString()
		}
	})

	const booking = await prisma.booking.findMany({
		orderBy: {
			time: 'desc',
		},
	})

	var temp
	for (let i = 0; i < booking.length; i++) {
		var today = new Date()
		if (new Date(booking[i].time) >= new Date()) {
			temp = booking[i]
		}
		else {
			break;
		}
	}

	const next_booking = temp

	removeCookies('login')

	return { props: { user, next_booking } }
}

export default function Dashboard({ user, next_booking }: { user: any; next_booking: any; }) {
	const [open, setOpen] = useState(false)
	console.log(moment(next_booking.time).format("dddd, MMMM Do YYYY, h:mm:ss a"))

	return (
		<>
			<ul className="list-none m-0 p-0 overflow-hidden bg-zinc-900">
				<li className="float-left text-white text-center py-3 px-3 text-xl">{user.name}&apos;s Dashboard</li>
				<li className="float-right relative right-1.5 top-1.5">
					<button onClick={() => setOpen(true)}>
						<Image src={default_profile} height={40} width={40} className="hover:scale-125" />
					</button>
				</li>
			</ul>

			<div className="relative left-10 top-4">
				<h2 className="relative left-4 font-bold">Next Booking</h2>
				<div className="border-4 border-black w-1/6 relative top-2 py-2 px-4">
					<p>{next_booking.name}</p>
					<p>{moment(next_booking.time).format("h:mm a, dddd, MMMM Do YYYY")}</p>
					<p>{next_booking.comment}</p>
				</div>
			</div>

			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-in-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>
					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
								<Transition.Child
									as={Fragment}
									enter="transform transition ease-in-out duration-500 sm:duration-700"
									enterFrom="translate-x-full"
									enterTo="translate-x-0"
									leave="transform transition ease-in-out duration-500 sm:duration-700"
									leaveFrom="translate-x-0"
									leaveTo="translate-x-full"
								>
									<Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
										<Transition.Child
											as={Fragment}
											enter="ease-in-out duration-500"
											enterFrom="opacity-0"
											enterTo="opacity-100"
											leave="ease-in-out duration-500"
											leaveFrom="opacity-100"
											leaveTo="opacity-0"
										>
											<div className="absolute -top-2.5 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
												<button
													type="button"
													className="rounded-md text-gray-300 hover:text-white focus:outline-none"
													onClick={() => setOpen(false)}
												>
													<span className="sr-only">Close panel</span>
													<Image src={default_profile} height={40} width={40} className="hover:scale-125" />
												</button>
											</div>
										</Transition.Child>
										<div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
											<div className="relative mt-6 flex-1 px-4 sm:px-6">
												{/*Edit in this div*/}
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	)
}