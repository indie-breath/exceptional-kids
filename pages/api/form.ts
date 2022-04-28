import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
	const body = req.body
	console.log('body: ', body)

	// Guard clause checks for first and last name,
	// and returns early if they are not found
	if (!body.name || !body.time) {
	  // Sends a HTTP bad request error code
	return res.status(400).json({ data: 'First or last name not found' })
	}

	await prisma.booking.create({
			data: {
				name: body.name,
				time: body.time,
				active: true
			},
	})
}