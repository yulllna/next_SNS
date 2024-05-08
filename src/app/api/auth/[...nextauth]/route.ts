import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session }) {
      console.log(session)
      // Send properties to the client, like an access_token and user id from a provider.
      const user = session?.user;
      if(user) {
        session.user = {
          ...user,
          username: user.email?.split('@')[0] || '',
        }
      } 
      
      return session
    }
  },
  pages: {
    signIn: '/auth/signin',
  }
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };