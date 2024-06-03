import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { addUser } from "@/service/user";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user: { id, name, image, email } }) {
      if(!email) {
        return false;
      }
      addUser({
        id,
        name: name || '',
        image,
        email,
        username: email?.split('@')[0] || ''
      });
      return true
    },
    async session({ session, token }) {
      // console.log(session)
      // Send properties to the client, like an access_token and user id from a provider.
      const user = session?.user;
      if(user) {
        session.user = {
          ...user,
          username: user.email?.split('@')[0] || '',
          id: token.id as string,
          // id: token.sub - id 가져올 때 이렇게도 구현 가능
        }
      } 
      return session
    },
    async jwt({token, user}) {
        if(user) {
          token.id = user.id;
        }
        return token;
    },
  },
  pages: {
    signIn: '/auth/signin',
  }
};