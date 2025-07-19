"use client";
import { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/authLinks";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  if (menuOpen) {
    
  } else {
    
  }
  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
    <div className={styles.header}>
      <div className={styles.title}>
        <p className={styles.titleText}>Ben's Eats</p>
      </div>
      <div className={styles.navbar}>
        <div className={styles.links}  >
          <div><Link className={styles.navLink} href="/">Home</Link></div>
          <div><Link className={styles.navLink} href="/recipes">Recipes</Link></div>
          <div><Link className={styles.navLink} href="/post">Post</Link></div>
          <div><AuthLinks /></div>
        </div>
        <div className={styles.button} >
          <button className={styles.menuButton} onClick={handleMenuClick}>
            <GiHamburgerMenu size={24} />
          </button>
        </div>
        <div className={styles.search}>
          <input className={styles.searchInput} type="text" placeholder="Search..." />
        </div>
      </div>
    

    <div>
        <div className={styles.sidebar} style={{ display: menuOpen ? "block" : "none" }} >
            <button className={styles.close} onClick={handleMenuClick}>Close</button>
            <ul>
                
                <li><Link className={styles.navLink} href="/">Home</Link></li>
                <li><Link className={styles.navLink} href="/recipes">Recipes</Link></li>
                <li><Link className={styles.navLink} href="/post">Post</Link></li>
                <li><AuthLinks /></li>
            </ul>
      </div>
    </div>
    </div>
    </>
  );
}