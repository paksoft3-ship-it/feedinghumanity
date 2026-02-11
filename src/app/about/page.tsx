"use client";

import Image from "next/image";
import Link from "next/link";
import { Target, Heart, Eye, Shield, Users, Globe, Award, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "Every person deserves dignity and care, regardless of their circumstances.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "We are committed to open, honest reporting of how donations are used.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in empowering local communities to build sustainable futures.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Our network spans continents, reaching those in greatest need.",
  },
];

const team = [
  {
    name: "Sarah Jenkins",
    role: "CEO, Chair",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
  },
  {
    name: "Dr. Eric Thomas",
    role: "PhD, Vice Chair",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
  },
  {
    name: "Maria Rodriguez",
    role: "CFO, Treasurer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
  },
  {
    name: "Hamid Tanaka",
    role: "LLB, Secretary",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
  },
  {
    name: "Fatima Al-Rashid",
    role: "MBA, Member",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
  },
  {
    name: "David Chen",
    role: "MSc, Member",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
  },
];

const certifications = [
  { name: "ISO 9001", description: "Quality Management" },
  { name: "Charity Navigator", description: "4-Star Rating" },
  { name: "GiveWell", description: "Top Charity" },
  { name: "BBB Wise Giving", description: "Accredited" },
];

const stats = [
  { value: "15+", label: "Years of Service" },
  { value: "50+", label: "Countries Reached" },
  { value: "10M+", label: "Lives Impacted" },
  { value: "500+", label: "Local Partners" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[var(--primary)] py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=600&fit=crop"
            alt="Volunteers helping community"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
            About Us
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-display mb-6">
            Feeding Humanity:
            <br />
            Nourishing Communities,
            <br />
            Building Futures.
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            For over 15 years, we&apos;ve been dedicated to fighting hunger and providing
            hope to communities in crisis around the world.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Who We Are */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display mb-6">
                WHO WE ARE
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">OUR MISSION</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      To eliminate hunger through sustainable food distribution, community
                      empowerment, and emergency relief programs that restore dignity and
                      create lasting change.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--accent-gold)]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Eye className="w-6 h-6 text-[var(--accent-gold)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">OUR VISION</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      A world where no one goes hungry. Where every community has access
                      to nutritious food, clean water, and the resources they need to thrive.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display mb-6">
                OUR VALUES
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value) => (
                  <Card key={value.title} variant="bordered" className="p-4">
                    <CardContent className="p-0 flex items-start gap-3">
                      <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center shrink-0">
                        <value.icon className="w-5 h-5 text-[var(--primary)]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                          {value.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {value.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-[var(--primary)] mb-1">
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display">
              GOVERNANCE & LEADERSHIP
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Our dedicated board of directors guides our mission with expertise and integrity
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-gray-100 dark:ring-gray-700 group-hover:ring-[var(--primary)] transition-all mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Map */}
      <section className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display mb-6">
                GLOBAL IMPACT & VOLUNTEERS
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our network of dedicated volunteers and partners spans across continents,
                ensuring aid reaches those who need it most. From emergency response teams
                to local community organizers, we work together to create lasting change.
              </p>
              <div className="space-y-4">
                {[
                  "5,000+ active volunteers worldwide",
                  "Presence in 50+ countries",
                  "24/7 emergency response capability",
                  "Local partnerships for sustainable impact",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--primary)]" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/volunteer">
                  <Button variant="primary" size="lg">
                    Become a Volunteer
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop"
                alt="World map showing global reach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">
                  Active in 50+ countries across 6 continents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display">
              CERTIFICATIONS & ACCREDITATIONS
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Recognized for our commitment to excellence and accountability
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.name} variant="bordered" className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{cert.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white font-display mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Together, we can end hunger and build stronger communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button variant="gold" size="lg">
                Make a Donation
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="secondary" size="lg">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
