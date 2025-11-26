import type { Metadata } from "next";
import { Cinzel, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const display = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-display",
});

const body = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Where Wind Mind | Wuxia Worldbook",
  description:
    "สารบัญข้อมูลและแรงบันดาลใจของ Where Wind Mind โลกเปิดแนว Wuxia ที่คุณออกแบบได้เอง",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
