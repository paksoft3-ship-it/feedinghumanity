"use client";

import Link from "next/link";
import { Utensils, Droplets, Users, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const focusAreas = [
  {
    icon: Utensils,
    title: "Food Distribution",
    description: "Emergency meals & food packages",
    href: "/projects?category=food",
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    icon: Droplets,
    title: "Water & Sanitation",
    description: "Clean water access programs",
    href: "/projects?category=water",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: Users,
    title: "Community Development",
    description: "Sustainable local solutions",
    href: "/projects?category=community",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Relief",
    description: "Rapid crisis response",
    href: "/projects?category=emergency",
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
  },
];

export default function FocusAreas() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-display">
            KEY FOCUS AREAS
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            Our programs address the most critical needs of vulnerable communities worldwide
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {focusAreas.map((area) => (
            <Link key={area.title} href={area.href}>
              <Card
                variant="bordered"
                className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group h-full"
              >
                <CardContent className="p-0">
                  <div
                    className={`w-16 h-16 mx-auto ${area.bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <area.icon className={`w-8 h-8 ${area.color}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
