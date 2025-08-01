"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/authLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { searchPosts } from "@/actions/actions";
import { useDebounce } from "@/hooks/useDebounce";
import { IoCloseOutline } from "react-icons/io5";

interface SearchResult {
  id: string;
  title: string;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchMenuRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  if (menuOpen) {
  } else {
  }

  useEffect(() => {
    function handleClickAway(event: MouseEvent) {
      if (
        searchMenuRef.current &&
        !searchMenuRef.current.contains(event.target as Node)
      ) {
        setSearchQuery("");
        setSearchResults([]);
      }
    }

    if (searchQuery) {
      document.addEventListener("mousedown", handleClickAway);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [searchQuery]);

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const debouncedSearch = useDebounce(async (query: string) => {
    if (query) {
      setLoading(true);
      const results = await searchPosts(query);
      setLoading(false);
      setSearchResults(results);
      console.log("Search Results:", results);
    }
  }, 500);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const query = event.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  // Reset menu state when screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 850) {
        setMenuOpen(false); // Close the sidebar when screen is large
      }
    };

    window.addEventListener("resize", handleResize);

    // Also check on initial load
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>
          <p className={styles.titleText}>Ben's Eats</p>
        </div>
        <div className={styles.navbar}>
          <div className={styles.linkContainer}>
            <div className={styles.links}>
              <div>
                <Link className={styles.navLink} href="/">
                  Home
                </Link>
              </div>
              <div>
                <Link className={styles.navLink} href="/recipes">
                  Recipes
                </Link>
              </div>
              <div>
                <Link className={styles.navLink} href="/post">
                  Post
                </Link>
              </div>
              <div>
                <AuthLinks />
              </div>
            </div>
          </div>

          <div className={styles.menuButtonContainer}>
            <button className={styles.menuButton} onClick={handleMenuClick}>
              <GiHamburgerMenu size={24} />
            </button>
          </div>
          <div className={styles.search}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search..."
              onChange={handleSearch}
              value={searchQuery}
            />
            {searchQuery && (
              <div ref={searchMenuRef} className={styles.searchMenu}>
                <div className={styles.searchResults}>
                  {searchResults.length > 0 ? (
                    searchResults.map((post) => (
                      <Link
                        className={styles.searchResult}
                        key={post.id}
                        href={`/${post.id}`}
                      >
                        {post.title}
                      </Link>
                    ))
                  ) : (
                    <span className={styles.searchResult}>
                      No results found.
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div
            className={styles.sidebar}
            style={{ display: menuOpen ? "block" : "none" }}
          >
            

            <div className={styles.sidebarLinks}>
                <div className={styles.close} onClick={handleMenuClick}>
                  <IoCloseOutline size={32} />
              </div>
              <div>
                <Link className={styles.navLink} href="/">
                  Home
                </Link>
              </div>
              <div>
                <Link className={styles.navLink} href="/recipes">
                  Recipes
                </Link>
              </div>
              <div>
                <Link className={styles.navLink} href="/post">
                  Post
                </Link>
              </div>
              <div>
                <AuthLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
