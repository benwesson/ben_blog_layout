"use client";
import React from "react";
import { render, screen } from "@testing-library/react";
import { vi, test, expect } from "vitest";
import AuthLinks from "./authLinks.jsx";
import { useSession } from "next-auth/react";
import styles from "./authLinks.module.css";

vi.mock("next-auth/react", () => ({
	useSession: vi.fn(),
	signOut: vi.fn(),
}));

test("renders Login link when unauthenticated", () => {
	useSession.mockReturnValue({ status: "unauthenticated" });

	render(<AuthLinks />);

	const link = screen.getByRole("link", { name: /login/i });
	expect(link.closest("a")).toHaveClass(styles.loginLink);
});

test("renders Logout div when authenticated", () => {
	useSession.mockReturnValue({ status: "authenticated" });
	
	render(<AuthLinks />);

	const logoutDiv = screen.getByText(/logout/i);
	expect(logoutDiv).toHaveClass(styles.logoutLink);
});