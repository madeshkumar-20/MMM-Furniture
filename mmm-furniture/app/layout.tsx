import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import StickyContact from "@/components/StickyContact";

export const metadata = {
  title: "M.M.M Furniture & Interior Decor",
  description: "Premium furniture & interior solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />

        {/* 🔥 Global Sticky Message Button */}
        <StickyContact />
      </body>
    </html>
  );
}
