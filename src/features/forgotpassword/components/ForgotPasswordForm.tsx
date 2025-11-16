"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { ForgotPasswordRequestDto } from "@/features/forgotpassword/dtos/ForgotPasswordRequestDto";
import { forgotPasswordSchema } from "@/features/forgotpassword/validations/forgotPasswordSchema";
import { useForgotPassword } from "../hooks/useForgotPassword";

export default function ForgotPasswordForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutation = useForgotPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordRequestDto>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordRequestDto) => {
    setError(null);
    try {
      const res = await mutation.mutateAsync(data);
      console.log(res.message); // optional: show API message
      setSubmitted(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-6 bg-white rounded-xl shadow space-y-4 max-w-md mx-auto">
        <h2 className="text-xl font-bold">Check your email</h2>
        <p className="text-gray-600 text-sm">
          We have sent a password reset link to your email.
        </p>
        <Button onClick={() => setSubmitted(false)}>Back</Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 p-6 bg-white rounded-xl shadow max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <Input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={mutation.isPending}>
        {mutation.isPending ? "Sending..." : "Send Reset Link"}
      </Button>

      <p className="text-center text-sm">
        Remember your password?{" "}
        <Link
          href="/login"
          className="text-blue-600 hover:underline font-medium"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
