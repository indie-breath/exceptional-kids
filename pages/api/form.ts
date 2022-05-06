import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
	const body = req.body
	//console.log('body: ', body)

	//checks if the required data is there
	if (!body.name || !body.date || !body.time) {
		//sends an error, change to fail page eventually
		return res.redirect(307, '/')
	}

	const data = [body.name, body.date + "|" + body.time]
	res.status(400).json({ data: data })

	//create the record in the database
	/*await prisma.booking.create({
		data: {
			name: body.name,
			time: body.time,
			active: true
		},
	})*/

	//redirects to different page (currently set to home)
	res.redirect(307, '/')
}