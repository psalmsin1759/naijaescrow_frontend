"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validation/loginSchema";
import { LoginRequestDto } from "../dtos/LoginRequestDto";
import { useAuth } from "../hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginForm() {
  const { login, isPending } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequestDto>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginRequestDto) => {
    await login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
     
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

     
      <div className="space-y-1 relative">
        <label className="text-sm font-medium text-gray-700">Password</label>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          {...register("password")}
        />
        <button
          type="button"
          className="absolute right-2 top-9 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
        </button>
        {errors.password && (
          <p className="text-red-500 text-xs">{errors.password.message}</p>
        )}
      </div>

     
      <div className="text-right">
        <Link
          href="/forgot-password"
          className="text-sm text-blue-600 hover:underline"
        >
          Forgot password?
        </Link>
      </div>

     
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </Button>

     
      <div className="flex items-center gap-2">
        <div className="h-px bg-gray-300 w-full" />
        <span className="text-gray-400 text-xs">OR</span>
        <div className="h-px bg-gray-300 w-full" />
      </div>

     
      <p className="text-center text-sm">
        Don’t have an account?{' '}
        <Link
          href="/register"
          className="text-blue-600 hover:underline font-medium"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}