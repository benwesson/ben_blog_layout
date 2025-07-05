"use client"
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./loginPage.module.css"
import { useSession, signIn } from "next-auth/react";

export default function LoginPage() {
    const router = useRouter()
    const {data, status} = useSession()
    if(status === "loading"){
        return(<div>Loading...</div>)
    }
    if(status === "authenticated"){
        router.push("/")
        
    }
    console.log(data,status)
    return (

        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton} onClick={()=>signIn("google")}>Sign in with Google</div>
                <div className={styles.socialButton}>Sign in with Github</div>
                <div className={styles.socialButton}>Sign in with Facebook</div>
                
            </div>

            
        </div>
    )
}
