"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Filter, ArrowRight, Clock, AlertTriangle, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import { Card, CardContent } from "@/components/ui/Card";

const projects = [
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
    region: "Middle East",
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
    region: "Global",
  },
  {
    id: "global-emergency-relief",
    title: "Global Emergency Relief Fund",
    description:
      "Rapid response funding for immediate aid in regions affected by natural disasters and humanitarian crises.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop",
    category: "Emergency",
    raised: 200000,
    goal: 500000,
    donors: 118,
    isUrgent: true,
    region: "Global",
  },
  {
    id: "sustainable-farming",
    title: "Sustainable Farming Initiative",
    description:
      "Empowering communities with tools and training for sustainable agriculture.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop",
    category: "Sustainability",
    raised: 15000,
    goal: 100000,
    donors: 45,
    region: "Africa",
  },
  {
    id: "gaza-emergency",
    title: "Gaza Emergency Relief",
    description:
      "Providing essential food supplies and medical aid to families in Gaza affected by the ongoing crisis.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
    category: "Emergency",
    raised: 450000,
    goal: 500000,
    donors: 2340,
    isUrgent: true,
    region: "Middle East",
  },
  {
    id: "sudan-food-crisis",
    title: "Sudan Food Crisis Response",
    description:
      "Emergency food distribution to families displaced by conflict in Sudan.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop",
    category: "Emergency",
    raised: 180000,
    goal: 300000,
    donors: 890,
    isUrgent: true,
    region: "Africa",
  },
  {
    id: "water-wells",
    title: "Clean Water Wells Project",
    description:
      "Building sustainable water wells in rural communities lacking access to clean drinking water.",
    image: "https://images.unsplash.com/photo-1541544741670-e6f3c8361d21?w=600&h=400&fit=crop",
    category: "Water",
    raised: 65000,
    goal: 80000,
    donors: 234,
    region: "Africa",
  },
  {
    id: "school-meals",
    title: "School Meals Program",
    description:
      "Providing daily nutritious meals to children in schools across underserved regions.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
    category: "Education",
    raised: 45000,
    goal: 75000,
    donors: 178,
    region: "Asia",
  },
  {
    id: "winter-relief",
    title: "Winter Relief Kits",
    description:
      "Distributing warm clothing, blankets, and heating supplies to families facing harsh winters.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop",
    category: "Emergency",
    raised: 4750,
    goal: 5000,
    donors: 89,
    isUrgent: true,
    region: "Middle East",
  },
];

const regions = ["All Regions", "Global", "Middle East", "Africa", "Asia", "Europe", "Americas"];
const categories = ["All Categories", "Emergency", "Community", "Water", "Education", "Sustainability"];
const sortOptions = ["Most Urgent", "Newest", "Most Funded", "Least Funded"];

export default function ProjectsPage() {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Most Urgent");

  const filteredProjects = projects
    .filter((project) => {
      if (selectedRegion !== "All Regions" && project.region !== selectedRegion) return false;
      if (selectedCategory !== "All Categories" && project.category !== selectedCategory) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "Most Urgent") {
        if (a.isUrgent && !b.isUrgent) return -1;
        if (!a.isUrgent && b.isUrgent) return 1;
        return 0;
      }
      if (sortBy === "Most Funded") {
        return (b.raised / b.goal) - (a.raised / a.goal);
      }
      if (sortBy === "Least Funded") {
        return (a.raised / a.goal) - (b.raised / b.goal);
      }
      return 0;
    });

  const urgentProject =
    projects.find((p) => p.id === "northern-syria-winter-relief") ||
    projects.find((p) => p.isUrgent && p.raised / p.goal >= 0.9);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-[var(--primary)] py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&h=600&fit=crop"
            alt="Volunteers serving food"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-display mb-6">
            Current Projects: Making a
            <br />
            Tangible Difference
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Explore our ongoing initiatives to combat hunger and provide essential aid globally.
            Your action today saves lives tomorrow.
          </p>
        </div>
      </section>

      {/* Urgent Project Spotlight */}
      {urgentProject && (
        <section className="bg-[var(--primary)] dark:bg-emerald-950 py-12 border-b border-emerald-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide">
                Urgent Needs: Critical Funding Gap
              </h2>
            </div>
            <Card className="bg-emerald-800/50 backdrop-blur-sm border-emerald-700/50">
              <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 relative group overflow-hidden rounded-xl">
                  <Image
                    src={urgentProject.image}
                    alt={urgentProject.title}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded shadow-lg uppercase">
                    Emergency
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-4">
                    <h3 className="text-3xl font-bold text-white font-display">
                      {urgentProject.title}
                    </h3>
                    <div className="bg-emerald-900/80 px-4 py-2 rounded-lg text-emerald-100 text-sm font-semibold border border-emerald-700 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Time Left: <span className="text-white">48 Hours</span>
                    </div>
                  </div>
                  <p className="text-emerald-100 mb-6 text-lg leading-relaxed">
                    {urgentProject.description} We are incredibly close to our goal but need your
                    help to close the gap immediately.
                  </p>
                  <div className="mb-6">
                    <div className="flex justify-between text-sm font-medium text-emerald-200 mb-2">
                      <span>£{urgentProject.raised.toLocaleString()} raised</span>
                      <span className="text-[var(--accent-gold)]">
                        {Math.round((urgentProject.raised / urgentProject.goal) * 100)}% Funded
                      </span>
                      <span>£{urgentProject.goal.toLocaleString()} Goal</span>
                    </div>
                    <div className="w-full bg-emerald-900 rounded-full h-4 overflow-hidden border border-emerald-700">
                      <div
                        className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-4 rounded-full transition-all duration-500"
                        style={{ width: `${(urgentProject.raised / urgentProject.goal) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-emerald-300 mt-2 font-medium">
                      Only{" "}
                      <span className="text-white font-bold">
                        £{(urgentProject.goal - urgentProject.raised).toLocaleString()}
                      </span>{" "}
                      needed to reach the goal!
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={`/donate?project=${urgentProject.id}`} className="flex-1">
                      <Button variant="gold" size="lg" className="w-full group">
                        <Zap className="w-5 h-5" />
                        Donate in 1-Click
                      </Button>
                    </Link>
                    <Link href={`/projects/${urgentProject.id}`} className="flex-1">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full border-emerald-400 text-emerald-100 hover:bg-emerald-800"
                      >
                        Read Full Story
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-gray-800 sticky top-20 z-30 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                >
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="flex items-center">
              <label className="mr-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                Sort by:
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found matching your filters.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedRegion("All Regions");
                  setSelectedCategory("All Categories");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link href="/donate">
          <Button variant="gold" size="lg" className="shadow-2xl animate-bounce-slow">
            <Zap className="w-5 h-5" />
            Sponsor a Project
          </Button>
        </Link>
      </div>
    </div>
  );
}
