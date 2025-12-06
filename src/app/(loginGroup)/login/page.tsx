"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./loginPage.module.css";
import { useSession, signIn } from "next-auth/react";

export default function LoginPage() {
	const router = useRouter();
	const { data, status } = useSession();
	const [bgReady, setBgReady] = useState(false);

	useEffect(() => {
		const bg = new Image();
		bg.src = "/fruit_two.jpg";
		bg.onload = () => setBgReady(true);
	}, []);

	if (status === "loading") {
		return <div>Loading...</div>;
	}
	if (status === "authenticated") {
		router.push("/");
	}
	if (!bgReady) {
		return <div aria-busy="true">Loading background…</div>;
	}
	console.log(data, status);
	return (
		<div className={styles.container}>
			<div className={styles.login}>
				<h1>{"Ben's Blog"}</h1>
				<h2 className={styles.text}>
					To write a post or leave a comment, please sign in.
				</h2>
				<div className={styles.socialButton} onClick={() => signIn("google")}>
					Sign in with Google
				</div>
				<div className={styles.socialButton}>Sign in with Github</div>
				<div className={styles.socialButton}>Sign in with Facebook</div>
			</div>
		</div>
	);
}
