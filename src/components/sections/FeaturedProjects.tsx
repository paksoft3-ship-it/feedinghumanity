"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";

const featuredProjects = [
  {
    id: "northern-syria-winter-relief",
    title: "Northern Syria Winter Relief",
    description:
      "Assalamu Alaikum brothers and sisters, The flights are booked and the bags are being packed. On Tuesday, February 17th, I will be travelling to Northern Syria to hand-deliver your donations to the families in Al Madina Camp. Right now, there are 1,500 families living in thin tents, enduring a biting winter cold. A hot meal there isn’t just food; it’s a lifeline. We will be providing freshly cooked hot meals and emergency food parcels.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    category: "Emergency",
    raised: 0,
    goal: 50000,
    donors: 0,
    isUrgent: true,
  },
  {
    id: "urban-food-banks",
    title: "Urban Food Banks & Community Pantries",
    description:
      "Establishing local distribution centers in underserved urban areas to ensure daily access to nutritious meals for families in need.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop",
    category: "Community",
    raised: 75000,
    goal: 100000,
    donors: 354,
  },
  {
    id: "global-emergency-relief",
    title: "Global Emergency Relief Fund",
    description:
      "Rapid response funding for immediate aid in regions affected by natural disasters and humanitarian crises occurring right now.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop",
    category: "Emergency",
    raised: 200000,
    goal: 500000,
    donors: 118,
    isUrgent: true,
  },
  {
    id: "sustainable-farming",
    title: "Sustainable Farming Initiative",
    description:
      "Empowering communities with tools and training for sustainable agriculture to ensure long-term food security.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop",
    category: "Sustainability",
    raised: 15000,
    goal: 100000,
    donors: 45,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-display">
              FEATURED PROJECTS
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Support our most impactful initiatives and make a real difference
            </p>
          </div>
          <Link href="/projects">
            <Button variant="outline" className="group">
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
