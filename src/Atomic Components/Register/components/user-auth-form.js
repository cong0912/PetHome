import React from "react";
import { cn } from "../../../lib/utils";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
const formLoginSchema = z
  .object({
    username: z.string().min(3, {
      message: "username ít nhất 3 ký tự",
    }),
    email: z.string().email({
      message: "Email không hợp lệ",
    }),
    phone: z.string({ message: "Phone không hợp lệ" }).max(10, {
      message: "phone phải 10 số",
    }),

    password: z.string().min(3, {
      message: "Password ít nhất 3 ký tự",
    }),
    confirmPassword: z.string().min(3),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords không đúng !",
      path: ["confirmPassword"],
    }
  );
export default function UserAuthForm({ className, ...props }) {
  const [isLoading, setIsLoading] = React.useState(false);
  // const navigate = useNavigate();

  // 1. Define  form.
  const form = useForm({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });
  // 2. Define a submit handler. ok không
  async function onSubmit(values) {
    setIsLoading(true);
    toast.success("Log in success", {
      position: "top-left",
    });
    setIsLoading(false);
  }

  return (
    <div className={cn("grid gap-6 space-y-4", className)} {...props}>
      <Form {...form}>
        <form
          method="POST"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} type="username" />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} type="phone" />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>confirm password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isLoading}
            className="w-full text-white bg-primary hover:bg-primary/90"
          >
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
