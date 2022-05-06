import { PrismaClient } from "@prisma/client"
import { sha256 } from "js-sha256";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
	const body = req.body
	//console.log('body: ', body)

	//checks if the required data is there
	if (!body.name || !body.email || !body.password) {
		//sends an error
		res.json("Information Missing")
	}

	var hash: any = sha256.update(body.password)
	hash = hash.hex()

	/*await prisma.user.create({
		data: {
			name: body.name,
			email: body.email,
			password: hash
		}
	})*/

	//redirects to different page (currently set to home)
	res.redirect(307, '/')
}