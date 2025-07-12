"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserProfile() {
  const router = useRouter();
  const { data: session, status } = useSession();
  let profilePic = session?.user?.image;
  const userEmail = session?.user?.email ?? "";

  // Redirect to login if not authenticated
  if (status === "unauthenticated") {
    router.push("/login");
    return null; // Prevent rendering the rest of the component
  }


  if (!profilePic) {
    profilePic = "/fruit.jpg"
  }

  return [userEmail, profilePic]
}
    
  
