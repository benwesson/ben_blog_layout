import styles from "./categories.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Categories() {
    return (
        <>
            <div className={styles.categoryTitle}>Explore Recipes</div>

            <div className={styles.container}>
                <div className={styles.category}>
                    <Link href="/category/Breakfast">
                        <div>
                            <Image
                                className={styles.image}
                                src="/breakfast.jpg"
                                alt=""
                                width={300}
                                height={300}
                            />
                            Breakfast
                        </div>
                    </Link>
                </div>

                <div className={styles.category}>
                    <Link href={`/category/Lunch`}>
                        <div>
                            <Image
                                className={styles.image}
                                src="/lunch.jpg"
                                alt=""
                                width={300}
                                height={300}
                            />
                            Lunch
                        </div>
                    </Link>
                </div>

                <div className={styles.category}>
                    <Link href={`/category/Dinner`}>
                        <div>
                            <Image
                                className={styles.image}
                                src="/dinner.jpg"
                                alt=""
                                width={300}
                                height={300}
                            />
                            Dinner
                        </div>
                    </Link>
                </div>

                <div className={styles.category}>
                    <Link href={`/category/Snacks`}>
                        <div>
                            <Image
                                className={styles.image}
                                src="/snacks.jpg"
                                alt=""
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
