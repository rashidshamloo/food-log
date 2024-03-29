import "@/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { type Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeLoader from "@/components/ThemeLoader";
import { cn } from "@/lib/utils";
import { clerkStyles } from "@/styles/clerk";

// fonts
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

// metadata
export const metadata: Metadata = {
  title: "Food Log by Rashid Shamloo",
  description: "Food nutrient tracking application by Rashid Shamloo",
  keywords: [
    "food",
    "tracking",
    "log",
    "diet",
    "nutrient",
    "application",
    "rashid shamloo",
  ],
  icons: { icon: "/logo.png" },
  metadataBase: new URL("https://food-log.rashidshamloo.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Food Log by Rashid Shamloo",
    siteName: "Food Log by Rashid Shamloo",
    description: "Food nutrient tracking application by Rashid Shamloo",
    images: {
      url: "/home.webp",
      alt: "Food Log by Rashid Shamloo",
      width: 1098,
      height: 1130,
      type: "image/webp",
      secureUrl: "/home.webp",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Log by Rashid Shamloo",
    description: "Food nutrient tracking application by Rashid Shamloo",
    images: "/home.webp",
    creator: "@rashidshamloo",
    site: "@rashidshamloo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignUpUrl="/log" afterSignInUrl="/log">
      <html lang="en">
        <head>
          <ThemeLoader />
        </head>
        <body
          className={cn(
            "relative left-[calc((100vw_-_100%)_/_2)] flex min-h-screen flex-col items-stretch justify-stretch overflow-x-hidden bg-secondary font-sans text-foreground antialiased md:px-8 md:pt-8",
            fontSans.variable,
            clerkStyles,
          )}
        >
          <h1 className="sr-only">Food Log</h1>
          <div className="mx-auto flex w-full max-w-5xl flex-grow flex-col items-stretch justify-stretch rounded-md bg-background md:p-8">
            <Header />
            <main className="flex w-full flex-grow items-start justify-center px-8 py-8 md:px-0 md:pb-0">
              {children}
            </main>
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
