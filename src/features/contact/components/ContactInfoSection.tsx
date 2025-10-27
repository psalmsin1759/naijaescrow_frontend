"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useAnimateOnScroll } from "@/features/contact/hooks/useAnimateOnScroll";

export function ContactFormSection() {
  const { ref, visible } = useAnimateOnScroll(0.3);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white"
        >
          Send Us a Message
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 bg-muted/30 dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800"
        >
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              onChange={handleChange}
              value={formData.message}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
