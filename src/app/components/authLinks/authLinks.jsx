"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import styles from "./authLinks.module.css";
import Link from "next/link";

export default function AuthLinks() {
	const { status } = useSession();

	return (
		<div className={styles.authContainer}>
			{status === "unauthenticated" ? (
				<a><Link id="authLink" href="/login" className={styles.loginLink} name="authLink">Login</Link></a>
			) : (
				<div className={styles.logoutLink} onClick={() => signOut()} name="authLink">Logout</div>
			)}
		</div>
	);
}
