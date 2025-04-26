import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'HanForge',
  description: 'A minimalist portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">{children}</main>
          <footer className="flex justify-center items-center p-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} HanForge. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
