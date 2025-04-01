import "./globals.css";
import { Cute_Font, Fira_Code, Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
  title: "Murali Singh",
  description: "Portfolio Website of Murali Singh created with Next app",
};

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fira-code",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head/>
      <body className={`${firaCode.className}`}>
        {children}
      </body>
    </html>
  );
}
