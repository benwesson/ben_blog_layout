"use client";
import { useState, useEffect } from "react";
import { clsx } from "clsx";
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

	return (
		<>
			<nav className={styles.header} aria-label="Site navigation Bar">
				<p
					className={styles.titleText}
					aria-label="Page Title: Ben's Eats"
				>
					{"Ben's Eats"}
				</p>

				<div
					className={styles.navbar}
					aria-label="Primary navigation links"
				>
					<div className={styles.linkContainer}>
						<div className={styles.links}>
							<div>
								<Link
									className={styles.navLink}
									href="/"
									aria-label="Go to home page"
								>
									Home
								</Link>
							</div>
							<div>
								<Link
									className={styles.navLink}
									href="/recipes"
									aria-label="Browse all recipes"
								>
									Recipes
								</Link>
							</div>
							<div>
								<Link
									className={styles.navLink}
									href="/createpost"
									aria-label="Create a new post"
								>
									Post
								</Link>
							</div>
							<div aria-label="Authentication links">
								<AuthLinks />
							</div>
						</div>
					</div>

					<div
						className={clsx(styles.hamburgerButton, {
							[styles.buttonChange]: isMenuOpen,
						})}
						onClick={toggleHamburgerMenu}
						aria-expanded={isMenuOpen}
						aria-controls="mobile-navigation"
						role="button"
						tabIndex={0}
						aria-label={
							isMenuOpen
								? "Close navigation menu"
								: "Open navigation menu"
						}
					>
						<div className={styles.bar1}></div>
						<div className={styles.bar2}></div>
						<div className={styles.bar3}></div>
					</div>

					<Search aria-label="Search site content" />
				</div>

				<div
					className={clsx(styles.hamburgerMenu, {
						[styles.menuChange]: isMenuOpen,
					})}
					id="mobile-navigation"
					aria-label="Mobile navigation links"
					aria-hidden={!isMenuOpen}
				>
					<Link
						href="/"
						aria-label="Go to home page from mobile menu"
					>
						Home
					</Link>

					<Link
						href="/recipes"
						aria-label="Browse all recipes from mobile menu"
					>
						Recipes
					</Link>

					<Link
						href="/post"
						aria-label="Create a new post from mobile menu"
					>
						Post
					</Link>
					<div aria-label="Authentication links in mobile menu">
						<AuthLinks />
					</div>
				</div>
			</nav>
		</>
	);
}
