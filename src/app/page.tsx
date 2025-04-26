"use client";

import SiteHeader from '@/components/SiteHeader';
import {
  Rss as Css,
  Subscript as Javascript,
  Bot,
  Repeat as ReactIcon,
  FileCode2 as Php,
  Terminal,
  Github,
  Files as Firebase,
  Database as Sql,
  Phone as Python,
  GraduationCap as ArduinoIoT,
  Code as HtmlIcon,
} from 'lucide-react';
import { useEffect } from 'react';

const navItems = [
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
  { title: 'Blogs', href: '#blogs' },
  { title: 'Contact', href: '#contact' },
];

const skills = [
  { name: 'HTML', icon: HtmlIcon },
  { name: 'CSS', icon: Css },
  { name: 'JavaScript', icon: Javascript },
  { name: 'Bootstrap', icon: Bot },
  { name: 'React', icon: ReactIcon },
  { name: 'Node.js', icon: Terminal },
  { name: 'PHP', icon: Php },
  { name: 'Git', icon: Terminal },
  { name: 'GitHub', icon: Github },
  { name: 'Firebase', icon: Firebase },
  { name: 'SQL', icon: Sql },
  { name: 'Python', icon: Python },
  { name: 'Arduino IoT', icon: ArduinoIoT },
];

export default function Home() {
  useEffect(() => {
    const typedTextElement = document.getElementById('typed-text');
    if (typedTextElement) {
      const typed = new Typed('#typed-text', {
        strings: ["Hi! I'm Ernie Saavedra Jr"],
        typeSpeed: 50,
        showCursor: true,
        cursorChar: "|",
        loop: false,
      });
    }

    return () => {
      if (typedTextElement && (typed as any).destroy) {
        (typed as any).destroy();
      }
    };
  }, []);

  return (
    <>
      <SiteHeader navItems={navItems} />

      <section id="hero" className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url("https://res.cloudinary.com/dbpurstxt/image/upload/v1745557727/hanforge/profile_pictures/nwrp20kxuqblwdstnkgm.jpg")` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-4">
          <h1 id="typed-text" className="text-5xl font-bold mb-4 font-dm-serif-text"></h1>
          <p className="text-lg text-muted-foreground mb-8 font-dm-serif-text">
            Full Stack Web Developer
          </p>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
      </section>

      <section id="about" className="container py-16 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg text-muted-foreground">
          I’m Ernie Saavedra Jr., a passionate Full Stack Web Developer and IoT innovator dedicated to building impactful, future-proof technology. My expertise lies in crafting seamless user experiences, blending UI/UX design thinking with robust full-stack development.
        </p>
        <p className="text-lg text-muted-foreground">
          With a strong foundation in web technologies and a keen interest in the Internet of Things, I thrive on creating innovative solutions that bridge the digital and physical worlds. I am experienced in leadership and resilience, driving projects from concept to deployment, always with a focus on continuous learning and improvement.
        </p>
        <p className="text-lg text-muted-foreground">
          My mission is to create elegant, efficient, and scalable solutions that solve real-world problems. Let’s build a smarter, better-connected world — one line of code at a time.
        </p>
      </section>

      <section id="skills" className="container py-16 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <skill.icon className="h-6 w-6 mb-2" />
              <div>{skill.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="container py-16 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        Check out my latest projects.
      </section>

      <section id="blogs" className="container py-16 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-semibold mb-4">Blogs</h2>
        Read my thoughts and insights.
      </section>

      <section id="contact" className="container py-16 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        Get in touch with me.
      </section>
    </>
  );
}

