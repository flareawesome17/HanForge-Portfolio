"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  navItems: {
    title: string;
    href: string;
  }[];
}

const SiteHeader: React.FC<SiteHeaderProps> = ({ navItems }) => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <MobileNav navItems={navItems} />
          <a className="lg:flex items-center font-semibold" href="/">
            {siteConfig.name}
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                pathname === item.href ? "text-secondary-accent" : "text-foreground hover:text-secondary-accent",
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

