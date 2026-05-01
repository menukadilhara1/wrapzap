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
