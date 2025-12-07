import { vi, test, expect } from "vitest";
import { createPost } from "./actions";

vi.mock("@/utils/prisma", () => ({
	prisma: {
		post: {
			create: vi.fn(),
		},
	},
}));

test("createPost calls prisma.post.create with correct data", async () => {
	const { prisma } = await import("@/utils/prisma");

	await createPost(
		"testTitle",
		"testContent",
		"Breakfast",
		"test@example.com"
	);

	expect(prisma.post.create).toHaveBeenCalledWith(
		expect.objectContaining({
			data: expect.objectContaining({
				title: "testTitle",
				content: "testContent",
				category: "Breakfast",
				userEmail: "test@example.com",
			}),
		})
	);
	
});

test("does NOT call prisma.post.create with empty userEmail", async () => {
	const { prisma } = await import("@/utils/prisma");
	const category = "Breakfast";
	await createPost(
		"testTitle",
		"testContent",
		category,
		"test@example.com"
	);

	expect(prisma.post.create).not.toHaveBeenCalledWith(
		expect.objectContaining({
			data: expect.objectContaining({
				userEmail: "",
			}),
		})
	);
});
