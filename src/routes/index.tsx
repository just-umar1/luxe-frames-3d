import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Studio } from "@/components/Studio";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MS Photography Studios — Dark, cinematic photography & film" },
      {
        name: "description",
        content:
          "MS Photography Studios is a dark-aesthetic photography and videography studio for portrait, editorial, brand film and event work.",
      },
      { property: "og:title", content: "MS Photography Studios" },
      {
        property: "og:description",
        content: "Cinematic photography & film. Shadow over spectacle.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <Portfolio />
      <Services />
      <Studio />
      <Contact />
    </main>
  );
}
