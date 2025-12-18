import Grid from "@/components/grid/grid";
import { getPostsByCategory } from "@/actions/actions";
import type { Post } from "@/actions/actions";

type PageProps = {
    params: {
        category: string;
    };
};

export default async function CategoryPage({ params }: PageProps) {
    const { category } = await params;
    const posts = await getPostsByCategory(category);
    if (!posts) {
        return (
            <p role="status" aria-live="polite">
                No content to show
            </p>
        );
    } else {
        return (
            <section aria-label={`Recipes in the ${category} category`}>
                <Grid posts={posts as Post} />
            </section>
        );
    }
}
