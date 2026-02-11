import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: string = "GBP"): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K";
  }
  return num.toString();
}

export function calculateZakat(totalAssets: number, totalLiabilities: number): number {
  const netWealth = totalAssets - totalLiabilities;
  if (netWealth <= 0) return 0;
  return netWealth * 0.025; // 2.5%
}

export function isAboveNisab(netWealth: number, nisabThreshold: number): boolean {
  return netWealth >= nisabThreshold;
}
