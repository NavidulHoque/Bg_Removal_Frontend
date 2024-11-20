import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import axios from "axios"
import { url } from "./url"

export const { handlers, signIn, signOut, auth } = NextAuth({

    providers: [Google, GitHub, Credentials({

        authorize: async (credentials) => {

            try {

                const response = await axios.post(url + "/auth/login", {
                    email: credentials.email,
                    password: credentials.password
                })


                if (response.data.status) {
                    return response.data.user
                }

                else {
                    throw new Error(response.data.message)
                }
            }

            catch (error) {
                throw new Error(error as string);
            }
        }
    })],

    // callbacks: {
    //     async signIn({ user, account, profile }) {
    //         // Handle different types of sign-ins
    //         if (account.provider === "credentials") {
    //             // User signed in using credentials
    //             return !!user; // Allow sign-in if a user was returned by `authorize`
    //         }

    //         else {
    //             // User signed in using OAuth provider
    //             try {
    //                 await axios.post(`${process.env.EXPRESS_BACKEND_URL}/api/users`, {
    //                     email: user.email,
    //                     name: user.name,
    //                     image: user.image,
    //                     provider: account.provider,
    //                 });
    //                 return true;
    //             } catch (error) {
    //                 console.error("OAuth user creation error:", error);
    //                 return false;
    //             }
    //         }
    //     },
    // }
})