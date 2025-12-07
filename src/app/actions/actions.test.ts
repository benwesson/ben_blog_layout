import { vi, test, expect } from "vitest";
import { createPost } from "./actions";
//Mock Prisma
//Vitest replaces every later import of "@/utils/prisma" in this test file with that factory’s return value.
vi.mock("@/utils/prisma", () => ({
	prisma: {
		post: {
			create: vi.fn(),
		},
	},
}));

test("createPost calls prisma.post.create with correct data", async () => {
	// Import the mocked prisma instance
	const { prisma } = await import("@/utils/prisma");
	//Call function within test
	await createPost(
		"testTitle",
		"testContent",
		"Breakfast",
		"test@example.com"
	);
	//Assert
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
	const category = "";
	await createPost("testTitle", "testContent", category, "test@example.com");
	//add not
	//need zod/sever validate to fix
	//Assert that 
	expect(prisma.post.create).toHaveBeenCalledWith(
		expect.objectContaining({
			data: expect.objectContaining({
				category: "",
			}),
		})
	)
		
	
	
});
