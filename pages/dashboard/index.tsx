import { PrismaClient } from "@prisma/client";
import { getCookie } from "cookies-next";
import Image from 'next/image'
import default_profile from '../../public/profile-picture.svg'

export const getServerSideProps = async () => {
	const prisma = new PrismaClient()
	const user = await prisma.user.findFirst({
		where: {
			email: getCookie('login')?.toString()
		}
	})
	return { props: { user } }
}

function ProfileButton() {
	console.log("Button Pressed")
}

export default function Dashboard({ user }) {
	return (
		<>
			<ul className="list-none m-0 p-0 overflow-hidden bg-zinc-900">
				<li className="float-left text-white text-center py-3 px-3 text-xl">{user.name}'s Dashboard</li>
				<li className="float-right relative right-1.5 top-1.5"><button onClick={ProfileButton}>
					<Image src={default_profile} height={40} width={40} className="hover:scale-125" />
				</button></li>
			</ul>
		</>
	)
}	