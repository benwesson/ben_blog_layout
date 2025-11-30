import NextAuth from "next-auth"
import Google from "next-auth/providers/google" 
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./utils/prisma"

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Google],
})