import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { CustomCursor } from "@/components/cursor/CustomCursor";

export const metadata: Metadata = {
  title: "Alex Chen — Creative Developer & Designer",
  description: "Premium portfolio showcasing creative development, design, and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&f[]=general-sans@200,300,400,500,600,700&f[]=neue-montreal@300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-text-primary overflow-x-hidden selection:bg-accent-glow selection:text-white">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
