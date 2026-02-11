"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CreditCard,
  Lock,
  Heart,
  Utensils,
  CheckCircle,
  ArrowRight,
  Building,
  Smartphone,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const donationAmounts = [10, 25, 50, 100];

const impactMessages: Record<number, string> = {
  10: "provides 25 meals for a family",
  25: "provides emergency kits and essentials",
  50: "provides 125 meals for families in crisis",
  100: "supports a community kitchen for a month",
};

export default function DonatePage() {
  const [donationType, setDonationType] = useState<"monthly" | "one-time">("monthly");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    keepUpdated: true,
  });

  const amount = customAmount ? parseFloat(customAmount) : selectedAmount || 0;
  const impactMessage = impactMessages[selectedAmount || 0] || `provides vital aid to those in need`;

  const handleAmountSelect = (amt: number) => {
    setSelectedAmount(amt);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Live Donation Notification */}
      <div className="fixed top-24 right-4 z-50 animate-slide-in-right hidden lg:block">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-full px-6 py-3 flex items-center gap-3 border border-gray-100 dark:border-gray-700">
          <Heart className="w-5 h-5 text-green-600 dark:text-green-400" />
          <p className="text-sm font-medium">
            Someone from <span className="font-bold">London</span> just donated{" "}
            <span className="text-[var(--primary)] dark:text-green-400 font-bold">£50</span>.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Feeding Humanity"
              width={180}
              height={50}
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>
      </nav>

      <main className="py-8 lg:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* Progress Steps */}
            <div className="flex justify-between mb-8 relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 -z-10 -translate-y-1/2 rounded" />
              {[
                { num: 1, label: "Amount" },
                { num: 2, label: "Details" },
                { num: 3, label: "Payment" },
              ].map((s) => (
                <div key={s.num} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-md ring-4 ring-white dark:ring-gray-900 ${step >= s.num
                      ? "bg-[var(--primary)] text-white"
                      : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
                      }`}
                  >
                    {s.num}
                  </div>
                  <span
                    className={`text-xs font-semibold ${step >= s.num
                      ? "text-[var(--primary)] dark:text-green-400"
                      : "text-gray-400"
                      }`}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Step 1: Amount Selection */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[var(--primary)]" />
                    Select Donation Amount
                  </h2>
                  <div className="bg-gray-200 dark:bg-gray-700 p-1 rounded-full inline-flex">
                    <button
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${donationType === "monthly"
                        ? "bg-white dark:bg-slate-600 shadow-sm text-[var(--primary)] dark:text-white"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
                        }`}
                      onClick={() => setDonationType("monthly")}
                    >
                      Monthly
                    </button>
                    <button
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${donationType === "one-time"
                        ? "bg-white dark:bg-slate-600 shadow-sm text-[var(--primary)] dark:text-white"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
                        }`}
                      onClick={() => setDonationType("one-time")}
                    >
                      One-Time
                    </button>
                  </div>
                </div>

                {/* Amount Buttons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {donationAmounts.map((amt) => (
                    <label key={amt} className="cursor-pointer relative">
                      <input
                        type="radio"
                        name="amount"
                        className="sr-only peer"
                        checked={selectedAmount === amt}
                        onChange={() => handleAmountSelect(amt)}
                      />
                      <div
                        className={`h-16 rounded border-2 flex items-center justify-center text-lg font-bold transition-colors ${selectedAmount === amt
                          ? "border-[var(--primary)] bg-emerald-50 dark:bg-emerald-900/30 text-[var(--primary)] dark:text-emerald-400"
                          : "border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-[var(--primary)]"
                          }`}
                      >
                        £{amt}
                      </div>
                      {amt === 50 && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent-gold)] text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm uppercase tracking-wider">
                          Most Popular
                        </span>
                      )}
                    </label>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">£</span>
                  </div>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="block w-full pl-7 pr-12 py-3 text-sm rounded border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-800 dark:text-white focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Step 2: Your Details */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-[var(--primary)]" />
                  Your Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full rounded border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-800 dark:text-white focus:ring-[var(--primary)] focus:border-[var(--primary)] py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-800 dark:text-white focus:ring-[var(--primary)] focus:border-[var(--primary)] py-3"
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <input
                    type="checkbox"
                    id="updates"
                    checked={formData.keepUpdated}
                    onChange={(e) =>
                      setFormData({ ...formData, keepUpdated: e.target.checked })
                    }
                    className="h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)] border-gray-300 rounded"
                  />
                  <label htmlFor="updates" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    Keep me updated on the impact of my donation.
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Step 3: Payment */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                  <Lock className="w-5 h-5 text-[var(--primary)]" />
                  Secure Payment
                </h2>

                {/* Express Checkout */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                    Express Checkout
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button className="flex items-center justify-center gap-2 bg-black text-white py-3 rounded hover:bg-gray-900 transition-colors">
                      <Smartphone className="w-5 h-5" />
                      Apple Pay
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-white text-black border border-gray-300 py-3 rounded hover:bg-gray-50 transition-colors">
                      <Image
                        src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                        alt="Google Pay"
                        width={20}
                        height={20}
                      />
                      Google Pay
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-[#ffc439] text-[#003087] py-3 rounded hover:brightness-95 transition-all font-bold">
                      <Building className="w-5 h-5" />
                      PayPal
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative flex py-4 items-center">
                  <div className="flex-grow border-t border-gray-200 dark:border-gray-700" />
                  <span className="flex-shrink mx-4 text-gray-400 text-sm">Or pay with card</span>
                  <div className="flex-grow border-t border-gray-200 dark:border-gray-700" />
                </div>

                {/* Card Details */}
                <div className="space-y-4">
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Card number"
                      className="w-full pl-10 py-3 rounded border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-800 dark:text-white focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="w-full py-3 rounded border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-800 dark:text-white focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="w-full py-3 rounded border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-800 dark:text-white focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                    />
                  </div>
                </div>

                {/* Other Payment Options */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                    Other Payment Methods
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 py-3 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors text-sm">
                      <Building className="w-4 h-4" />
                      Bank Transfer
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded hover:bg-green-600 transition-colors text-sm">
                      GoFundMe
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Complete Donation Button */}
            <Button variant="gold" size="xl" pulse className="w-full shadow-lg">
              Complete Donation
              <ArrowRight className="w-5 h-5" />
            </Button>

            {/* Security Badges */}
            <div className="flex items-center justify-center gap-4 text-gray-400 dark:text-gray-500 text-xs">
              <span className="flex items-center gap-1">
                <Lock className="w-4 h-4" />
                256-bit SSL Secure
              </span>
              <span>Stripe</span>
              <span>PayPal</span>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 space-y-6">
              {/* Impact Card */}
              <Card variant="elevated" className="overflow-hidden">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop"
                    alt="Children receiving aid"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <span className="bg-[var(--primary)] text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                        YOUR IMPACT
                      </span>
                      <h3 className="text-white text-xl font-bold font-display">
                        Providing Hope
                      </h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-[var(--primary)] text-white rounded-full p-1.5 mt-1 shrink-0">
                        <Utensils className="w-4 h-4" />
                      </div>
                      <p className="text-green-800 dark:text-green-300 font-medium leading-tight">
                        With{" "}
                        <span className="font-bold text-lg">£{amount || 0}</span>, you are{" "}
                        <span className="font-bold underline decoration-[var(--accent-gold)] decoration-2 underline-offset-2">
                          {impactMessage}
                        </span>
                        .
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-[var(--primary)] shrink-0" />
                      <span>
                        <strong>100%</strong> of your donation funds the mission. Administrative
                        costs are covered by private donors.
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-[var(--primary)] shrink-0" />
                      <span>
                        Immediate tax receipt sent to{" "}
                        <strong>{formData.email || "your email"}</strong>.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Corporate Match */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 flex gap-4 items-center">
                <div className="bg-blue-100 dark:bg-blue-800 rounded-full p-2 text-blue-600 dark:text-blue-300">
                  <Building className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <span className="font-bold">Corporate Match Unlocked!</span>
                    <br />
                    We are only £1,500 away from a £10,000 match.
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-[var(--primary)] h-2 rounded-full" style={{ width: "85%" }} />
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex justify-center gap-6 pt-4">
                <div className="text-center group cursor-pointer">
                  <div className="w-16 h-16 rounded-full border-2 border-[var(--primary)]/20 flex items-center justify-center bg-white dark:bg-gray-800 group-hover:border-[var(--primary)] transition-colors">
                    <CheckCircle className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                  <p className="text-[10px] uppercase font-bold text-gray-500 mt-2">
                    Charity
                    <br />
                    Navigator
                  </p>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="w-16 h-16 rounded-full border-2 border-[var(--accent-gold)]/50 flex items-center justify-center bg-white dark:bg-gray-800 group-hover:border-[var(--accent-gold)] transition-colors">
                    <Heart className="w-8 h-8 text-[var(--accent-gold)]" />
                  </div>
                  <p className="text-[10px] uppercase font-bold text-gray-500 mt-2">
                    GiveWell
                    <br />
                    Top Charity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
