import NextAuth, { User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connectToDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

interface CustomUser extends User {
  id: string;
  username: string;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Please enter username and password');
        }

        try {
          await connectToDB();
          const admin = await Admin.findOne({ username: credentials.username });

          if (!admin) {
            throw new Error('Invalid username');
          }

          const isPasswordValid = await bcrypt.compare(credentials.password, admin.password);

          if (!isPasswordValid) {
            throw new Error('Invalid password');
          }

          return {
            id: admin._id.toString(),
            username: admin.username,
          } as CustomUser;
        } catch (error) {
          console.error('Auth error:', error);
          throw error;
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as CustomUser).id;
        token.username = (user as CustomUser).username;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).username = token.username;
      }
      return session;
    }
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
});

export { handler as GET, handler as POST }; 