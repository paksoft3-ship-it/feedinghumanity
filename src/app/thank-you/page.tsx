"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import {
  CheckCircle,
  Heart,
  Share2,
  Users,
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const socialShareButtons = [
  {
    name: "WhatsApp",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    bgColor: "bg-green-500 hover:bg-green-600",
    shareUrl: (message: string) =>
      `https://wa.me/?text=${encodeURIComponent(message)}`,
  },
  {
    name: "Twitter",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
    bgColor: "bg-black hover:bg-gray-800",
    shareUrl: (message: string) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`,
  },
  {
    name: "Facebook",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    bgColor: "bg-blue-600 hover:bg-blue-700",
    shareUrl: (message: string) =>
      `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(message)}`,
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    message:
      "I've been donating monthly for 2 years. Knowing my contributions feed families brings me so much joy.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Ahmed K.",
    message:
      "Transparent, trustworthy, and truly making a difference. Proud to support Feeding Humanity.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Emma L.",
    message:
      "The impact reports show exactly where my Zakat goes. This level of transparency is rare and appreciated.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

function ThankYouContent() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount") || "50";
  const name = searchParams.get("name") || "Friend";
  const donationType = searchParams.get("type") || "donation";

  const mealsProvided = Math.floor(parseInt(amount) * 2.5);
  const shareMessage = `I just donated £${amount} to @FeedingHumanity to help provide ${mealsProvided} meals for families in need. Join me in making a difference! 🌍❤️`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-900/20 dark:to-gray-900" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23065f46' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-[var(--primary)] rounded-full flex items-center justify-center animate-fade-in">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-display mb-4 animate-fade-in">
            Thank You, {name}!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Your generosity is changing lives. Together, we&apos;re building a world without hunger.
          </p>

          {/* Impact Summary Card */}
          <Card variant="elevated" className="max-w-lg mx-auto overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=300&fit=crop"
                alt="Children receiving meals"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 ring-8 ring-inset ring-[var(--accent-gold)]/30" />
            </div>
            <CardContent className="p-6 text-center">
              <div className="inline-block bg-[var(--accent-gold)] text-yellow-900 text-sm font-bold px-4 py-1 rounded-full mb-4">
                YOUR IMPACT
              </div>
              <p className="text-2xl text-gray-900 dark:text-white mb-2">
                Your{" "}
                <span className="font-bold text-[var(--primary)]">£{amount}</span>{" "}
                {donationType}
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                provided{" "}
                <span className="text-[var(--primary)] underline decoration-[var(--accent-gold)] decoration-4">
                  {mealsProvided} meals
                </span>
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                for families in need around the world
              </p>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="outline" size="lg">
              <Download className="w-4 h-4" />
              Download Receipt
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="w-4 h-4" />
              Email Confirmation
            </Button>
          </div>
        </div>
      </section>

      {/* Social Share Section */}
      <section className="py-12 bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Share2 className="w-5 h-5 text-[var(--primary)]" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Spread the Word
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Inspire others to join the movement. Share your generosity!
          </p>
          <div className="flex justify-center gap-4">
            {socialShareButtons.map((social) => (
              <a
                key={social.name}
                href={social.shareUrl(shareMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 ${social.bgColor} rounded-full flex items-center justify-center text-white transition-transform hover:scale-110`}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 invert"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Wall of Kindness */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-5 h-5 text-[var(--primary)]" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display">
                Wall of Kindness
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Join thousands of compassionate donors making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="bordered" className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">Monthly Donor</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    &ldquo;{testimonial.message}&rdquo;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Multiply Your Impact */}
      <section className="py-16 lg:py-20 bg-[var(--primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 text-[var(--accent-gold)] mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-display mb-4">
            Multiply Your Impact
          </h2>
          <p className="text-emerald-100 mb-8 text-lg max-w-2xl mx-auto">
            Set up a monthly donation to provide consistent support. Regular giving helps us plan
            ahead and reach more families in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate?type=monthly">
              <Button variant="gold" size="lg">
                Become a Monthly Donor
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="secondary" size="lg">
                Explore Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display mb-4">
              What Happens Next?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[var(--primary)]">1</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Confirmation Email
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                You&apos;ll receive a tax receipt and confirmation within minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[var(--primary)]">2</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Funds Deployed
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Your donation is put to work within 48 hours of receipt.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[var(--primary)]">3</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Impact Update
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We&apos;ll send you a personalized impact report showing your contribution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-[var(--primary)] border-t-transparent rounded-full" />
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
