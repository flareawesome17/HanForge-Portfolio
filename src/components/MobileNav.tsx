"use client";
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { DialogTitle } from '@radix-ui/react-dialog';

interface MobileNavProps {
  navItems: {
    title: string;
    href: string;
  }[];
}

const MobileNav: React.FC<MobileNavProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:w-2/3 lg:w-1/2">
        <div className="grid gap-4 py-4">
          <DialogTitle className="font-semibold text-lg">{siteConfig.name}</DialogTitle>
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Button key={item.href} variant="ghost" className="justify-start">
                <a href={item.href} onClick={handleClose}>
                  {item.title}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
