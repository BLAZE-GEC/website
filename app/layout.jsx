import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import PageLoader from "@/components/PageLoader";
import ThemeProvider from "@/components/ThemeProvider";

// Heading font — matches the target design's serif headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

// Body font — matches the target design's clean sans-serif body text
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata = {
  title: "Ideator GEC",
  description: "Created by Ideator GEC",
  icons: {
    icon: "/assests/idtr_logo_nw.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${outfit.variable}`}>
        <ThemeProvider>
          <PageLoader />
          <BackgroundAnimation />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}