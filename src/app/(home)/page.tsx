import Image from "next/image";
// import styles from "../page.module.css";
import "../globals.css";
import Featured from "../components/featured/featured";
import Categories from "../components/categories/categories";
import Recent from "../components/recent/recent";
export default function Home() {
  return (
    <div>
       <Featured />
       <Categories />
       <Recent />
      
    </div>
  );
}
