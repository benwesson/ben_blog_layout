import styles from "./addComment.module.css";
import UserProfile from "@/userProfile/userProfile";
import { createComment } from "@/actions/actions";
import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
async function handlePostComment(formData: FormData) {

  "use server";
  
  const desc = formData.get("desc") as string;
  const userEmail = formData.get("userEmail") as string;
  const profilePic= formData.get("profilePic") as string;
  const associatedPostId = formData.get("associatedPostId") as string;
  await createComment(desc, associatedPostId, userEmail, profilePic);
}

export default function AddComment({ associatedPostId }: { associatedPostId: string }) {
    "use client";
    
    
      
      
    
    // const [userEmail, profilePic] = Poster();
  

  return (
    <div>
      <form action={handlePostComment}>
        <div className={styles.container}>
          <textarea
            className={styles.textarea}
            name="desc"
            placeholder="Add a comment..."
            required
          />

          <input type="hidden" name="associatedPostId" value={associatedPostId} />
          <input type="hidden" name="profilePic" value="/fruit.jpg" />
          <input type="hidden" name="userEmail" value="benjamin@example.com" /> 
          
          <button className={styles.button}>Post</button>
          <UserProfile />
        </div>
      </form>
    </div>
  );
}
