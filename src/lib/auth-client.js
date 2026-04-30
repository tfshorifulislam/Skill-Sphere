import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    
    baseURL: "https://skill-sphere-topaz.vercel.app",
    baseURL: "http://localhost:3000"
})

export const { signIn, signUp, useSession } = createAuthClient()