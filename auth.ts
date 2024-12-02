import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import axios from "axios"
import { url } from "./url"
import { AUTH_GITHUB_ID, AUTH_GITHUB_SECRET, AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET, NEXT_PUBLIC_ENVIRONMENT } from "./env"


export const { handlers, signIn, signOut, auth } = NextAuth({

    providers: [
        Google({
            clientId: AUTH_GOOGLE_ID,
            clientSecret: AUTH_GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                },
            },
        }),
        GitHub({
            clientId: AUTH_GITHUB_ID,
            clientSecret: AUTH_GITHUB_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                },
            },
        }),
        Credentials({

            authorize: async (credentials) => {

                try {
                    const response = await axios.post(url + "/auth/login", {
                        email: credentials.email,
                        password: credentials.password
                    })

                    let user

                    if (response.data.status) {

                        user = response.data.user
                        return user
                    }

                    else {
                        return null
                    }

                }

                catch {
                    return null
                }
            }
        })
    ],

    cookies: {
        sessionToken: {
            name: "next-auth.session-token",
            options: {
                httpOnly: true,
                secure: NEXT_PUBLIC_ENVIRONMENT === 'production', // Use secure cookies in production
                sameSite: NEXT_PUBLIC_ENVIRONMENT === "development" ? "strict" : "none",
                path: '/',
                domain: NEXT_PUBLIC_ENVIRONMENT === 'production' ? 'bgremoval23.netlify.app' : undefined 
            },
        },
    },

    callbacks: {
        async signIn({ user, account }) {

            if (account?.provider === "credentials") {

                return !!user; // Allow sign-in if a user was returned by `authorize`
            }

            else {
                // User signed in using OAuth provider
                try {
                    await axios.post(url + '/auth/registration', {
                        email: user.email,
                        username: user.name,
                        photo: user.image,
                        provider: account?.provider,
                    })

                    return true;
                }

                catch (error) {
                    console.error(error);
                    return false;
                }
            }
        },

        jwt({ token, account }) {
            if (account) { // Account is available during sign-in
                token.provider = account.provider
            }
            return token
        },

        session({ session, token }) {
            session.user.provider = token.provider
            return session
        },
    }
})