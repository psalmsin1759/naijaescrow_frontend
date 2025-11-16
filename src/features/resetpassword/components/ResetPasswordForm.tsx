"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ResetPasswordRequestDto } from "../dtos/ResetPasswordRequestDto";
import { resetPasswordSchema } from "../validations/resetPasswordSchema";
import { useResetPassword } from "../hooks/useResetPassword";
import { useSearchParams, useRouter } from "next/navigation";

//
export default function ResetPasswordForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const mutation = useResetPassword();
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordRequestDto>({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: { token },
  });

  const onSubmit = async (data: ResetPasswordRequestDto) => {
    setError(null);
    try {
      await mutation.mutateAsync(data);
      setSuccess(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong here");
    }
  };

  if (success) {
    return (
      <div className="text-center p-6 bg-white rounded-xl shadow space-y-4 max-w-md mx-auto">
        <h2 className="text-xl font-bold">Password Reset Successful</h2>
        <p className="text-gray-600 text-sm">
          You can now login with your new password.
        </p>
        <Button onClick={() => router.push("/login")}>Go to Login</Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 p-6 bg-white rounded-xl shadow max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-center">Reset Password</h2>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">New Password</label>
        <Input
          type="password"
          placeholder="Enter new password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-xs">{errors.password.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">Confirm Password</label>
        <Input
          type="password"
          placeholder="Confirm new password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={mutation.isPending}>
        {mutation.isPending ? "Resetting..." : "Reset Password"}
      </Button>
    </form>
  );
}
