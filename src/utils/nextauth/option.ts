import { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GithubCredential from 'next-auth/providers/github';

import prisma from '@/db/utils/prisma';

export const options: AuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { type: 'email', label: 'Email', placeholder: 'enter your email' },
        password: { type: 'password', label: 'Password', placeholder: 'Enter your password' },
      },
      authorize: async (credential) => {
        const email = credential?.email;
        const password = credential?.password;

        const findUser = await prisma.user.findUnique({
          where: {
            email,
            password,
          },
        });

        if (findUser) {
          return {
            id: findUser.id,
            name: findUser.name,
            email: findUser.email,
            image: findUser.image,
          };
        }

        return null;
      },
    }),
    GithubCredential({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    signIn: async () => {
      // const findUser = await prisma.user.findUnique({
      //   where: {
      //     email: user.email as string,
      //   },
      // });

      // if (!findUser) {
      //   await prisma.user.create({
      //     name: user.name,
      //     email: user.email as string,
      //     image: user.image,
      //   });
      // }
      return true;
    },
    // session: async ({ session }) => {
    //   if (session.user) {
    //     const findUser = await prisma.user.findUnique({
    //       where: {
    //         email: user.email as string,
    //       },
    //     });

    //     if (findUser) {
    //       session.user.id = findUser.id;
    //     }
    //   }

    //   return session;
    // },
  },
};
