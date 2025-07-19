import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
    return (
        <div className={styles.grid_container}>
            <div className={styles.card}>
                <div className={styles.logoContainer}>
                    <div><p className={styles.footerTitle}>Ben's Eats</p></div>
                    <div><Image className={styles.logo} width={100} height={100} src="/logo.png" alt="Logo" /></div>
                </div>
                
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                    Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                    In id cursus mi pretium tellus duis convallis.
                    Tempus leo eu aenean sed diam urna tempor.

                </p>
            </div>
            <div className={styles.listCard}>
                <div className={styles.list}>
                    <p>Navigation</p>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className={styles.list}>
                    <p>Categories</p>
                    <ul>
                        <li><Link href="/category/food">Food</Link></li>
                        <li><Link href="/category/drinks">Drinks</Link></li>
                        <li><Link href="/category/desserts">Desserts</Link></li>
                    </ul>
                </div>
                <div className={styles.list}>
                    <p>Socials</p>
                    <ul>
                        <li><Link href="/socials/facebook">Facebook</Link></li>
                        <li><Link href="/socials/twitter">Twitter</Link></li>
                        <li><Link href="/socials/instagram">Instagram</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}










































// "use client";
// import styles from "./footer.module.css"
// import Image from "next/image";
// import { useState } from "react";

// import Link from "next/link";
// import AuthLinks from "../authLinks/authLinks";
// import { GiHamburgerMenu } from "react-icons/gi";

// export default function Footer() {
  

//   return (
//     <>
//     <div className={styles.footer}>
//               <div className={styles.footerContent}>
//                   <div className={styles.footerInfo}>
//                     <div className={styles.logo}>
//                     <Image src="/rabbit.jpg"alt="/" width={50} height={50} className={styles.image} />
//                     <h1 className={styles.logoText}>Ben's Blog</h1>
                    
//                   </div>
//                   <p className={styles.desc}> 
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//                     Ut enim ad minim veniam,
//                   </p>

//                 </div>
                
              
//                 <div className={styles.listContainer}>
//                   <div className={styles.list}>
//                     <p>Categories</p>
//                     <Link href="/breakfast">BreakFast</Link>
//                     <Link href="/lunch">Lunch</Link>
//                     <Link href="/dinner">Dinner</Link>
//                     <Link href="/snacks">Snacks</Link>
//                   </div>

//                   <div className={styles.list}>
//                     <p>Navigation</p>
//                     <Link href="/Home">Home</Link>
//                     <Link href="/Recipes">Recipes</Link>
//                     <Link href="/Post">Post</Link>
//                     <Link href="/Login">Login</Link>
//                   </div>

//                   <div className={styles.list}>
//                     <p>Socials</p>
//                     <Link href="/Instagram">Instagram</Link>
//                     <Link href="/Facebook">Facebook</Link>
//                     <Link href="/Twitter">Twitter</Link>
//                     <Link href="/LinkedIn">LinkedIn</Link>
//                   </div>
//                 </div>
//               </div>
//             </div> 
//     </>
//   );
// }