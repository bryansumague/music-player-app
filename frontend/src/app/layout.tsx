import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Music Player App",
  description: "Bryan Sumague",
};

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: Session | null;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <SessionProvider session={session}>
        <div className="flex flex-col h-screen m-3">
          <TopNav />
          <div className="flex flex-1 space-x-5">
            <div className="w-80 hidden lg:block">
              <Sidebar />
            </div>
            <main className="flex-1">
              <div className="p-4 bg-zinc-900 rounded-lg">
                {children}
              </div>
            </main>
          </div>
        </div>
        </SessionProvider>
      </body>
    </html>
  );
}
