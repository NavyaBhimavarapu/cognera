import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cognera — Privacy-First Behavioral Intelligence",
  description: "Understand behavior without compromising privacy.",
  icons: {
    icon:[ 
      {url:"/icon.png", type:"image/png"},
    ],
    apple:"/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} bg-[#0F111A]`}>
        <div className="relative min-h-screen">
          {/* Global purple glow blobs */}
          <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-purple-500/30 blur-[120px] rounded-full pointer-events-none z-0" />
          <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/30 blur-[120px] rounded-full pointer-events-none z-0" />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full pointer-events-none z-0" />
          
          {/* Content sits above blobs */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}