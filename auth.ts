import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./lib/db";
import { account, session, user, verification } from "./lib/db/schema";

export const auth = betterAuth({

    database: drizzleAdapter(db, {
        provider: "pg",
        schema:{
            verification,
            account,
            user,
            session
        }
    }),

    socialProviders: {
        google: { 
            prompt: 'select_account',
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET as string, 
        }, 
    }

});