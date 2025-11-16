import LoginForm from "@/features/login/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900  p-6">
      <div className="w-full max-w-md bg-white  p-8 rounded-2xl shadow-lg border border-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Login to continue to your dashboard
        </p>
        <LoginForm />
      </div>
    </div>
  );
}
