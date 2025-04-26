import SiteHeader from '@/components/SiteHeader';
import { Button } from "@/components/ui/button";

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Skills', href: '/skills' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' },
  { title: 'Resume', href: '/resume' },
];

export default function Home() {
  return (
    <>
      <SiteHeader navItems={navItems} />

      <section id="hero" className="container py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">MinimalistFolio</h1>
        <p className="text-lg text-muted-foreground mb-8">
          A minimalist portfolio website built with Next.js and Shadcn/ui.
        </p>
        <Button>Learn More</Button>
      </section>

      <section id="about" className="container py-24 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">About</h2>
        <p className="mt-4">Learn more about me.</p>
      </section>

      <section id="skills" className="container py-24 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="mt-4">My technical skills and expertise.</p>
      </section>

      <section id="projects" className="container py-24 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-4">Check out my latest projects.</p>
      </section>

      <section id="contact" className="container py-24 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4">Get in touch with me.</p>
      </section>

      <section id="resume" className="container py-24 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">Resume</h2>
        <p className="mt-4">View my resume.</p>
      </section>
    </>
  );
}
