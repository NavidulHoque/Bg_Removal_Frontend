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
})