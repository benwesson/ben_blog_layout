import styles from "./categories.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Categories() {
  return (
    <>
      <div className={styles.categoryTitle}>Explore Recipes</div>
      
      <div className={styles.container}>
        <div className={styles.category}>
            
        <Link href={"/breakfast"} >
          <div>
          <Image
            className={styles.image}
            src="/breakfast.jpg"
            alt="breakfast"
            width={300}
            height={300}
          />
          Breakfast
          </div>
        </Link>
        </div>

        <div className={styles.category}>
        <Link href={"/lunch"} >
          <div>
          <Image
            className={styles.image}
            src="/lunch.jpg"
            alt="lunch"
            width={300}
            height={300}
          />
          Lunch
          </div>
        </Link>
        </div>

        <div className={styles.category}>
        <Link href={"/dinner"} >
          <div>
          <Image
            className={styles.image}
            src="/dinner.jpg"
            alt="dinner"
            width={300}
            height={300}
          />
          Dinner
          </div>
        </Link>
        </div>

        <div className={styles.category}>
        <Link href={"/snacks"} >
          <div>
          <Image
            className={styles.image}
            src="/snacks.jpg"
            alt="snacks"
            width={300}
            height={300}
          />
          Snacks
          </div>
        </Link>
        </div>
       
      </div>
    </>
  );
}

