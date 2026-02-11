"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Hero Content */}
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&h=800&fit=crop"
                alt="Diverse community sharing a meal together"
                width={1200}
                height={600}
                className="w-full h-[400px] lg:h-[500px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                <span className="inline-block bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-wider">
                  Making a Difference
                </span>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4 font-display">
                  FEEDING HUMANITY:
                  <br />
                  NOURISHING COMMUNITIES,
                  <br />
                  BUILDING TRUST.
                </h1>
                <p className="text-gray-200 text-base lg:text-lg max-w-2xl mb-6">
                  We believe in the power of food to bring people together and
                  create lasting change in communities worldwide.
                </p>
                <Link href="/donate">
                  <Button variant="gold" size="xl" pulse className="shadow-lg">
                    <Heart className="w-5 h-5" />
                    FEED A FAMILY NOW
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Where Your Money Goes */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
                WHERE YOUR MONEY GOES
              </h3>
              <div className="flex items-center gap-6">
                <div className="relative w-28 h-28 shrink-0">
                  <div className="pie-chart-87 w-full h-full rounded-full" />
                  <div className="absolute inset-3 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-[var(--primary)]">87%</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[var(--primary)] rounded-full" />
                    <span className="text-gray-600 dark:text-gray-300">87% Programs & Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[var(--accent-gold)] rounded-full" />
                    <span className="text-gray-600 dark:text-gray-300">8% Administration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-gray-500 rounded-full" />
                    <span className="text-gray-600 dark:text-gray-300">5% Fundraising</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Projects */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.5c-3.87 0-7 3.13-7 7 0 5.25 7 12.5 7 12.5s7-7.25 7-12.5c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                ACTIVE PROJECTS
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "Gaza Emergency Relief", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=100&h=100&fit=crop" },
                  { name: "Sudan Food Crisis", image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=100&h=100&fit=crop" },
                  { name: "Yemen Aid", image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=100&h=100&fit=crop" },
                  { name: "Bangladesh Floods", image: "https://images.unsplash.com/photo-1504159506876-f8338247a14a?w=100&h=100&fit=crop" },
                  { name: "Syria Winter", image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=100&h=100&fit=crop" },
                ].map((project) => (
                  <Link
                    key={project.name}
                    href={`/projects/${project.name.toLowerCase().replace(/ /g, "-")}`}
                    className="text-center group cursor-pointer"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full overflow-hidden ring-2 ring-[var(--primary)]/20 group-hover:ring-[var(--primary)] transition-all">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-300 mt-2 leading-tight">
                      {project.name.split(" ").slice(0, 2).join(" ")}
                    </p>
                  </Link>
                ))}
                <Link
                  href="/projects"
                  className="text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 mx-auto rounded-full overflow-hidden ring-2 ring-[var(--accent-gold)]/50 group-hover:ring-[var(--accent-gold)] transition-all bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-[var(--accent-gold)] transition-colors" />
                  </div>
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-300 mt-2 leading-tight">
                    View All
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
