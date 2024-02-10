import { nextAuthOpitions } from "@/app/lib/next-auth/options";
import NextAuth from "next-auth/next";

const handler = NextAuth(nextAuthOpitions);

export { handler as GET, handler as POST };