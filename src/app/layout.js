// app/layout.js
import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ghost And Haunt</title>
      </head>
      <body className="bg-[url('http://www.dev.causalfunnels.com/wp-content/uploads/2025/04/background.jpg')] bg-repeat m-0 p-10  sm:pr-[18%] sm:pt-[5%] sm:pb-[10%] sm:pl-[18%]">
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
