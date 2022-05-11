import { Dialog, Transition } from "@headlessui/react";
import { PrismaClient } from "@prisma/client";
import { getCookie, removeCookies } from "cookies-next";
import Image from 'next/image'
import Link from "next/link";
import { Fragment, useState } from "react";
import default_profile from '../../public/profile-picture.svg'
import { XIcon } from '@heroicons/react/outline'

export const getServerSideProps = async () => {
	const prisma = new PrismaClient()
	const user = await prisma.user.findFirst({
		where: {
			email: getCookie('login')?.toString()
		}
	})
	
	removeCookies('login')

	return { props: { user } }
}

export default function Dashboard({ user }: { user: any; }) {
	const [open, setOpen] = useState(true)

	return (
		<>
			<ul className="list-none m-0 p-0 overflow-hidden bg-zinc-900">
				<li className="float-left text-white text-center py-3 px-3 text-xl">{user.name}&apos;s Dashboard</li>
				<li className="float-left"><Link href={'/booking'}>
					<a className="block text-white text-center py-3 px-5 text-xl hover:bg-teal-500">Make a Booking</a>
				</Link></li>
				<li className="float-right relative right-1.5 top-1.5">
					<button onClick={() => setOpen(true)}>
						<Image src={default_profile} height={40} width={40} className="hover:scale-125" />
					</button>
				</li>
			</ul>

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
											<div className="px-4 sm:px-6">
												<Dialog.Title className="text-lg font-medium text-gray-900"> Panel title </Dialog.Title>
											</div>
											<div className="relative mt-6 flex-1 px-4 sm:px-6">
												{/* Replace with your content */}
												<div className="absolute inset-0 px-4 sm:px-6">
													<div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true" />
												</div>
												{/* /End replace */}
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