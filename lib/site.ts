import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.topway.lk";
export function meta(title: string, description: string): Metadata {
  return {
    title, description,
    alternates: { canonical: siteUrl },
    openGraph: { title, description, url: siteUrl, siteName: "Topway Private Limited", type: "website" },
  };
}
