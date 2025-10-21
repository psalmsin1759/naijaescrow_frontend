"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { menuItems } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

 
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-background shadow-sm transition-colors duration-300">
      <div className="flex justify-between items-center  py-3 container mx-auto px-6 md:px-16">
       
        <div>
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={167}
              height={45}
              className="w-32 sm:w-36 md:w-44 lg:w-52 xl:w-[167px] h-auto"
            />
          </Link>
        </div>

       
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-gray-700 dark:text-gray-200 font-medium hover:text-primary transition-colors ${
                pathname === item.path ? "text-primary" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

      
        <div className="flex items-center space-x-3">
         
          <button
            onClick={() =>
              setTheme(currentTheme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {currentTheme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-800" />
            )}
          </button>

        
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition"
            >
              Register
            </Link>
          </div>

        
          <button
            className="md:hidden text-gray-800 dark:text-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

     
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-background border-t border-gray-100 dark:border-gray-800 shadow-md"
          >
            <div className="flex flex-col space-y-4 px-6 py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-gray-700 dark:text-gray-200 font-medium hover:text-primary transition ${
                    pathname === item.path ? "text-primary" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex flex-col space-y-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-center text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-center text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition"
                >
                  Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
