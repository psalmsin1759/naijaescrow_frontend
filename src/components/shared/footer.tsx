"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { socialLinks, footerLinks } from "@/lib/constants";
import { JSX } from "react";

export default function Footer() {
  const icons: Record<string, JSX.Element> = {
    facebook: <FaFacebookF size={18} />,
    twitter: <FaTwitter size={18} />,
    instagram: <FaInstagram size={18} />,
    linkedin: <FaLinkedinIn size={18} />,
  };

  return (
    <footer className="bg-gray-50 dark:bg-background text-gray-700 dark:text-gray-300 py-10 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-16">
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={180}
                height={50}
                className="w-36 sm:w-44 h-auto mb-3"
              />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mb-5">
              NaijaEscrow helps you securely transact and protect your online payments. 
              Fast, transparent, and trusted escrow service for Nigerians and beyond.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition"
                >
                  {icons[link.icon]}
                </Link>
              ))}
            </div>
          </div>

        
          <div className="grid grid-cols-3 gap-6">
          
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Important
              </h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.important.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="hover:text-primary transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Support
              </h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="hover:text-primary transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Legal
              </h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="hover:text-primary transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      
        <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-5 text-center text-xs text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} NaijaEscrow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
