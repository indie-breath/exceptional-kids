import { PrismaClient } from "@prisma/client"
import { setCookies } from "cookies-next";
import { sha256 } from "js-sha256";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
	const body = req.body
	//console.log('body: ', body)

	//checks if the required data is there
	if (!body.email || !body.password) {
		//sends an error
		res.json("Email or Password Missing")
	}

	var hash: any = sha256.update(body.password)
	hash = hash.hex()
	
	const users = await prisma.user.findFirst({
		where: {
			email: body.email,
		},
	})

	if (users?.password != hash) {
		res.json("Incorrect Email or Password")
	}
	if (users?.id == 1) {
		res.redirect(307, '/admin')
	}

	setCookies('login', body.email)

	//redirects to different page (currently set to home)
	res.redirect(307, '/dashboard')
}