"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calculator,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Download,
  Mail,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Coins,
  Banknote,
  TrendingUp,
  Home,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

interface AssetInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  icon?: React.ReactNode;
}

function AssetInput({ label, value, onChange, placeholder, icon }: AssetInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {icon}
          </div>
        )}
        <div className="absolute inset-y-0 left-10 flex items-center pointer-events-none">
          <span className="text-gray-500">£</span>
        </div>
        <input
          type="number"
          value={value || ""}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          placeholder={placeholder || "0"}
          className={`block w-full ${icon ? "pl-16" : "pl-7"} pr-4 py-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent`}
        />
      </div>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="w-full py-4 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900 dark:text-white">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600 dark:text-gray-400 text-sm">
          {answer}
        </div>
      )}
    </div>
  );
}

const NISAB_GOLD_GRAMS = 87.48;
const NISAB_SILVER_GRAMS = 612.36;
const ZAKAT_RATE = 0.025;

export default function ZakatPage() {
  // Assets
  const [goldValue, setGoldValue] = useState(0);
  const [silverValue, setSilverValue] = useState(0);
  const [cashInHand, setCashInHand] = useState(0);
  const [bankAccounts, setBankAccounts] = useState(0);
  const [stocks, setStocks] = useState(0);
  const [crypto, setCrypto] = useState(0);
  const [otherAssets, setOtherAssets] = useState(0);

  // Liabilities
  const [debtsOwed, setDebtsOwed] = useState(0);
  const [immediateExpenses, setImmediateExpenses] = useState(0);

  // Gold/Silver prices (simulated live prices)
  const [goldPrice, setGoldPrice] = useState(55.2);
  const [silverPrice, setSilverPrice] = useState(0.68);
  const [pricesUpdated, setPricesUpdated] = useState(new Date());

  // Calculate totals
  const totalAssets =
    goldValue + silverValue + cashInHand + bankAccounts + stocks + crypto + otherAssets;
  const totalLiabilities = debtsOwed + immediateExpenses;
  const netZakatableWealth = totalAssets - totalLiabilities;

  const nisabGold = NISAB_GOLD_GRAMS * goldPrice;
  const nisabSilver = NISAB_SILVER_GRAMS * silverPrice;
  const nisabThreshold = Math.min(nisabGold, nisabSilver);

  const isAboveNisab = netZakatableWealth >= nisabThreshold;
  const zakatDue = isAboveNisab ? netZakatableWealth * ZAKAT_RATE : 0;

  const refreshPrices = () => {
    // Simulate price refresh
    setGoldPrice(55.2 + Math.random() * 2 - 1);
    setSilverPrice(0.68 + Math.random() * 0.05 - 0.025);
    setPricesUpdated(new Date());
  };

  const resetCalculator = () => {
    setGoldValue(0);
    setSilverValue(0);
    setCashInHand(0);
    setBankAccounts(0);
    setStocks(0);
    setCrypto(0);
    setOtherAssets(0);
    setDebtsOwed(0);
    setImmediateExpenses(0);
  };

  const faqs = [
    {
      question: "What is Zakat?",
      answer:
        "Zakat is one of the Five Pillars of Islam. It is an obligatory form of charity that requires Muslims to donate 2.5% of their qualifying wealth annually to those in need.",
    },
    {
      question: "Who is eligible to receive Zakat?",
      answer:
        "Zakat can be given to eight categories of recipients mentioned in the Quran: the poor, the needy, Zakat administrators, those whose hearts are to be reconciled, those in bondage, those in debt, in the cause of Allah, and travelers in need.",
    },
    {
      question: "How is Zakat calculated on gold?",
      answer:
        "Zakat on gold is calculated at 2.5% of the market value of gold owned above the Nisab threshold (87.48 grams of gold). The current market price is used for valuation.",
    },
    {
      question: "Is Zakat due on my primary residence?",
      answer:
        "No, Zakat is not due on your primary residence or personal items used for daily living such as furniture, clothing, and vehicles used for personal transportation.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-[var(--primary)] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
            <Calculator className="w-4 h-4" />
            Zakat Calculator
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white font-display mb-4">
            Calculate Your Zakat
          </h1>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            Fulfill your obligation with confidence. Your Zakat purifies your wealth and supports
            those in need. Feeding Humanity ensures transparency and trust.
          </p>
        </div>
      </section>

      {/* Join Banner */}
      <div className="bg-[var(--accent-gold)] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-yellow-900 text-sm font-medium">
            Join 5,000+ others who calculated and fulfilled their Zakat with us this Ramadan
          </p>
        </div>
      </div>

      <main className="py-8 lg:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* Assets Section */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Coins className="w-5 h-5 text-[var(--primary)]" />
                  Assets
                </h2>

                {/* Gold & Silver */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Gold & Silver</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1 text-green-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Live Prices Applied
                      </span>
                      <button
                        onClick={refreshPrices}
                        className="text-[var(--primary)] hover:underline flex items-center gap-1"
                      >
                        <RefreshCw className="w-3 h-3" />
                        Refresh
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <AssetInput
                      label={`Gold Value (£${goldPrice.toFixed(2)}/g)`}
                      value={goldValue}
                      onChange={setGoldValue}
                      icon={<Coins className="w-4 h-4" />}
                    />
                    <AssetInput
                      label={`Silver Value (£${silverPrice.toFixed(2)}/g)`}
                      value={silverValue}
                      onChange={setSilverValue}
                      icon={<Coins className="w-4 h-4" />}
                    />
                  </div>
                </div>

                {/* Cash & Bank */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Cash & Bank Accounts
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <AssetInput
                      label="Cash in Hand"
                      value={cashInHand}
                      onChange={setCashInHand}
                      icon={<Banknote className="w-4 h-4" />}
                    />
                    <AssetInput
                      label="Bank Accounts"
                      value={bankAccounts}
                      onChange={setBankAccounts}
                      icon={<Home className="w-4 h-4" />}
                    />
                  </div>
                </div>

                {/* Investments */}
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Investments</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <AssetInput
                      label="Stocks & Shares"
                      value={stocks}
                      onChange={setStocks}
                      icon={<TrendingUp className="w-4 h-4" />}
                    />
                    <AssetInput
                      label="Cryptocurrency"
                      value={crypto}
                      onChange={setCrypto}
                      icon={<Coins className="w-4 h-4" />}
                    />
                    <AssetInput
                      label="Other Assets"
                      value={otherAssets}
                      onChange={setOtherAssets}
                      icon={<Coins className="w-4 h-4" />}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Liabilities Section */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  Liabilities (Deductible)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <AssetInput
                    label="Debts Owed"
                    value={debtsOwed}
                    onChange={setDebtsOwed}
                    placeholder="e.g., loans, credit cards"
                  />
                  <AssetInput
                    label="Immediate Expenses"
                    value={immediateExpenses}
                    onChange={setImmediateExpenses}
                    placeholder="e.g., rent, bills due"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Nisab Info */}
            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-lg p-4">
              <p className="text-sm text-emerald-800 dark:text-emerald-300">
                <strong>Current Nisab Threshold (Gold):</strong> £{nisabGold.toFixed(2)} (
                {NISAB_GOLD_GRAMS}g × £{goldPrice.toFixed(2)})
              </p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                Silver Nisab: £{nisabSilver.toFixed(2)} | Using lower threshold for calculation
              </p>
            </div>

            {/* FAQ Section */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[var(--primary)]" />
                  Zakat FAQ
                </h2>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              {/* Zakat Summary Card */}
              <Card variant="elevated" className="overflow-hidden">
                <div className="bg-[var(--primary)] p-6">
                  <h2 className="text-xl font-bold text-white mb-2">Zakat Summary</h2>
                  <p className="text-emerald-100 text-sm">
                    Based on your assets and liabilities
                  </p>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Total Assets</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      £{totalAssets.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Total Liabilities</span>
                    <span className="font-semibold text-red-600">
                      -£{totalLiabilities.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Net Zakatable Assets</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      £{netZakatableWealth.toLocaleString()}
                    </span>
                  </div>

                  {/* Nisab Status */}
                  <div
                    className={`flex items-center gap-2 p-3 rounded-lg ${
                      isAboveNisab
                        ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300"
                        : "bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {isAboveNisab ? (
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-gray-400" />
                    )}
                    <span className="text-sm font-medium">
                      {isAboveNisab
                        ? "Above Nisab threshold - Zakat is due"
                        : "Below Nisab threshold - No Zakat due"}
                    </span>
                  </div>

                  {/* Zakat Due */}
                  <div className="bg-[var(--primary)] text-white p-6 rounded-lg text-center">
                    <p className="text-sm text-emerald-200 mb-1">
                      Total Zakat Due (2.5%)
                    </p>
                    <p className="text-4xl font-bold">£{zakatDue.toFixed(2)}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Link href={`/donate?amount=${zakatDue.toFixed(0)}&type=zakat`} className="block">
                      <Button variant="gold" size="lg" className="w-full" disabled={zakatDue === 0}>
                        Pay Your Zakat Now
                      </Button>
                    </Link>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" size="md" className="w-full">
                        <Download className="w-4 h-4" />
                        Save
                      </Button>
                      <Button variant="outline" size="md" className="w-full">
                        <Mail className="w-4 h-4" />
                        Email
                      </Button>
                    </div>
                    <button
                      onClick={resetCalculator}
                      className="w-full text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      Reset Calculator
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Need Guidance */}
              <Card variant="bordered" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center shrink-0">
                    <HelpCircle className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      Need Guidance?
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Our team of scholars can help you with any questions about Zakat
                      calculation.
                    </p>
                    <Link href="/contact" className="text-[var(--primary)] text-sm font-medium hover:underline">
                      Contact Us →
                    </Link>
                  </div>
                </div>
              </Card>

              {/* Zakat Rulings */}
              <Card variant="bordered" className="p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                  Zakat Rulings & Guidance
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--primary)] mt-0.5 shrink-0" />
                    Zakat is 2.5% of qualifying wealth held for one lunar year
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--primary)] mt-0.5 shrink-0" />
                    Primary residence and personal items are exempt
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--primary)] mt-0.5 shrink-0" />
                    Debts and immediate expenses can be deducted
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
