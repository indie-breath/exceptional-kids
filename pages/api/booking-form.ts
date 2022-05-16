import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
	const body = req.body
	//console.log('body: ', body)

	//checks if the required data is there
	if (!body.name || !body.date) {
		//sends an error, change to fail page eventually
		return res.redirect(307, '/')
	}

	const data = [body.name, new Date(body.date)]

	//create the record in the database
	await prisma.booking.create({
		data: {
			name: body.name,
			time: data[1],
			active: true
		},
	})

	//redirects to different page (currently set to home)
	res.redirect(307, '/')
}