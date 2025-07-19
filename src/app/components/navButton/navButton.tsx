"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./navButton.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/authLinks";

export default function NavButton() {
   return (
    <div>
        <button className={styles.navButton}>
            <GiHamburgerMenu size={24} />
        </button>
    </div>
   )
}