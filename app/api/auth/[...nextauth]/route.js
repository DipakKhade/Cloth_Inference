import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import connecttoMongoDB from "../../../../lib/mongodb";
import User from "../../../../models/users";
import bcrypt from "bcryptjs";
const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(Credentials) {
        const { email, password } = this.credentials;

        try {
          await connecttoMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) {
            return null;
          }

          return user;
        } catch (error) { console.log(error)}
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
