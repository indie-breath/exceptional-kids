import { PrismaClient } from "@prisma/client";
import moment from "moment";
import Head from "next/head";
import { useState } from "react";

export const getServerSideProps = async () => {
	const prisma = new PrismaClient()

	const booking = await prisma.booking.findMany({
		orderBy: {
			time: 'desc',
		},
	})

	return { props: { booking }}
}

export default function RecordEditor({ booking }: { booking: any; }) {

	return (
		<>
			<Head>
				<title>Edit a Record</title>
			</Head>
			<h1 className="relative left-4 top-3 text-2xl font-bold">Edit a Record</h1>
			<div className="">
				<div>
					<ul>
						{booking.map(function (bookings: any, idx: any) {
							return (
								<div key={idx}>
									<form action="/api/edit-form" method="post" className="border-4 rounded-md border-black w-1/3 relative p-2 m-2 left-4 top-4 text-center">
										<label>Booking ID:</label><input className="m-2" name="id" value={bookings.id} /><br />
										<label>Edit Name:</label>
										<input type={'text'} name='editname' defaultValue={bookings.name} className="shadow-md m-2" /><br />
										<label>Edit time:</label>
										<input type={'datetime-local'} name='edittime' defaultValue={bookings.time} className="shadow-md m-2" /><br />
										<label className="relative bottom-11">Edit comment:</label>
										<textarea name='editcomment' defaultValue={bookings.comment} className="shadow-md m-2" /><br />
										<label>Edit active:</label>
										<input type={'checkbox'} name='editactive' defaultChecked={bookings.active} className="shadow-md m-2" /><br />
										<input type={'submit'} value='Confirm Edit' />
									</form>
								</div>
							)
						})}
					</ul>
				</div>

			</div>
		</>
	)
}