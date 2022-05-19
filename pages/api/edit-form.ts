import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req: any, res: any) {
	const body = req.body

	if (!body.editname || !body.edittime) {
		return res.redirect(307, '/admin')
	}

	var active
	if (body.active) {
		active = true
	}

	await prisma.booking.update({
		where: { id: parseInt(body.id) },
		data: {
			name: body.editname,
			time: body.edittime,
			comment: body.editcomment,
			active: active,
		}
	})

	res.redirect(307, '/record-editor')
}