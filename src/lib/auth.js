import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO);
const db = client.db('skill');

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE,
            clientSecret: process.env.GOOGLE_ID
        },
    },
    database: mongodbAdapter(db, {

        client
    }),
});