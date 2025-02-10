import { Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const inter = Inter({ subsets: ["latin"] ,weight:['100','200','300','400','500','600','700','800'],variable:"--font-inter"});

export const metadata = {
  title: "Ideator GEC",
  description: "Created by Ideator GEC 23-24",
  icons: {
    icon: '/idtr_logo_nw.png', // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header/>
        <StairTransition/>
        <PageTransition/>
        {children}
        <PageTransition/>
        </body>
    </html>
  );
}
