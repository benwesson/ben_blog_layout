"use client"
import { useSession, signOut } from "next-auth/react";
import styles from "./authLinks.module.css";
import Link from "next/link";



export default function AuthLinks() {
const { status } = useSession();
    
    return ( 
        <>  
            <div className={styles.authContainer}>
                {status === "unauthenticated" ? (
                    <Link href="/login">Login</Link>
                ) : (
                    <>
                        
                        <span  onClick={() => signOut()}>Logout</span>
                    </>
                )}
            </div>
        </>
    );
}