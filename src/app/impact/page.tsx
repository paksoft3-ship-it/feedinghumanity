"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  TrendingUp,
  Users,
  MapPin,
  Calendar,
  Download,
  FileText,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const impactStats = [
  {
    value: "1M+",
    label: "Meals Served Globally",
    icon: TrendingUp,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    value: "500+",
    label: "Families Supported",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    value: "1,000+",
    label: "Community Gardens Built",
    icon: MapPin,
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
  },
];

const stories = [
  {
    id: 1,
    title: "Rebuilding Hope in Gaza",
    description:
      "After losing everything, Fatima's family received food packages that kept them alive during the crisis. Today, they're rebuilding their lives with continued support.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
    location: "Gaza, Palestine",
    date: "December 2023",
  },
  {
    id: 2,
    title: "Clean Water Changes Lives",
    description:
      "A new well in rural Kenya means children no longer walk miles for water. Instead, they attend school and dream of a better future.",
    image: "https://images.unsplash.com/photo-1541544741670-e6f3c8361d21?w=600&h=400&fit=crop",
    location: "Turkana, Kenya",
    date: "November 2023",
  },
  {
    id: 3,
    title: "Seeds of Change",
    description:
      "Through our sustainable farming initiative, 200 families in Bangladesh now grow their own food, breaking the cycle of dependency.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop",
    location: "Dhaka, Bangladesh",
    date: "October 2023",
  },
];

const reports = [
  { year: "2023", title: "Annual Report 2023", size: "2.4 MB" },
  { year: "2022", title: "Annual Report 2022", size: "2.1 MB" },
  { year: "2021", title: "Annual Report 2021", size: "1.9 MB" },
];

export default function ImpactPage() {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-display mb-4">
              Real Numbers, Real Stories
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Visualizing our progress and sharing outcomes with transparency and truth.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {impactStats.map((stat) => (
              <Card key={stat.label} variant="bordered" className="p-6 text-center">
                <CardContent className="p-0">
                  <div
                    className={`w-16 h-16 mx-auto ${stat.bgColor} rounded-full flex items-center justify-center mb-4`}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stories of Hope */}
      <section className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-display mb-4">
              Stories of Hope
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Real people, real impact. See how your donations change lives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Featured Story */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={stories[activeStory].image}
                alt={stories[activeStory].title}
                width={600}
                height={400}
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="flex items-center gap-4 text-sm text-gray-300 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {stories[activeStory].location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {stories[activeStory].date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-display">
                  {stories[activeStory].title}
                </h3>
                <p className="text-gray-200">{stories[activeStory].description}</p>
              </div>
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
                <Play className="w-6 h-6 text-[var(--primary)] ml-1" />
              </button>
            </div>

            {/* Story List */}
            <div className="space-y-4">
              {stories.map((story, index) => (
                <button
                  key={story.id}
                  onClick={() => setActiveStory(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    activeStory === index
                      ? "bg-[var(--primary)] text-white"
                      : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                  }`}
                >
                  <div className="flex gap-4">
                    <Image
                      src={story.image}
                      alt={story.title}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4
                        className={`font-bold mb-1 ${
                          activeStory === index
                            ? "text-white"
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {story.title}
                      </h4>
                      <p
                        className={`text-sm ${
                          activeStory === index
                            ? "text-emerald-100"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {story.location}
                      </p>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 ${
                        activeStory === index
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Accountability */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-display mb-4">
              Transparency and Accountability
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We are committed to open, honest financial stewardship. See exactly how your
              donations are used.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Pie Chart */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 pie-chart-87 rounded-full" />
                <div className="absolute inset-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-[var(--primary)]">87%</span>
                    <p className="text-sm text-gray-500">to programs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-[var(--primary)] rounded-full" />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-900 dark:text-white">
                      Programs & Services
                    </span>
                    <span className="font-bold text-[var(--primary)]">87%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-[var(--primary)] h-2 rounded-full"
                      style={{ width: "87%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-[var(--accent-gold)] rounded-full" />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-900 dark:text-white">
                      Administration
                    </span>
                    <span className="font-bold text-[var(--accent-gold)]">8%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-[var(--accent-gold)] h-2 rounded-full"
                      style={{ width: "8%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-gray-500 rounded-full" />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-900 dark:text-white">Fundraising</span>
                    <span className="font-bold text-gray-500">5%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gray-500 h-2 rounded-full" style={{ width: "5%" }} />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-green-600 mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">4-Star Charity Navigator Rating</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our commitment to transparency has earned us the highest rating from Charity
                  Navigator for 5 consecutive years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-display mb-4">
              Annual Reports
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Download our detailed annual reports for complete financial transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {reports.map((report) => (
              <Card key={report.year} variant="bordered" className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 mx-auto bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    {report.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    PDF • {report.size}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[var(--primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-display mb-4">
            Be Part of the Story
          </h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Your donation creates real impact. Join thousands of donors making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button variant="gold" size="lg">
                Donate Now
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="secondary" size="lg">
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
