import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({
    authorization: {
    params: {
    prompt: "consent",
    access_type: "offline",
    response_type: "code",
    },
    },
   })],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token }: { session: any, token: any }) {
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, account , user }: { token: any, account: any, user: any }) {
      if (account) {
        token.id = user.id;
      }
      return token;
    },
  },
})