import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gali Mart - Your trusted multi-vendor marketplace bringing you quality",
  description: "Your trusted multi-vendor marketplace bringing you quality products from verified sellers worldwide. Shop smart, shop with confidence.Every Products at your Fingertips and Start shopping with Ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body
        className={` w-full min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Toaster position="top-right" expand richColors closeButton />

          {children}

        </ThemeProvider>
      </body>
    </html>

  );
}
