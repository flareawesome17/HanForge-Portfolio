'use client';

import SiteHeader from '@/components/SiteHeader';
import {
  Rss as Css,
  Subscript as Javascript,
  Bot,
  Repeat as ReactIcon,
  Terminal as Git,
  Github,
  Files as Firebase,
  Database as Sql,
  Phone as Python,
  GraduationCap as ArduinoIoT,
  Code as HtmlIcon,
  Facebook,
  Linkedin,
  Terminal as Nodejs,
  FileCode2 as Php,
} from 'lucide-react';
import {useEffect, useRef, useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {cn} from '@/lib/utils';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import Image from 'next/image';
import {useToast} from '@/hooks/use-toast';

const navItems = [
  {title: 'About', href: '#about'},
  {title: 'Skills', href: '#skills'},
  {title: 'Projects', href: '#projects'},
  {title: 'Experience', href: '#experience'},
  {title: 'Contact', href: '#contact'},
];

const skills = [
  {name: 'HTML', icon: HtmlIcon, category: 'Frontend'},
  {name: 'CSS', icon: Css, category: 'Frontend'},
  {name: 'JavaScript', icon: Javascript, category: 'Frontend'},
  {name: 'Bootstrap', icon: Bot, category: 'Frontend'},
  {name: 'React', icon: ReactIcon, category: 'Frontend'},
  {name: 'Node.js', icon: Nodejs, category: 'Backend'},
  {name: 'PHP', icon: Php, category: 'Backend'},
  {name: 'Git', icon: Git, category: 'Tools'},
  {name: 'GitHub', icon: Github, category: 'Tools'},
  {name: 'Firebase', icon: Firebase, category: 'Backend'},
  {name: 'SQL', icon: Sql, category: 'Backend'},
  {name: 'Python', icon: Python, category: 'Backend'},
  {name: 'Arduino IoT', icon: ArduinoIoT, category: 'Other'},
];

const experiences = [
  {
    title: 'MIS Staff',
    company: 'Consolidated Coconut Corp.',
    location: 'Panalsalan, Plaridel',
    date: 'April 1, 2024 – Present',
    description: 'Responsible for managing and maintaining all technology systems and servers at the CCC plant, ensuring optimal performance, security, and seamless operations.',
  },
  {
    title: 'Tech Support',
    company: 'Concentrix',
    location: 'Makati',
    date: 'October 2023 – March 2024',
    description: 'Supported VR Meta Products with troubleshooting and technical assistance.',
  },
  {
    title: 'Freelance Full Stack Web Developer',
    company: 'Plaridel',
    location: 'Misamis Occidental',
    date: 'December 2020 – Present',
    description: 'Accepted and completed capstone projects for students unfamiliar with coding, creating full systems and web applications. Volunteered to develop capstone projects free of charge to help students graduate successfully.',
  },
  {
    title: 'IT Staff (Job Order)',
    company: 'LGU-Plaridel',
    location: 'Plaridel, Misamis Occidental',
    date: 'July 2022 – October 2022',
    description: 'Handled photo documentation, computer assembly, troubleshooting, and document encryption to maintain security and confidentiality for the LGU.',
  },
];

async function getGithubRepos() {
  const response = await fetch('https://api.github.com/users/flareawesome17/repos?sort=updated&per_page=10');
  const repos = await response.json();
  return repos;
}

export default function Home() {
  const observer = useRef<IntersectionObserver | null>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({type: null, message: ''});
  const {toast} = useToast();
  const sections = [
    {id: 'about', threshold: 0.5},
    {id: 'skills', threshold: 0.5},
    {id: 'projects', threshold: 0.5},
    {id: 'experience', threshold: 0.5},
    {id: 'contact', threshold: 0.5},
  ];

  useEffect(() => {
    const typedTextElement = document.getElementById('typed-text');
    if (typedTextElement) {
      const typed = new (window as any).Typed('#typed-text', {
        strings: ["Hi! I'm Ernie Saavedra Jr"],
        typeSpeed: 50,
        showCursor: true,
        cursorChar: '|',
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
            entry.target.querySelectorAll('*').forEach(element => {
              element.classList.add('fade-in-up');
            });
          }
        });
      },
      {
        rootMargin: '-10% 0px -80% 0px',
        threshold: sections.map((section) => section.threshold),
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.current?.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.current?.unobserve(element);
        }
      });
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      const repos = await getGithubRepos();
      setRepos(repos);
    }

    fetchData();
  }, []);

  const [activeSection, setActiveSection] = useState('hero');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' }); // Clear previous status

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mgvkedrd', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus({ type: 'success', message: 'Thank you for your message! We will be in touch soon. ✅' });
        form.reset();
        setTimeout(() => setFormStatus({ type: null, message: '' }), 5000); // Clear after 5 seconds
      } else {
        const errorData = await response.json();
        setFormStatus({ type: 'error', message: `Failed to send message: ${errorData.error || 'An unknown error occurred.'} ❌` });
        setTimeout(() => setFormStatus({ type: null, message: '' }), 5000);
      }
    } catch (error: any) {
      console.error('Error sending email:', error);
      setFormStatus({ type: 'error', message: 'An error occurred while sending the message. ❌' });
      setTimeout(() => setFormStatus({ type: null, message: '' }), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SiteHeader navItems={navItems} activeSection={activeSection}/>

      <section id="hero"
               className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center"
               style={{backgroundImage: `url("https://res.cloudinary.com/dbpurstxt/image/upload/v1745557727/hanforge/profile_pictures/nwrp20kxuqblwdstnkgm.jpg")`}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-4">
          <h1 id="typed-text" className="text-5xl font-bold mb-4 font-dm-serif-text"></h1>
          <p className="text-lg text-muted-foreground mb-8 font-dm-serif-text">
            Full Stack Web Developer
          </p>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
      </section>

      <section id="about" className="container py-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>
        <div className="md:flex items-center">
          <div className="md:w-2/5 flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbpurstxt/image/upload/v1745656743/hanforge/wpufezbvbwpptrn0w1yq.jpg"
              alt="Ernie Saavedra Jr Profile"
              width={250}
              height={250}
              className="rounded-full mb-4 md:mb-0"
            />
          </div>
          <div className="md:w-3/5">
            <p className="text-lg text-muted-foreground">
              I’m Ernie Saavedra Jr., a passionate Full Stack Web Developer and IoT innovator dedicated to building
              impactful,
              future-proof technology. My expertise lies in crafting seamless user experiences, blending UI/UX design
              thinking with robust full-stack development.
            </p>
            <p className="text-lg text-muted-foreground">
              With a strong foundation in web technologies and a keen interest in the Internet of Things, I thrive on
              creating innovative solutions that bridge the digital and physical worlds. I am experienced in leadership
              and resilience, driving projects from concept to deployment, always with a focus on continuous learning
              and
              improvement.
            </p>
            <p className="text-lg text-muted-foreground">
              My mission is to create elegant, efficient, and scalable solutions that solve real-world problems. Let’s
              build a smarter, better-connected world — one line of code at a time.
            </p>
            <div className="flex items-center justify-start mt-4 space-x-4">
              <a href="https://github.com/flareawesome17" target="_blank" rel="noopener noreferrer"
                 className="hover:text-[#66FCF1] hover:scale-110 transition-transform duration-300">
                <Github className="h-6 w-6"/>
              </a>
              <a href="https://www.facebook.com/erniesaavedra.villaroya" target="_blank" rel="noopener noreferrer"
                 className="hover:text-[#66FCF1] hover:scale-110 transition-transform duration-300">
                <Facebook className="h-6 w-6"/>
              </a>
              <a href="https://www.linkedin.com/in/ernie-saavedra-jr-55a758284/" target="_blank"
                 rel="noopener noreferrer" className="hover:text-[#66FCF1] hover:scale-110 transition-transform duration-300">
                <Linkedin className="h-6 w-6"/>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="container py-16 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-3 gap-6 w-full">
          {skills.map((skill) => (
            <Card key={skill.name} className="hover:scale-105 transition-transform duration-200">
              <CardContent className="flex flex-col items-center p-6">
                <skill.icon className="h-8 w-8 mb-2 text-muted-foreground"/>
                <CardTitle className="text-lg">{skill.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{skill.category}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-[#1F2833] py-16">
        <div className="container flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-semibold mb-4 text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <Card key={repo.id}
                    className="bg-[#0B0C10] rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-200">
                <CardContent className="flex flex-col items-start p-0">
                  <CardTitle className="text-[#66FCF1] text-xl font-semibold">{repo.name}</CardTitle>
                  <CardDescription className="text-[#C5C6C7] text-sm mb-4">{repo.description}</CardDescription>
                  <div className="flex gap-2 mt-auto">
                    <Button asChild variant="outline">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <Git className="w-4 h-4 mr-2"/>
                        View Code
                      </a>
                    </Button>
                    {repo.homepage && (
                      <Button asChild>
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="container py-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">Experience</h2>
        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-[#0B0C10] rounded-2xl p-6 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#66FCF1] text-xl font-semibold">{exp.title}</CardTitle>
                <CardDescription className="text-[#C5C6C7] text-sm">
                  {exp.company} - {exp.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-[#C5C6C7]">
                <p>{exp.date}</p>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="py-16" style={{backgroundColor: '#2E2B2B'}}>
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-semibold mb-4 text-[#66FCF1]">Let's Connect</h2>
            <p className="text-lg text-muted-foreground text-[#C5C6C7]">
              Get in touch with me.
            </p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8" onSubmit={handleSubmit}>
            <div>
              <Input type="text" name="name" placeholder="Name" required
                     className="mb-4 border-[#45A29E] focus:border-[#66FCF1]"/>
              <Input type="email" name="email" placeholder="Email" required
                     className="mb-4 border-[#45A29E] focus:border-[#66FCF1]"/>
              <Input type="text" name="subject" placeholder="Subject (optional)"
                     className="mb-4 border-[#45A29E] focus:border-[#66FCF1]"/>
              <Textarea name="message" placeholder="Message" required className="mb-4 border-[#45A29E] focus:border-[#66FCF1]"/>
              <Button className="bg-[#66FCF1] text-black hover:bg-[#45A29E]" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
              {formStatus.message && (
                <div className={cn(
                  "mt-4 text-sm",
                  formStatus.type === 'success' ? "text-green-500" : "text-red-500"
                )} role="alert">
                  {formStatus.message}
                </div>
              )}
            </div>
            <div className="text-white">
              <p>
                Email: <a href="mailto:ernie.saavedra@gmail.com"
                          className="hover:text-[#66FCF1]">ernie.saavedra@gmail.com</a>
              </p>
              <p>
                GitHub: <a href="https://github.com/flareawesome17" target="_blank" rel="noopener noreferrer"
                           className="hover:text-[#66FCF1]">flareawesome17</a>
              </p>
              <p>
                LinkedIn: <a href="https://www.linkedin.com/in/ernie-saavedra-jr-356920262/" target="_blank"
                             rel="noopener noreferrer" className="hover:text-[#66FCF1]">Ernie Saavedra Jr</a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
