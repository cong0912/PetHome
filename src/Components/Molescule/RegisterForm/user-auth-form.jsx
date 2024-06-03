import React from "react";

import { cn } from "lib/utils.js";
import { Input } from "Components/ui/input";
import { Button } from "Components/ui/button";
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
} from "Components/ui/form";
//check chuan form dien thoai viet nam
const phoneRegex = new RegExp(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/);
const formLoginSchema = z
  .object({
    username: z
      .string()
      .min(3, {
        message: "username ít nhất 3 ký tự",
      })
      .max(30, { message: " username không quá 30 kí tự" }),
    email: z
      .string()
      .min(1, {
        message: "không được bỏ trống",
      })
      .email({
        message: "Email không hợp lệ",
      }),
    phone: z
      .string()
      .min(1, {
        message: "không được bỏ trống",
      })
      .regex(phoneRegex, {
        message: "Phone không hợp lệ",
      }),
    password: z
      .string()
      .regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/, {
        message:
          "pass phải ít nhất 6 kí tự bao gồm(chữ in hoa, chữ thường, kí tự đặt biệt, và số)",
      }),

    confirmPassword: z.string().min(1, {
      message: "không được bỏ trống",
    }),
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
      sex: "nam",
      dateOfBirth: "",
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
            {isLoading ? "Loading..." : "Register"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
