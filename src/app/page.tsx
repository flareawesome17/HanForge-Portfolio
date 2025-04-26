import SiteHeader from '@/components/SiteHeader';

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

      <section id="home" className="container py-24">
        <h1 className="text-4xl font-bold">Home</h1>
        <p className="mt-4">Welcome to my portfolio website!</p>
      </section>

      <section id="about" className="container py-24">
        <h2 className="text-3xl font-bold">About</h2>
        <p className="mt-4">Learn more about me.</p>
      </section>

      <section id="skills" className="container py-24">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="mt-4">My technical skills and expertise.</p>
      </section>

      <section id="projects" className="container py-24">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-4">Check out my latest projects.</p>
      </section>

      <section id="contact" className="container py-24">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4">Get in touch with me.</p>
      </section>

      <section id="resume" className="container py-24">
        <h2 className="text-3xl font-bold">Resume</h2>
        <p className="mt-4">View my resume.</p>
      </section>
    </>
  );
}
