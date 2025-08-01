import Categories from "@/components/categories/categories";
import Grid from "../components/grid/grid";
import Featured from "@/components/featured/featured";

export default function Home() {
  return (
    <div>
      <Featured />
      <Categories />
      <Grid />
       
    </div>
  );
}
