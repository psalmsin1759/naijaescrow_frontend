"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/features/testimonials/data/testimonials";
import { useAnimateOnScroll } from "@/features/testimonials/hooks/useAnimateOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSection() {
  const { ref, visible } = useAnimateOnScroll(0.2);

  return (
    <section
      ref={ref}
      className="py-20  text-center"
      id="testimonials"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
      >
        What Our Clients Say
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-12"
      >
        Trusted by professionals and businesses across multiple industries.
      </motion.p>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-4xl mx-auto px-4 md:px-6"
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-muted/30 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-gray-100 dark:border-gray-700 shadow-md">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>

                {/* Message */}
                <p className="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed mb-6 max-w-2xl">
                  “{t.message}”
                </p>

                {/* Author */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
