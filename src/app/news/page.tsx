"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Tag, ArrowRight, Search } from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

// Mock data - will be replaced with Sanity CMS data
const mockPosts = [
  {
    _id: "1",
    title: "Emergency Response: Reaching Families in Gaza",
    slug: { current: "emergency-response-gaza" },
    excerpt:
      "Our teams have delivered over 50,000 food packages to families in Gaza during the ongoing crisis. Learn how your donations are making a direct impact on the ground.",
    mainImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=500&fit=crop",
    publishedAt: "2024-01-15",
    author: { name: "Sarah Ahmed" },
    categories: [{ title: "Emergency Relief" }],
  },
  {
    _id: "2",
    title: "New Water Well Completed in Rural Kenya",
    slug: { current: "water-well-kenya" },
    excerpt:
      "Thanks to generous donors, we've completed our 100th water well in Kenya, providing clean drinking water to over 5,000 people in Turkana County.",
    mainImage: "https://images.unsplash.com/photo-1541544741670-e6f3c8361d21?w=800&h=500&fit=crop",
    publishedAt: "2024-01-10",
    author: { name: "David Okonkwo" },
    categories: [{ title: "Water Projects" }],
  },
  {
    _id: "3",
    title: "Ramadan 2024: Double Your Impact Campaign",
    slug: { current: "ramadan-2024-campaign" },
    excerpt:
      "This Ramadan, every donation will be matched pound-for-pound by our generous corporate partners. Find out how you can maximize your charitable giving.",
    mainImage: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=500&fit=crop",
    publishedAt: "2024-01-05",
    author: { name: "Fatima Hassan" },
    categories: [{ title: "Campaigns" }],
  },
  {
    _id: "4",
    title: "Annual Report 2023: A Year of Impact",
    slug: { current: "annual-report-2023" },
    excerpt:
      "We're proud to share our 2023 Annual Report, highlighting how together we served over 1 million meals and supported communities across 50 countries.",
    mainImage: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=500&fit=crop",
    publishedAt: "2024-01-01",
    author: { name: "James Wilson" },
    categories: [{ title: "Reports" }],
  },
  {
    _id: "5",
    title: "Sustainable Farming Initiative Launches in Bangladesh",
    slug: { current: "sustainable-farming-bangladesh" },
    excerpt:
      "Our new sustainable farming program is helping 200 families in Bangladesh grow their own food, creating long-term food security and independence.",
    mainImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=500&fit=crop",
    publishedAt: "2023-12-20",
    author: { name: "Maria Rodriguez" },
    categories: [{ title: "Community Development" }],
  },
  {
    _id: "6",
    title: "Volunteer Spotlight: Meet Our Heroes on the Ground",
    slug: { current: "volunteer-spotlight" },
    excerpt:
      "Meet the dedicated volunteers who make our mission possible. From local community organizers to international aid workers, these are their stories.",
    mainImage: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=500&fit=crop",
    publishedAt: "2023-12-15",
    author: { name: "Ahmed Khan" },
    categories: [{ title: "Stories" }],
  },
];

const categories = [
  "All",
  "Emergency Relief",
  "Water Projects",
  "Campaigns",
  "Reports",
  "Community Development",
  "Stories",
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = mockPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" ||
      post.categories?.some((cat) => cat.title === selectedCategory);
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = mockPosts[0];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-[var(--primary)] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-display mb-4">
            News & Updates
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Stay informed about our latest projects, impact stories, and ways you can help.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider">
              Featured Story
            </span>
          </div>
          <Link href={`/news/${featuredPost.slug.current}`}>
            <Card variant="elevated" className="overflow-hidden group cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.mainImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {featuredPost.categories?.map((cat) => (
                      <span
                        key={cat.title}
                        className="bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {cat.title}
                      </span>
                    ))}
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white font-display mb-4 group-hover:text-[var(--primary)] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {featuredPost.author?.name}
                      </span>
                    </div>
                    <span className="text-[var(--primary)] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-[var(--primary)] text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Link key={post._id} href={`/news/${post.slug.current}`}>
                <Card
                  variant="bordered"
                  className="overflow-hidden h-full group cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.mainImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      {post.categories?.map((cat) => (
                        <span
                          key={cat.title}
                          className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                        >
                          {cat.title}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span>{post.author?.name}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                No articles found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Load More */}
          {filteredPosts.length > 6 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white font-display mb-4">
            Stay Updated
          </h2>
          <p className="text-emerald-100 mb-8">
            Subscribe to our newsletter for the latest news, impact stories, and ways to help.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <Button variant="gold" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
