import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Where Winds Meet | Wuxia Worldbook",
  description:
    "สารบัญข้อมูลและแรงบันดาลใจของ Where Winds Meet โลกเปิดแนว Wuxia ที่คุณออกแบบได้เอง",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className="antialiased">{children}</body>
    </html>
  );
}
