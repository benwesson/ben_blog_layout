import styles from "./categories.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Categories() {
    
    return (
        <>
            <h1>Categories</h1>
            <div className={styles.container}>
            <div className={styles.category}>
                    <div className={styles.imageContainer}>
                        <Image src="/breakfast.jpg" alt="Breakfast" width={300} height={300} className={styles.image}/>
                    </div>
                    
                    <Link href={"/breakfast"} className={styles.read}><h1>Breakfast</h1></Link>
            </div>
            <div className={styles.category}>
                    <div className={styles.imageContainer}>
                        <Image src="/lunch.jpg" alt="lunch" width={300} height={300} className={styles.image} />
                    </div>

                    
                    <Link href={"/lunch"} className={styles.read}><h1>Lunch</h1></Link>
            </div>
            <div className={styles.category}>
                    <div className={styles.imageContainer}>
                        <Image src="/dinner.jpg" alt="dinner" width={300} height={300} className={styles.image} />
                    </div>
                    
                    <Link href={"/dinner"} className={styles.read}><h1>Dinner</h1></Link>
            </div>
            <div className={styles.category}>
                    <div className={styles.imageContainer}>
                        <Image src="/snacks.jpg" alt="snacks" width={300} height={300} className={styles.image} />
                    </div>
                    
                    <Link href={"/snacks"} className={styles.read}><h1>Snacks</h1></Link>
            </div>
            </div>
        </>
    );
}