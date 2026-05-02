import { Blobs } from "@/components/portfolio/Blobs";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <Blobs />
      <CursorGlow />
      <Nav />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
};

export default Index;
