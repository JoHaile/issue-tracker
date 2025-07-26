import { sendEmailVerification } from "@/mail/sendEmailVerification";
import { prisma } from "@/prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mysql",
  }),

  emailVerification: {
    sendVerificationEmail: async ({ url, user }) => {
      await sendEmailVerification(url, user);
    },
    autoSignInAfterVerification: true,
  },

  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    minPasswordLength: 6,
    requireEmailVerification: true,
  },

  account: {
    accountLinking: {
      enabled: true,
    },
  },
  plugins: [nextCookies()],
});
