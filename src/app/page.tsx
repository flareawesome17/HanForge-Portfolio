"use client";

import SiteHeader from '@/components/SiteHeader';
import { Button } from "@/components/ui/button";
import {
  Rss as Css,
  Javascript,
  Bot,
  React as ReactIcon,
  FileCode2 as Php,
  Terminal as Git,
  Github,
  Files as Firebase,
  Database as Sql,
  Python,
  GraduationCap as ArduinoIoT,
  Html as HtmlIcon
} from 'lucide-react';


const navItems = [
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
  { title: 'Resume', href: '/resume' },
];

const skills = [
  { name: 'HTML', icon: HtmlIcon },
  { name: 'CSS', icon: Css },
  { name: 'JavaScript', icon: Javascript },
  { name: 'Bootstrap', icon: Bot },
  { name: 'React', icon: ReactIcon },
  { name: 'Node.js', icon: Git },
  { name: 'PHP', icon: Php },
  { name: 'Git', icon: Git },
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

      <section id="hero" className="container py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">HanForge</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Ernie Saavedra Jr - Full Stack Web Developer
        </p>
        <Button>Learn More</Button>
      </section>

      <section id="about" className="container py-16">
        <h2 className="text-3xl font-semibold mb-4">
          About
        </h2>
        Learn more about me.
      </section>

      <section id="skills" className="container py-16">
        <h2 className="text-3xl font-semibold mb-4">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md">
              <skill.icon className="h-6 w-6 mb-2" />
              <div className="text-sm font-medium">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="container py-16">
        <h2 className="text-3xl font-semibold mb-4">
          Projects
        </h2>
        Check out my latest projects.
      </section>

      <section id="contact" className="container py-16">
        <h2 className="text-3xl font-semibold mb-4">
          Contact
        </h2>
        Get in touch with me.
      </section>

      <section id="resume" className="container py-16">
        <h2 className="text-3xl font-semibold mb-4">
          Resume
        </h2>
        View my resume.
      </section>

    </>
  );
}
