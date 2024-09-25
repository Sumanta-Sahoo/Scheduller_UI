import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Schedulrr",
  description: "Meeting scheduling application"
}
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* HEADER */}
        <Header />

        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">{children}</main>

        {/* FOOTER */}
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex flex-col md:flex-row justify-center items-center gap-5 text-center">
          <div className="text-white-500 flex gap-2">
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
          </div>
          <p className="text-white-500">© 2024 Schedulrr. All rights reserved.</p>
        </footer>

      </body>
    </html>
  );
}
