"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search, Heart, Leaf } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Appeals", href: "/projects" },
  { name: "Projects", href: "/projects" }, // Keeping original as requested
  { name: "Impact", href: "/impact" },
  { name: "Zakat Calculator", href: "/zakat" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Feeding Humanity"
              width={180}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-[var(--primary)] dark:hover:text-emerald-400 transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-emerald-400 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/donate"
              className="hidden sm:inline-flex bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors items-center gap-2 shadow-md"
            >
              <span>Donate Now</span>
              <Heart className="w-4 h-4" />
            </Link>
            <button
              className="lg:hidden text-gray-600 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-emerald-400 transition-colors py-2 px-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/donate"
                className="sm:hidden bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors flex items-center justify-center gap-2 mx-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Donate Now</span>
                <Heart className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
