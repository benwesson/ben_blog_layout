import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return(
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.header}>
                    
                
                    <div className={styles.logo}>
                        <Image src="/rabbit.jpg"alt="/" width={50} height={50} className={styles.image} />
                        <h1 className={styles.logoText}>Ben's Blog</h1>
                    </div>
                    <div className={styles.icons}>
                        
                        <Image src="/facebook.png" alt="facebook" width={18} height={18}/>
                        <Image src="/instagram.png" alt="facebook" width={18} height={18}/>
                        <Image src="/youtube.png" alt="facebook" width={18} height={18}/>
                    </div>
                </div>
                <p className={styles.desc}> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, 
                </p>
                
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Recipes</Link>
                    <Link href="/">Post</Link>
                    <Link href="/">Login</Link>
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/breakfast">BreakFast</Link>
                    <Link href="/lunch">Lunch</Link>
                    <Link href="/dinner">Dinner</Link>
                    <Link href="/snacks">Snacks</Link>
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Socials</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Youtube</Link>
                    <Link href="/">Contact</Link>
                </div>
            </div>
        </div>
    )
}