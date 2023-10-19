import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { prisma } from "@/prisma/prisma"
import GithubProvider from "next-auth/providers/github"

export const authOptions:NextAuthOptions = {
    adapter:PrismaAdapter(prisma),
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
      }),
      
    ],
    secret:process.env.NEXTAUTH_SECRET,
    session:{
      strategy:'jwt'
    },
    debug:process.env.NODE_ENV === 'development'
  }