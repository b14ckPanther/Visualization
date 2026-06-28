import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "ויזואליזציה של מידע - תרגול למבחן",
  description: "אפליקציית תרגול למבחן בויזואליזציה של מידע - אוניברסיטת חיפה",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Navbar />
        {children}
        <footer style={{
          textAlign: 'center',
          padding: '2rem 1rem',
          borderTop: '1px solid var(--border-subtle)',
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          position: 'relative',
          zIndex: 1,
          background: 'rgba(10, 10, 18, 0.4)',
          backdropFilter: 'blur(10px)',
          fontFamily: 'var(--font-he)'
        }}>
          <div>© {new Date().getFullYear()} b14ckPanther. כל הזכויות שמורות.</div>
        </footer>
      </body>
    </html>
  );
}
