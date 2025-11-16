import { Suspense } from "react";
import ResetPasswordForm from "@/features/resetpassword/components/ResetPasswordForm";

export const metadata = {
  title: "Reset Password | NaijaEscrow",
  description: "Reset your password securely.",
};

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full max-w-md">
          <ResetPasswordForm />
        </div>
      </Suspense>
    </div>
  );
}
