"use client";

import Link from "next/link";
import { Heart, Users, Calculator } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-[var(--primary)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-display mb-4">
            JOIN THE MOVEMENT
          </h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
            Every action counts. Choose how you want to make a difference today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Donate Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-colors">
            <div className="w-16 h-16 mx-auto bg-[var(--accent-gold)] rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-yellow-900" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Make a Donation</h3>
            <p className="text-emerald-100 mb-6">
              Your generosity feeds families and saves lives. Every pound makes a difference.
            </p>
            <Link href="/donate">
              <Button variant="gold" size="lg" className="w-full">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Volunteer Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-colors">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-[var(--primary)]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Become a Volunteer</h3>
            <p className="text-emerald-100 mb-6">
              Join our global team of volunteers and help us deliver aid to those in need.
            </p>
            <Link href="/volunteer">
              <Button variant="secondary" size="lg" className="w-full">
                Join Us
              </Button>
            </Link>
          </div>

          {/* Zakat Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-colors">
            <div className="w-16 h-16 mx-auto bg-emerald-400 rounded-full flex items-center justify-center mb-6">
              <Calculator className="w-8 h-8 text-emerald-900" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Calculate Your Zakat</h3>
            <p className="text-emerald-100 mb-6">
              Use our easy calculator to determine your Zakat obligation and fulfill your duty.
            </p>
            <Link href="/zakat">
              <Button variant="secondary" size="lg" className="w-full">
                Calculate Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
