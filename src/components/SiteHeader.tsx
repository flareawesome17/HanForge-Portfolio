"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Image from 'next/image';

interface SiteHeaderProps {
  navItems: {
    title: string;
    href: string;
  }[];
  activeSection: string;
}

const SiteHeader: React.FC<SiteHeaderProps> = ({ navItems, activeSection }) => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full border-b bg-background transition-all duration-300 ease-in-out",
        isSticky ? "bg-background/90 backdrop-blur-sm" : "opacity-0 transform translate-y-[-100%]",
      )}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <MobileNav navItems={navItems} />
          <a className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300" href="/">
            <Image
              src="/favicon.png"
              alt="HanForge Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="hidden sm:inline font-semibold">{siteConfig.name}</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                activeSection === item.href.substring(1) ? "text-accent" : "text-foreground hover:text-accent",
                "transition-colors duration-200"
              )}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
