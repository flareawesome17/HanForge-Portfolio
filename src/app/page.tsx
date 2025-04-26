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
  return (
    <>
      <SiteHeader navItems={navItems} />

      <section
        id="hero"
        className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbpurstxt/image/upload/v1745557727/hanforge/profile_pictures/nwrp20kxuqblwdstnkgm.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold mb-4 font-dm-serif-text">HanForge Ernie Saavedra Jr</h1>
          <p className="text-lg text-muted-foreground mb-8 font-dm-serif-text">
            Full Stack Web Developer
          </p>
        </div>
      </section>

      <section
        id="about"
        className="container py-16 flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">About</h2>
        Learn more about me.
      </section>

      <section
        id="skills"
        className="container py-16 flex flex-col items-center justify-center text-center"
      >
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

      <section
        id="projects"
        className="container py-16 flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        Check out my latest projects.
      </section>

      <section
        id="blogs"
        className="container py-16 flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Blogs</h2>
        Read my thoughts and insights.
      </section>

      <section
        id="contact"
        className="container py-16 flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        Get in touch with me.
      </section>
    </>
  );
}
