"use client";

import { motion } from "framer-motion";
import { contactData } from "../data/contactData";
import { useAnimateOnScroll } from "@/features/contact/hooks/useAnimateOnScroll";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactInfoSection() {
  const { ref, visible } = useAnimateOnScroll(0.2);

  return (
    <section ref={ref} className="py-24 bg-muted/30 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white"
        >
          Contact Information
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Address</h3>
            <p className="text-gray-600 dark:text-gray-400">{contactData.address}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">{contactData.email}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <p className="text-gray-600 dark:text-gray-400">{contactData.phone}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
            <p className="text-gray-600 dark:text-gray-400">{contactData.workingHours}</p>
          </motion.div>
        </div>

        {/* Optional: Embed Google Map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9572763935633!2d3.3915!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4a2a8e3b1f1%3A0xfcb1da0c75cc647!2sLagos!5e0!3m2!1sen!2sng!4v1703762988939!5m2!1sen!2sng"
            width="100%"
            height="350"
            loading="lazy"
            className="w-full border-none"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
