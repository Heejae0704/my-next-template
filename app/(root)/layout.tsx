import ThemeProvider from "@/context/Theme";
import type { Metadata } from "next";
import { Architects_Daughter as ArchitectsDaughter } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.ttf",
  variable: "--font-pretendard",
});

const notoSerifKR = localFont({
  src: "../fonts/NotoSerifKR-VariableFont_wght.ttf",
  variable: "--font-noto-serif",
});

const nanumGothicCoding = localFont({
  src: [
    {
      path: "../fonts/NanumGothicCoding-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/NanumGothicCoding-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nanum-gothic-coding",
});

const architectsDaughter = ArchitectsDaughter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-architects-daughter",
});

export const metadata: Metadata = {
  title: "My NextJS Template",
  description: "Initial setup with ESLint, Prettier, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${pretendard.className} ${notoSerifKR.variable} ${nanumGothicCoding.variable} ${architectsDaughter.variable}  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
