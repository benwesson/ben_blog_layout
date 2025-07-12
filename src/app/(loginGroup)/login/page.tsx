"use client"
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./loginPage.module.css"
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";


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
            <div className={styles.login}>
                {/* <div className={styles.back}>
                    <p>back</p>
                </div>
                 */}
                <h1>Ben's Blog</h1>
                <h2 className={styles.text}>To write a post or leave a comment, please sign in.</h2>
                <div className={styles.socialButton} onClick={()=>signIn("google" )}>Sign in with Google</div>
                <div className={styles.socialButton}>Sign in with Github</div>
                <div className={styles.socialButton}>Sign in with Facebook</div>
            </div>
        </div>
    )
}





