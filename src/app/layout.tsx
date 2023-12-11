import "@/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter as FontSans } from "next/font/google";

import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Food Log",
  description: "Food nutritent tracking application by Rashid Shamloo",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans text-foreground antialiased",
            fontSans.variable,
          )}
        >
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
