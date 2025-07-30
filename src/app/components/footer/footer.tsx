import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <div className={styles.grid_container}>
      <div className={styles.card}>
        <div className={styles.logoContainer}>
          
          <div>
            <Image
              className={styles.logo}
              width={100}
              height={100}
              src="/rabbit.jpg"
              alt="Logo"
            />
          </div>
          <div>
            <div className={styles.footerTitle}>Ben's Eats</div>
          </div>
        </div>

        <div className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor.
        </div>
      </div>
      <div className={styles.listCard}>
        <div className={styles.list}>
          <div className={styles.listTitle}>Navigation</div>

            <div>
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/about">Recipes</Link>
            </div>
            <div>
              <Link href="/contact">Post</Link>
            </div>
            <div>
              <Link href="/contact">Login</Link>
            </div>

        </div>
        <div className={styles.list}>
          <div className={styles.listTitle}>Categories</div>

            <div>
              <Link href="/">Breakfast</Link>
            </div>
            <div>
              <Link href="/about">Lunch</Link>
            </div>
            <div>
              <Link href="/contact">Dinner</Link>
            </div>
            <div>
              <Link href="/contact">Snacks</Link>
            </div>

        </div>
        <div className={styles.list}>
          <div className={styles.listTitle}>Socials</div>

            <div>
              <Link href="/">Facebook</Link>
            </div>
            <div>
              <Link href="/about">Twitter</Link>
            </div>
            <div>
              <Link href="/contact">Instagram</Link>
            </div>
            <div>
              <Link href="/contact">LinkedIn</Link>
            </div>

        </div>
        
      </div>
    </div>
  );
}

