"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "When the floods destroyed our home and crops, we had nothing. Feeding Humanity was there within days with food packages that kept my family alive. They didn't just give us meals - they gave us hope.",
    name: "Amina Hassan",
    role: "Bangladesh Flood Survivor",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    quote:
      "I trust Feeding Humanity because my donation goes directly to those in need. The transparency in their reporting gives me confidence that every pound makes a real difference.",
    name: "Sarah Thompson",
    role: "Monthly Donor, UK",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    quote:
      "As a volunteer, I've seen firsthand how efficiently this organization operates. The dedication of the team and the impact on communities is truly remarkable.",
    name: "Ahmed Al-Rashid",
    role: "Field Volunteer, Jordan",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-display">
            TESTIMONIALS
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Hear from the people whose lives have been touched
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-xl p-8 lg:p-12 relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-[var(--primary)]/10" />

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-[var(--primary)]/20">
                  <Image
                    src={current.image}
                    alt={current.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-gray-700 dark:text-gray-300 text-lg italic leading-relaxed mb-6">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-lg">
                    {current.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {current.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center md:justify-end gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-[var(--primary)]"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
