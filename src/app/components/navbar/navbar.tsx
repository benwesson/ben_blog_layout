import NavButton from "../navButton/navButton";
import styles from "./navbar.module.css"
import Link from "next/link";
import AuthLinks from "../authLinks/authLinks";


export default function Navbar() {
   

    return (
         <div className={styles.container}>
            <div className={styles.blogNameConatiner}>
                <p className={styles.blogName}>Ben's Eats</p>  
            </div>
                
            <div className={styles.links}>
                <Link className={styles.navLink} href="/">Home</Link>
                <Link className={styles.navLink} href="/recipes">Recipes</Link>
                <Link className={styles.navLink} href="/post">Post</Link>
                <div className={styles.navLink}><AuthLinks /></div>
                <NavButton />
               
            </div>
        </div>
    )
}