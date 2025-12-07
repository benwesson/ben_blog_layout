"use client";
import React from "react";
import { render, screen } from "@testing-library/react";
import { vi, test, expect } from "vitest";
import Navbar from "./navbar";

// mock next-auth so useSession works without SessionProvider
vi.mock("next-auth/react", () => ({
    useSession: vi.fn(() => ({ status: "unauthenticated", data: null })),
    signIn: vi.fn(),
    signOut: vi.fn(),
}));
test("renders Navbar with title", () => {
	render(<Navbar />);
	const titleElement = screen.getByLabelText("Page Title: Ben's Eats");
	expect(titleElement).toBeInTheDocument();

});