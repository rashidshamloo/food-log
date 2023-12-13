import "@/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Poppins as FontSans } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeLoader from "@/components/ThemeLoader";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export const metadata = {
  title: "Food Log",
  description: "Food nutritent tracking application by Rashid Shamloo",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <ThemeLoader />
        </head>
        <body
          className={cn(
            "flex min-h-screen w-[100vw] flex-col items-stretch justify-stretch overflow-x-hidden bg-secondary px-8 pb-0 pt-8 font-sans text-foreground antialiased",
            fontSans.variable,
          )}
        >
          <div className="mx-auto flex w-full max-w-5xl flex-grow flex-col items-stretch justify-stretch rounded-md bg-background p-8">
            <Header />
            <main className="flex h-full w-full items-start justify-center">
              {children}
            </main>
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
