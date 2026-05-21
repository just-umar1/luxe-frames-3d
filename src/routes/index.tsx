import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { PhotoGallery } from "@/components/PhotoGallery";
import { VideoGallery } from "@/components/VideoGallery";
import { Services } from "@/components/Services";
import { Studio } from "@/components/Studio";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MS Studios — Cinematic Wedding Photography & Film" },
      {
        name: "description",
        content:
          "MS Studios is a dark-aesthetic wedding photography and videography studio. Quiet, cinematic stories for intimate, destination and full-day weddings worldwide.",
      },
      { property: "og:title", content: "MS Studios — Wedding Photography & Film" },
      {
        property: "og:description",
        content: "Cinematic wedding photography & film. Quiet, dark, considered.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <PhotoGallery />
      <VideoGallery />
      <Services />
      <Studio />
      <Contact />
    </main>
  );
}
