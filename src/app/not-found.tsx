"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary/10 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center px-6">
      {/* Animation Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto"
      >
        {/* Illustration */}
        <div className="mb-8">
          <Image
            src="/images/404.png"
            alt="404 Not Found"
            width={400}
            height={300}
            className="mx-auto"
          />
        </div>

       
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          The page you’re looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 shadow-md"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium transition-all duration-300"
          >
            Contact Support
          </Link>
        </div>
      </motion.div>

      {/* Floating subtle animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.15, scale: 1.05 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 6 }}
        className="absolute bottom-10 text-[6rem] text-gray-300 dark:text-gray-700 font-extrabold select-none pointer-events-none"
      >
        404
      </motion.div>
    </main>
  );
}
