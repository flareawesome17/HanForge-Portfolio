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
            
              <skill.icon className="h-6 w-6 mb-2" />
              <p className="text-sm">{skill.name}</p>
            
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
    
  );
}
