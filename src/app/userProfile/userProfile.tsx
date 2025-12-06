"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
export default function UserProfile() {
	const { data: session, status } = useSession();
	// const [email, setEmail] = useState("");
	// These will be undefined until the user is authenticated
	const userEmail = session?.user?.email ?? "";
	const profilePic = session?.user?.image ?? "/fruit.jpg"; // fallback image
	// setEmail(userEmail);
	// if (status === "loading") return <div>Loading...</div>;
	// if (status === "unauthenticated") return <div>Please sign in</div>;

	return userEmail;
}

{
	/* <div>
    <p>Email: {userEmail}</p>
    <p>Profile Picture: {profilePic} </p>
    <img src={profilePic} alt="Profile"  />
</div> */
}
