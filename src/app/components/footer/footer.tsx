import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
	return (
		<div className={styles.grid_container}>
			<div className={styles.card}>
				<div className={styles.logoContainer}>
					<div className={styles.logo}>B</div>
					<div>
						<div className={styles.footerTitle}>{"Ben's Eats"}</div>
					</div>
				</div>

				<div className={styles.description}>
					A blog dedicated to sharing delicious recipes and culinary adventures
					from around the world. Join us on a gastronomic journey as we explore
					flavors, techniques, and stories behind every dish.
				</div>
			</div>
			<div className={styles.listCard}>
				<div className={styles.list}>
					<div className={styles.listTitle}>Navigation</div>

					<div>
						<Link href="/">Home</Link>
					</div>
					<div>
						<Link href="/recipes">Recipes</Link>
					</div>
					<div>
						<Link href="/post">Post</Link>
					</div>
					<div>
						<Link href="/login">Login</Link>
					</div>
				</div>
				<div className={styles.list}>
					<div className={styles.listTitle}>Categories</div>

					<div>
						<Link href="/breakfast">Breakfast</Link>
					</div>
					<div>
						<Link href="/lunch">Lunch</Link>
					</div>
					<div>
						<Link href="/dinner">Dinner</Link>
					</div>
					<div>
						<Link href="/snacks">Snacks</Link>
					</div>
				</div>
				<div className={styles.list}>
					<div className={styles.listTitle}>Socials</div>

					<div>
						<Link href="/">Facebook</Link>
					</div>
					<div>
						<Link href="/">Twitter</Link>
					</div>
					<div>
						<Link href="/">Instagram</Link>
					</div>
					<div>
						<Link href="/">LinkedIn</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
