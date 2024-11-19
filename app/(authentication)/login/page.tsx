/* eslint-disable react/no-unescaped-entities */
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

  email: z.string().email({ message: "Invalid email address" }),
  password: z.string()
})

export default function Login() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
            Login
          </Button>

        </form>

      </Form>

      <p className="space-x-1">
        <span>Don't have an account?</span>
        <Link href="/registration" className="text-blue-500 underline">Register</Link>
      </p>

    </div>
  )
}
