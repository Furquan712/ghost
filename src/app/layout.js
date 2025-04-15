// app/layout.js
import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body className="bg-[url('http://www.dev.causalfunnels.com/wp-content/uploads/2025/04/background.jpg')] bg-repeat m-0 p-0">
        {children}
        <Footer />
      </body>
    </html>
  );
}
