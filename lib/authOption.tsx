import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// http://localhost:3900/api/v1/auth/login
// ${process.env.NEXTAUTH_URL}/api/users/login

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials: any) {
        const res = await fetch(
          `${process.env.NEXT_SERVER_URL}/api/v1/auth/login`,
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          }
        );
        const user = await res.json();
        // console.log("🚀 ~ user:", user)
        if (res.ok && user.data) {
          const newuser = { ...user.data, accessToken: user.accessToken };
          return newuser;
        } else {
          throw new Error("Invalid Login Credentials");
        }
      },
    } as any),
  ],
  pages: {
    signIn: "/login",
  },
  // pages: {
  //   signIn: "/signin",
  //   signOut: "/auth/signout",
  //   error: "/auth/error",
  //   verifyRequest: "/auth/verify-request",
  //   newUser: "/auth/new-user",
  // },
  secret: process.env.NEXTAUTH_SECRET, // Adjust the type based on your environment variable
  session: { strategy: "jwt", maxAge: 1 * 24 * 60 * 60 }, // 1 day
  callbacks: {
    async session({ session, token, user }) {
      return {
        ...session,
        user: token.user,
        // token,
        token: { exp: token.exp, iat: token.iat, jti: token.jti },
      };
    },
    async jwt({ token, user, account, profile }: any) {
      if (typeof user !== "undefined") {
        return {
          ...token,
          user,
        };
      }
      return token;
    },
  },
};
