"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./search.module.css";
import Link from "next/link";
import { searchPosts } from "@/actions/actions";
import { useDebounce } from "@/hooks/useDebounce";

interface SearchResult {
    id: string;
    title: string;
}

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const searchMenuRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(false);

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

    const debouncedSearch = useDebounce(async (query: string) => {
        if (query) {
            console.log(loading, "Searching for:", query);
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

    return (
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
    );
}
