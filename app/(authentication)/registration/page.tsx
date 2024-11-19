"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"


const formSchema = z.object({

  username: z.string()
    .min(3, { message: "Username must be at least 3 characters." })
    .regex(/^[a-zA-Z0-9]+$/, { message: "Username can only contain alphanumeric characters (no special characters or spaces allowed)." }),

  email: z.string().email({ message: "Invalid email address" }),

  password: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/^(?=.*\d)(?=.*[\W_]).{8,}$/, { message: "Password must contain at least one number and one special character" })
})


export default function Registration() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
  })

  const { isSubmitting } = form.formState;


  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
  }

  return (
    <div className="space-y-4">

      <Form {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (

              <FormItem>

                <FormLabel className="text-lg">Username</FormLabel>

                <FormControl>

                  <Input
                    type="text"
                    placeholder="Enter your name"
                    disabled={isSubmitting}
                    {...field}
                  />

                </FormControl>

                <FormMessage />

              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (

              <FormItem>

                <FormLabel className="text-lg">Email</FormLabel>

                <FormControl>

                  <Input
                    type="email"
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                    {...field}
                  />

                </FormControl>

                <FormMessage />

              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (

              <FormItem>

                <FormLabel className="text-lg">Password</FormLabel>

                <FormControl>

                  <Input
                    type="password"
                    placeholder="Enter your password"
                    disabled={isSubmitting}
                    {...field}
                  />

                </FormControl>

                <FormMessage />

              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
          >
            Register
          </Button>

        </form>

      </Form>

      <p className="space-x-1">
        <span>Already have an account?</span>
        <Link href="/login" className="text-blue-500 underline">Signin</Link>
      </p>

    </div>
  )
}
