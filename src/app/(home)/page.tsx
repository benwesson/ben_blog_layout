import Categories from "@/components/categories/categories";
import Grid from "../components/grid/grid";
import Featured from "@/components/featured/featured";
import { getRecentPosts } from "@/actions/actions";
import { Post } from "@/actions/actions";

export default async function Home() {
	const posts = await getRecentPosts();
	if (!posts) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				<Featured  posts={posts as Post } />
				<Categories />
				<Grid posts={posts as Post} />
			</div>
		);
	}
}
