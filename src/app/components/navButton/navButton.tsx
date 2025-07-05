"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./navButton.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/authLinks";

export default function NavButton() {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.navButtonWrapper}>
            <button
                className={styles.navButton}
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Open navigation menu"
            >
                <GiHamburgerMenu size={24} />
            </button>
            {open && (
                <div className={styles.dropDownMenu}>
                    <Link className={styles.navLink} href="/">Home</Link>
                    <Link className={styles.navLink} href="/recipes">Recipes</Link>
                    <Link className={styles.navLink} href="/post">Post</Link>
                    <div className={styles.navLink}><AuthLinks /></div>
                </div>
            )}
        </div>
    );
}