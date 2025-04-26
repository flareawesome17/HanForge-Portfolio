"use client";

import SiteHeader from '@/components/SiteHeader';
import { Button } from "@/components/ui/button";
import {
  Html,
  Css3,
  Javascript,
  Bot,
  ReactIcon,
  Nodejs,
  Php,
  Git,
  Github,
  Firebase,
  Sql,
  Python,
} from 'lucide-react';
import { GraduationCap } from 'lucide-react';

const navItems = [
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
  { title: 'Resume', href: '/resume' },
];

const skills = [
  { name: 'HTML', icon: Html },
  { name: 'CSS', icon: Css3 },
  { name: 'JavaScript', icon: Javascript },
  { name: 'Bootstrap', icon: Bot },
  { name: 'React', icon: ReactIcon },
  { name: 'Node.js', icon: Nodejs },
  { name: 'PHP', icon: Php },
  { name: 'Git', icon: Git },
  { name: 'GitHub', icon: Github },
  { name: 'Firebase', icon: Firebase },
  { name: 'SQL', icon: Sql },
  { name: 'Python', icon: Python },
  { name: 'Arduino IoT', icon: GraduationCap },
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

      <section id="about" className="container py-24 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">About</h2>
        <p className="mt-4">Learn more about me.</p>
      </section>

      <section id="skills" className="container py-24 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="mt-8 grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <skill.icon className="h-6 w-6 mb-2" />
              <p className="text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
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
