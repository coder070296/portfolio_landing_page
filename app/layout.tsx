import "./globals.css";

export const metadata = {
  title: "Bhanu Pratap Singh – Portfolio",
  description: "AI SaaS Engineer | Full-Stack + GenAI Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
