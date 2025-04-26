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
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const navItems = [
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
  { title: 'Blogs', href: '#blogs' },
  { title: 'Contact', href: '#contact' },
];

const skills = [
  { name: 'HTML', icon: HtmlIcon, category: 'Frontend' },
  { name: 'CSS', icon: Css, category: 'Frontend' },
  { name: 'JavaScript', icon: Javascript, category: 'Frontend' },
  { name: 'Bootstrap', icon: Bot, category: 'Frontend' },
  { name: 'React', icon: ReactIcon, category: 'Frontend' },
  { name: 'Node.js', icon: Terminal, category: 'Backend' },
  { name: 'PHP', icon: Php, category: 'Backend' },
  { name: 'Git', icon: Terminal, category: 'Tools' },
  { name: 'GitHub', icon: Github, category: 'Tools' },
  { name: 'Firebase', icon: Firebase, category: 'Backend' },
  { name: 'SQL', icon: Sql, category: 'Backend' },
  { name: 'Python', icon: Python, category: 'Backend' },
  { name: 'Arduino IoT', icon: ArduinoIoT, category: 'Other' },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);
  const sections = [
    { id: 'about', threshold: 0.5 },
    { id: 'skills', threshold: 0.5 },
    { id: 'projects', threshold: 0.5 },
    { id: 'blogs', threshold: 0.5 },
    { id: 'contact', threshold: 0.5 },
  ];

  useEffect(() => {
    const typedTextElement = document.getElementById('typed-text');
    if (typedTextElement) {
      const typed = new (window as any).Typed('#typed-text', {
        strings: ["Hi! I'm Ernie Saavedra Jr"],
        typeSpeed: 50,
        showCursor: true,
        cursorChar: "|",
        loop: false,
      });
    }

    return () => {
      if (typedTextElement && (window as any).Typed) {
        (typed as any).destroy();
      }
    };
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-10% 0px -80% 0px',
        threshold: sections.map(section => section.threshold),
      }
    );

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.current?.observe(element);
      }
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.current?.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <>
      <SiteHeader navItems={navItems} activeSection={activeSection} />

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="hover:scale-105 transition-transform duration-200">
              <CardContent className="flex flex-col items-center p-6">
                <skill.icon className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">{skill.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{skill.category}</CardDescription>
              </CardContent>
            </Card>
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
