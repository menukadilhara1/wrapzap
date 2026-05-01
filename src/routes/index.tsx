import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { MenuShowcase } from "@/components/site/MenuShowcase";
import { Features } from "@/components/site/Features";
import { DownloadCTA } from "@/components/site/DownloadCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "High Protein Meal Delivery in Colombo | WrapZapEats" },
      {
        name: "description",
        content:
          "Order high-protein meals and healthy gym food delivery in Colombo. Macro-balanced wraps and bowls for athletes. Available on iOS & Android.",
      },
      { property: "og:title", content: "High Protein Meal Delivery in Colombo | WrapZapEats" },
      {
        property: "og:description",
        content: "Healthy gym meals and macro-friendly food delivered fast across Colombo.",
      },
      { property: "og:url", content: "https://www.wrapzapeats.com/" },
      { property: "og:image", content: "https://www.wrapzapeats.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://www.wrapzapeats.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "WrapZapEats",
          "image": "https://www.wrapzapeats.com/logo.png",
          "telephone": "+94773405028",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Colombo",
            "addressCountry": "LK",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground min-h-dvh overflow-x-hidden">
      <Nav />
      <Hero />
      <Features />
      <MenuShowcase />
      <Stats />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
