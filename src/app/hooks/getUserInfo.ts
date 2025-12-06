import { useSession } from "next-auth/react";

export default function getUserInfo() {
	const { data: session } = useSession();
	console.log("Session Data:", session);

	return {
		email: session?.user?.email || "",
		profilePic: session?.user?.image || "/fruit.jpg", // Fallback image
	};
}
