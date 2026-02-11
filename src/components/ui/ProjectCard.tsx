"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { Card } from "./Card";
import Button from "./Button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  raised: number;
  goal: number;
  donors: number;
  isUrgent?: boolean;
  className?: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  category,
  raised,
  goal,
  donors,
  isUrgent = false,
  className,
}: ProjectCardProps) {
  const progress = Math.min((raised / goal) * 100, 100);
  const progressColor = isUrgent
    ? "bg-red-500"
    : progress >= 75
    ? "bg-[var(--primary)]"
    : progress >= 50
    ? "bg-blue-500"
    : "bg-amber-500";

  const categoryColors: Record<string, string> = {
    emergency: "bg-red-600",
    community: "bg-[var(--primary)]",
    sustainability: "bg-blue-600",
    education: "bg-purple-600",
    water: "bg-cyan-600",
    food: "bg-amber-600",
  };

  return (
    <Card
      variant={isUrgent ? "highlight" : "bordered"}
      className={cn(
        "overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform hover:scale-105 transition-transform duration-500"
        />
        {/* Category Badge */}
        <div
          className={cn(
            "absolute top-3 right-3 text-white text-xs font-bold px-3 py-1 rounded-full",
            categoryColors[category.toLowerCase()] || "bg-gray-600"
          )}
        >
          {category}
        </div>
        {/* Urgent Banner */}
        {isUrgent && (
          <div className="absolute bottom-0 left-0 w-full bg-red-600/90 text-white text-xs font-bold px-4 py-2 backdrop-blur-sm flex items-center justify-between">
            <span className="flex items-center gap-1">
              <AlertTriangle className="w-4 h-4" />
              Urgent: Needs Your Help
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-display">
          {title}
        </h3>

        {/* Progress */}
        <div className="mt-2 mb-4">
          <div className="flex justify-between text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
            <span className={isUrgent ? "text-red-600 dark:text-red-400" : "text-[var(--primary)] dark:text-emerald-400"}>
              {progress.toFixed(0)}% Funded
            </span>
            <span>
              £{raised.toLocaleString()} of £{goal.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
            <div
              className={cn("h-2.5 rounded-full transition-all duration-500", progressColor)}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-1 text-right">
            Supported by {donors} donors
          </p>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-1 line-clamp-3">
          {description}
        </p>

        {/* Actions */}
        <div className="mt-auto space-y-3">
          <Link href={`/donate?project=${id}`}>
            <Button variant="gold" className="w-full group">
              <span>Donate in 1-Click</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href={`/projects/${id}`}>
            <Button variant="ghost" className="w-full border border-gray-200 dark:border-gray-700">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
