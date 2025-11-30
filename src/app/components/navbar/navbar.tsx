"use client";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/authLinks";

import Search from "../search/search";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function toggleHamburgerMenu() {
		setIsMenuOpen((prev) => !prev);
	}

	// Reset menu state when screen becomes large
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 850) {
				setIsMenuOpen(false); // Close the sidebar when screen is large
			}
		};

		window.addEventListener("resize", handleResize);

		// Also check on initial load
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, [isMenuOpen]);

	const menuClass = isMenuOpen ? styles.hamburgerMenu + " " + styles.menuChange : styles.hamburgerMenu;
	const buttonClass = isMenuOpen ? styles.hamburgerButton + " " + styles.buttonChange : styles.hamburgerButton;

	return (
		<>
			<div className={styles.header}>
				<div className={styles.title}>
					<p className={styles.titleText}>Ben's Eats</p>
					
				</div>
				<div className={styles.navbar}>
					<div className={styles.linkContainer}>
						<div className={styles.links}>
							<div>
								<Link className={styles.navLink} href="/">
									Home
								</Link>
							</div>
							<div>
								<Link
									className={styles.navLink}
									href="/recipes"
								>
									Recipes
								</Link>
							</div>
							<div>
								<Link className={styles.navLink} href="/post">
									Post
								</Link>
							</div>
							<div>
								<AuthLinks />
							</div>
						</div>

					</div>
					
					<div
						className={buttonClass}
						onClick={toggleHamburgerMenu}
						aria-expanded={isMenuOpen}
					>
						<div className={styles.bar1}></div>
						<div className={styles.bar2}></div>
						<div className={styles.bar3}></div>
					</div>

					<Search />
				</div>
			

				<div>
					<div className={menuClass}>
						<Link href="/">
							Home
						</Link>

						<Link  href="/recipes">
							Recipes
						</Link>

						<Link  href="/post">
							Post
						</Link>
						<AuthLinks />
					</div>
				</div>
			</div>
		
		</>
	);
}
